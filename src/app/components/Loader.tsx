import React from 'react'
import { Progress } from '@/components/ui/progress'
import { useState } from 'react'

export const runtime = 'edge'

type Props = {}

export const Loader = () => {
    const [isLoading, setIsLoading] = useState(30)

    setInterval(() => {
        setIsLoading(60);
    }, 1000);

    setTimeout(() => {
      setIsLoading(70);
  }, 2000);

  return (
    <div className="h-fit">
      <div className="bg-card text-card-foreground rounded-lg p-8 shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-lg font-medium">Processing Audio & Analyzing</div>
          <Progress value={isLoading} aria-label="Loading progress" />
        </div>
      </div>
    </div>
  )
}

export default Loader