import type { NextRequest } from 'next/server'

export const runtime = 'edge'

// route.ts
export async function GET(request: NextRequest) {
    const apiResponse = await fetch('https://cf-ai-worker.ankit992827.workers.dev/')
    const apiResponseText = await apiResponse.text()
    return new Response(apiResponseText)
}
