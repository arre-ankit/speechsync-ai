'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { LoadingOverlay } from '@/app/components/LoadingOverlay'
import { Card } from '@/components/ui/card'
import { MicIcon, CircleStopIcon } from 'lucide-react'

const sampleScript = `Technology is the backbone of our modern world, driving innovation and progress in every aspect of our lives. From the smallest gadgets to complex systems, technology is constantly evolving to meet our needs and improve our experiences.`;

export const runtime = 'edge'

const ReactMediaRecorder = dynamic(
  () => import('react-media-recorder').then((mod) => mod.ReactMediaRecorder),
  { ssr: false }
)

export default function AudioRecorder() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [analysis, setAnalysis] = useState<string | null>(null)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)

  const sendAudioToServer = async (mediaBlobUrl: any) => {
    try {
      const response = await fetch(mediaBlobUrl)
      const blob = await response.blob()

      const formData = new FormData()
      formData.append('audio', blob, 'audio.webm')

      const serverResponse = await fetch('https://cf-backend-worker.ankit992827.workers.dev/audio', {
        method: 'POST',
        body: formData,
      })

      if (!serverResponse.ok) {
        throw new Error('Server response was not ok')
      }

      const result = await serverResponse.json()
      console.log("Audio processing result:", result)
      return mediaBlobUrl
    } catch (error) {
      console.error('Error processing audio:', error)
    }
  }

  const audioAnalysis = async () => {
    try {
      const analysisResponse = await fetch('https://cf-backend-worker.ankit992827.workers.dev/analysis')
      const analysisResult: any = await analysisResponse.json()
      const responseText = analysisResult.response || JSON.stringify(analysisResult, null, 2)
      setAnalysis(responseText)
      return responseText
    } catch (error) {
      console.error('Error fetching analysis:', error)
      setAnalysis('Error fetching analysis. Please try again.')
    }
  }

  return (
    <>
      {isLoading && <LoadingOverlay />}
      <ReactMediaRecorder
        audio
        onStop={(blobUrl) => {
          setAudioUrl(blobUrl)
        }}
        render={({ startRecording, stopRecording, mediaBlobUrl }) => (
          <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
            <main className="container mx-auto pt-20 pb-32">
              <Card className="max-w-3xl mx-auto p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-center text-2xl font-semibold mb-6">
                  Sample Script
                </h2>
                <p className="text-lg leading-relaxed whitespace-pre-line text-card-foreground/80">
                  {sampleScript}
                </p>
              </Card>

              <div className="flex justify-center mt-2 lg:mt-8">
                <Button
                  size="lg"
                  className="h-24 w-24 rounded-full transition-all duration-300 "
                  onClick={() => {
                    if (isRecording) {
                      stopRecording()
                    } else {
                      startRecording()
                    }
                    setIsRecording(!isRecording)
                  }}
                >
                  {isRecording ? (
                    <CircleStopIcon className="h-16 w-16" />
                  ) : (
                    <MicIcon className="h-16 w-16" />
                  )}
                </Button>
              </div>
              {!isRecording && <p className="text-center text-lg mt-2">Press the Mic Icon to Start Recording</p>}
              {isRecording && <p className="text-center text-lg mt-2">Recording...</p>}

              {audioUrl && (
                <div className="flex flex-col items-center gap-4 mt-1 lg:mt-8">
                  <Card className="p-4 bg-card/50 backdrop-blur-sm">
                    <audio
                      className="w-80 h-12"
                      src={audioUrl}
                      controls
                    />
                  </Card>
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      asChild
                    >
                      <a href={audioUrl} download="audio.webm">
                        Download Audio
                      </a>
                    </Button>
                    <Button
                      onClick={async () => {
                        setIsLoading(true)
                        try {
                          const audioUrl = await sendAudioToServer(mediaBlobUrl)
                          const analysisResult = await audioAnalysis()
                          localStorage.setItem('audioAnalysis Result', analysisResult)
                          localStorage.setItem('audioUrl', audioUrl)
                        } catch (error) {
                          console.error("Error processing audio:", error)
                        } finally {
                          setIsLoading(false)
                          router.push("/analysis")
                        }
                      }}
                      disabled={!audioUrl}
                    >
                      Process and Analyse
                    </Button>
                  </div>
                </div>
              )}

              {analysis && (
                <div className="mt-8 p-4 rounded-lg bg-card/50 backdrop-blur-sm">
                  <pre className="whitespace-pre-wrap text-sm">{analysis}</pre>
                </div>
              )}
            </main>
          </div>
        )}
      />
    </>
  )
}

