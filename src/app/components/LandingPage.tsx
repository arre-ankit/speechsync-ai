import React from 'react'
import Image from 'next/image'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { ModeToggle } from './Togglemode'

type Props = {}
export const runtime = 'edge'

const LandingPage = (props: Props) => {
  return (
    <div className="flex flex-col min-h-100vh dark">
  <header className="px-4 lg:px-6 h-14 flex items-center p-1">
    <a className="flex items-center justify-center" href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="h-8 w-8"
      >
        <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"></path>
        <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"></path>
        <path d="M17 15a3.5 3.5 0 0 0-.025-4.975"></path>
      </svg>
    </a>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <a className="text-sm font-medium hover:underline underline-offset-4" href="https://github.com/arre-ankit">
      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      </a>
    </nav>
    <div className='p-3'>
      <ModeToggle />
    </div>
    
  </header>

   <main className="flex-1">
    <section className="w-100 py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            src="/next.svg"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square "
            width="550"
            height="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Sync Your Speech, Unlock Global Opportunities
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                AI-powered accent improvement for aspiring remote workers
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/70 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                href="/dashboard"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              SpeechSync.ai helps you improve your English accent with cutting-edge AI technology.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-10 w-10 text-primary"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" x2="12" y1="19" y2="22"></line>
            </svg>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Real-time Feedback</h3>
              <p className="text-muted-foreground">Get instant feedback on your pronunciation and intonation.</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-10 w-10 text-primary"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Personalized Lessons</h3>
              <p className="text-muted-foreground">Tailor your learning experience to your specific needs.</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-10 w-10 text-primary"
            >
              <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
            </svg>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Practice Scenarios</h3>
              <p className="text-muted-foreground">Prepare for real-world conversations with interactive practice.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="w-full py-12 md:py-24 lg:py-32">
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
  </main>
  <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
    <p className="text-xs text-muted-foreground">© 2024 SpeechSync.ai. All rights reserved.</p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      <a className="text-xs hover:underline underline-offset-4" href="#">
        Terms of Service
      </a>
      <a className="text-xs hover:underline underline-offset-4" href="#">
        Privacy
      </a>
    </nav>
  </footer>
</div>
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export default LandingPage