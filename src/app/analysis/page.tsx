'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const runtime = 'edge'

interface AnalysisJsonType {
  mispronouncedWords: any[]; // Since it's an array with length 0, it's unclear what type of elements it should contain.
  recommendations: string[];
  summary: {
    correctPercentage: number;
    incorrectPercentage: number;
    patterns: any[]; // Assuming patterns is an array, but the type of elements is unclear.
  },
  wordCount: number;
}

export default function AnalysisPage() {
    const [analysisJson, setAnalysisJson] = useState<AnalysisJsonType>({} as any);
    const router = useRouter();
  
    useEffect(() => {
      const storedAnalysis = localStorage.getItem('audioAnalysis');
      if (storedAnalysis) {
        try {
          // Try to extract only the JSON part
          const jsonStart = storedAnalysis.indexOf('{');
          const jsonEnd = storedAnalysis.lastIndexOf('}') + 1;
  
          if (jsonStart !== -1 && jsonEnd !== -1) {
            const validJsonString = storedAnalysis.substring(jsonStart, jsonEnd);
            const parsedJson = JSON.parse(validJsonString);
            setAnalysisJson(parsedJson);
            console.log('Parsed JSON:', parsedJson);
            localStorage.clear();
          } 
        else {
            console.error('No JSON found in stored analysis:', storedAnalysis);
        }
        } 
        catch (error) {
            console.error('Error parsing stored analysis:', error);
        }
        }
        localStorage.clear();

    }, []);

  return (
    <div className="flex flex-col min-h-screen w-full">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={()=>{
            router.push('/dashboard');
          }}>
            <ArrowLeftIcon className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="font-semibold text-lg md:text-xl">Analysis</h1>
        </div>
        <div className="grid gap-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>{analysisJson?.summary?.correctPercentage}%</CardTitle>
                <CardDescription>Correct Pronunciation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-full">
                  <CheckIcon className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>{analysisJson?.summary?.incorrectPercentage}%</CardTitle>
                <CardDescription>Incorrect Pronunciation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-full">
                  <XIcon className="h-8 w-8 text-red-500" />
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>{analysisJson?.wordCount}</CardTitle>
                <CardDescription>Total Words Analyzed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-full">
                  <ClipboardIcon className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Pronunciation Improvement Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              {analysisJson?.recommendations?.length ? (
                <ul className="list-disc list-inside">
                    {analysisJson.recommendations.map((recommendation, index) => (
                        <li key={index}>{recommendation}</li>
                    ))}
                </ul>
                ) : (
                    <p>No recommendations available.</p>
                )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function CheckIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
}

function XIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
}

function ArrowLeftIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
    )
  }

  function ClipboardIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      </svg>
    )
  }