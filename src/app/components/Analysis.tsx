'use client'
import React from 'react'
import { useState } from 'react'

type Props = {}

const Analysis = (props: Props) => {
    const [analysis, setAnalysis] = useState(null);
    // Now get the analysis
    const audioAnalysis = async () =>{
        const analysisResponse = await fetch('http://localhost:8787/analysis');
        const analysisResult = await analysisResponse.json();
        setAnalysis(analysisResult as any);
    }
    
  return (
        <div>
          <h2>Analysis Result:</h2>
          <button onClick={audioAnalysis}>Get Analysis</button>
          <pre>{JSON.stringify(analysis, null, 2)}</pre>
        </div>
      
  )
}

export default Analysis