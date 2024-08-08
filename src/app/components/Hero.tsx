import React, { use } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FlipWords } from '@/components/ui/flip-words'
import GlobeComponent from './GlobeComponent';

type Props = {}

const Hero = (props: Props) => {
    const session = useSession()
    const router = useRouter()
    const words = ["Speech", "Accent", "Pronunciation"];

  return (
    <main>
          <section className="w-100 py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <GlobeComponent  />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-6">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Sync Your <FlipWords words={words} className='dark:text-yellow-400' />
                    </h1>
                    <h1 className="text-xl font-bold tracking-tighter sm:text-2xl xl:text-3xl/none">
                      Unlock Global Opportunities
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      AI-powered accent improvement for aspiring remote workers
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    {session.data?.user ? <Button onClick={()=>{router.push("/dashboard")}}>Go to Dashboard</Button> 
                    : <Button onClick={()=>{signIn("google")}}>Sign In</Button>
                    }
                  </div>
                </div>
              </div>
            </div>
          </section>
          </main>
  )
}

export default Hero