import React from 'react'
import { Loader } from '@/app/components/Loader'

export const runtime = 'edge'


export const LoadingOverlay = () => (
    <div className="fixed inset-0 bg-white bg-opacity-1500 flex items-center justify-center z-50">
      <Loader />
    </div>
  );

export default LoadingOverlay