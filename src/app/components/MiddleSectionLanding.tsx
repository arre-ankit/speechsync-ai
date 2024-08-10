import React from 'react'

type Props = {}

const MiddleSectionLanding = (props: Props) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-60">
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
  )
}
export default MiddleSectionLanding