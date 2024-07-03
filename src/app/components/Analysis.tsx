'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

export const runtime = 'edge'

type Props = {}

const Analysis = (props: Props) => {
    const [analysis, setAnalysis] = useState<string | null>(null);

    const audioAnalysis = async () => {
        try {
            const analysisResponse = await fetch('https://cf-backend-worker.ankit992827.workers.dev/analysis');
            const analysisResult:any = await analysisResponse.json();
            
            // Extract the 'response' field if it exists, otherwise use the entire result
            const responseText = analysisResult.response || JSON.stringify(analysisResult, null, 2);
            setAnalysis(responseText);
        } catch (error) {
            console.error('Error fetching analysis:', error);
            setAnalysis('Error fetching analysis. Please try again.');
        }
    }
    
    return (
        <div className='p-2 flex flex-col items-center justify-center'>
            <h2>Analysis Result:</h2>
            <Button onClick={audioAnalysis}>Get Analysis</Button>
            {analysis && (
                <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                    {analysis}
                </pre>
            )}
        </div>
    )
}

export default Analysis