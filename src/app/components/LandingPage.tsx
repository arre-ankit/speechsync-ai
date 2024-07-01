import React from 'react'

type Props = {}
export const runtime = 'edge'

const LandingPage = (props: Props) => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
  <header className="px-4 lg:px-6 h-14 flex items-center">
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
        className="h-6 w-6"
      >
        <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"></path>
        <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"></path>
        <path d="M17 15a3.5 3.5 0 0 0-.025-4.975"></path>
      </svg>
      <span className="sr-only">SpeechSync.ai</span>
    </a>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
        How It Works
      </a>
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Contact
      </a>
    </nav>
  </header>

   <main className="flex-1">
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <img
            src="/next.svg"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            width="550"
            height="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Sync Your Speech, Unlock Global Opportunities
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                AI-powered accent improvement for aspiring remote workers
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href="/dashboard"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
              className="h-12 w-12 text-primary"
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
              className="h-12 w-12 text-primary"
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
              className="h-12 w-12 text-primary"
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              SpeechSync.ai guides you through a proven process to improve your English accent.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
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
              className="h-12 w-12 text-primary"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" x2="12" y1="19" y2="22"></line>
            </svg>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Analyze</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your speech patterns and identifies areas for improvement.
              </p>
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
              className="h-12 w-12 text-primary"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Learn</h3>
              <p className="text-muted-foreground">
                Receive personalized lessons and exercises to improve your pronunciation and intonation.
              </p>
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
              className="h-12 w-12 text-primary"
            >
              <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
            </svg>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Practice</h3>
              <p className="text-muted-foreground">
                Engage in interactive practice scenarios to apply what you've learned.
              </p>
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
              className="h-12 w-12 text-primary"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Succeed</h3>
              <p className="text-muted-foreground">
                Achieve your goal of improving your English accent and unlock new opportunities.
              </p>
            </div>
          </div>
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

export default LandingPage