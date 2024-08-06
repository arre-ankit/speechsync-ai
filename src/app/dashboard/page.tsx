'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import AudioRecorder from '@/app/components/AudioRecorder'

export const runtime = 'edge'


export default function Dashboard() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin')
    },
  })

  if (!session) {
    return null
  }

  return (
    <div>
      <AudioRecorder />
    </div>
  )
}