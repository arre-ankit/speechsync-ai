import React from 'react'
import AudioRecorder from '@/app/components/AudioRecorder'


export const runtime = 'edge'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div>
        <AudioRecorder />
    </div>
  )
}

export default Dashboard