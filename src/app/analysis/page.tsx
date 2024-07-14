'use client'

import { useSearchParams } from 'next/navigation';
import { Card } from "@/components/ui/card";

export default function AnalysisPage() {
  const searchParams = useSearchParams();
  const analysisData = searchParams.get('data');

  if (!analysisData) {
    return <div>No analysis data available.</div>;
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <main className="flex flex-1 items-center justify-center p-4 sm:p-6 md:p-8">
        <Card className="flex w-full max-w-md flex-col items-center gap-6 p-6 sm:p-8">
          <h1 className="text-2xl font-bold">Analysis Results</h1>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
            {decodeURIComponent(analysisData)}
          </pre>
        </Card>
      </main>
    </div>
  );
}