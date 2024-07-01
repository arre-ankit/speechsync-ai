import React from 'react'
import AudioRecorder from '@/app/components/AudioRecorder'
import Analysis from '@/app/components/Analysis'

export const runtime = 'edge'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div>
        <AudioRecorder />
        <Analysis />
    </div>
  )
}

export default Dashboard