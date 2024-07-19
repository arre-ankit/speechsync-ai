'use client'
import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'
import { LoadingOverlay } from '@/app/components/LoadingOverlay'

export const runtime = 'edge'

const ReactMediaRecorder = dynamic(
  () => import('react-media-recorder').then((mod) => mod.ReactMediaRecorder),
  { ssr: false }
);


export default function AudioRecorder() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [isRecording, setIsRecording] = useState(false)
    const [analysis, setAnalysis] = useState<string | null>(null);
    

    const sendAudioToServer = async (mediaBlobUrl:any) => {
      try {
        const response = await fetch(mediaBlobUrl);
        const blob = await response.blob();
        
        const formData = new FormData();
        formData.append('audio', blob, 'audio.webm');
  
        const serverResponse = await fetch('https://cf-backend-worker.ankit992827.workers.dev/audio', {
          method: 'POST',
          body: formData,
        });
        
        if (!serverResponse.ok) {
          throw new Error('Server response was not ok');
        }
  
        const result = await serverResponse.json();
        console.log("Audio processing result:", result);
        return mediaBlobUrl;
      } catch (error) {
        console.error('Error processing audio:', error);
      }
    };

    const audioAnalysis = async () => {
      try {
          const analysisResponse = await fetch('https://cf-backend-worker.ankit992827.workers.dev/analysis');
          const analysisResult:any = await analysisResponse.json();
          
          // Extract the 'response' field if it exists, otherwise use the entire result
          const responseText = analysisResult.response || JSON.stringify(analysisResult, null, 2);
          setAnalysis(responseText);
          return responseText;
      } catch (error) {
          console.error('Error fetching analysis:', error);
          setAnalysis('Error fetching analysis. Please try again.');
      }

    }


  return (
    <>
      {isLoading && <LoadingOverlay />}
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div className={`flex min-h-screen w-full flex-col bg-background`}>
            <main className="flex flex-1 items-center justify-center p-4 sm:p-6 md:p-8"></main>
              <main className="flex flex-1 items-center justify-center p-4 sm:p-6 md:p-8">
                <Card className="flex w-full max-w-md flex-col items-center gap-6 p-6 sm:p-8">
                <p>{status}</p>
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {isRecording? <CircleStopIcon onClick={() => {
                      if(isRecording){
                          stopRecording()
                      }
                      setIsRecording(!isRecording) 
                      }} className="h-10 w-10" /> : <MicIcon onClick={() => {
                      if (isRecording){
                          stopRecording()
                      }
                      else{
                          startRecording()
                      }
                      setIsRecording(!isRecording) 
                      }} className="h-10 w-10" />}
                  </div>
                  <div className="grid gap-2 text-center">
                    <CardTitle>{isRecording ? "Stop Recording" : "Start Recording"}</CardTitle>
                    <CardDescription>{isRecording
                  ? "Click the stop icon to end your recording."
                  : "Click the microphone icon to begin recording your audio."}</CardDescription>
                  </div>
                  <div className="grid w-full gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="topic" className="text-base">
                        What topic would you like to speak about?
                      </Label>
                      <Select defaultValue="technology">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="history">History</SelectItem>
                          <SelectItem value="literature">Literature</SelectItem>
                          <SelectItem value="current-events">Current Events</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                    <audio className="w-full" src={mediaBlobUrl} controls />
                    <a className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow" href={mediaBlobUrl} download="audio.webm">Download Audio</a>
                    <Button variant="secondary" onClick={async () => {
                      setIsLoading(true);
                      try {
                        const audioUrl = await sendAudioToServer(mediaBlobUrl);
                        const analysisResult = await audioAnalysis();
                        localStorage.setItem('audioAnalysis Result', analysisResult);
                        localStorage.setItem('audioUrl', audioUrl);
                      } catch (error) {
                        console.error("Error processing audio:", error);
                      } finally {
                        setIsLoading(false);
                        router.push(`/analysis`);
                      }
                      }} disabled={!mediaBlobUrl} >
                        Process and Analyse
                    </Button>
                    <div className="flex items-center justify-center">
                      <div className="mr-2" />
                        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                              {analysis}
                          </pre>
                    </div>
                </Card>
              </main>
            </div>
          )}
        />
    </>
    
  )
}

function MicIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}

function CircleStopIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <rect width="6" height="6" x="9" y="9" />
    </svg>
  )
}