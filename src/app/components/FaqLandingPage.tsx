import React from 'react'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
type Props = {}

const FaqLandingPage = (props: Props) => {
  return (
    <section className="w-full py-12 md:py-10 lg:py-4">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get answers to the most common questions about booking hospital appointments.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Collapsible className="space-y-2">
                <CollapsibleTrigger className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-lg font-semibold">What is SpeechSync.ai and who is it for?</h4>
                  <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                </CollapsibleTrigger>
                <CollapsibleContent className="rounded-md border px-4 py-2 text-muted-foreground">
                SpeechSync.ai is an AI-powered web application designed to help college students and professionals improve their English pronunciation for remote work opportunities. 
                It's particularly useful for non-native English speakers looking to enhance their communication skills for international job markets.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="space-y-2">
                <CollapsibleTrigger className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-lg font-semibold"> How does SpeechSync.ai work?</h4>
                  <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                </CollapsibleTrigger>
                <CollapsibleContent className="rounded-md border px-4 py-2 text-muted-foreground">
                Users record their speech using our web interface. The audio is then processed by Whisper ASR for transcription and analyzed by GPT-3.5 for detailed pronunciation feedback. 
                Users receive personalized recommendations for improvement, all in real-time.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="space-y-2">
                <CollapsibleTrigger className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-lg font-semibold">What technologies power SpeechSync.ai?</h4>
                  <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                </CollapsibleTrigger>
                <CollapsibleContent className="rounded-md border px-4 py-2 text-muted-foreground">
                We use Next.js for our frontend, providing a responsive and user-friendly interface. Our backend is built on Cloudflare Workers with Hono, ensuring fast, scalable processing. 
                For AI capabilities, we integrate OpenAI's Whisper ASR and GPT-3.5 models.
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="space-y-2">
                <CollapsibleTrigger className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-lg font-semibold">Can I use SpeechSync.ai on my mobile device?</h4>
                  <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                </CollapsibleTrigger>
                <CollapsibleContent className="rounded-md border px-4 py-2 text-muted-foreground">
                Yes! Our Next.js frontend is fully responsive, allowing you to practice and improve your pronunciation on any device with a web browser and microphone. 
                This flexibility enables you to enhance your skills anytime, anywhere.
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </section>
  )
}


function ChevronDownIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    )
  }

export default FaqLandingPage