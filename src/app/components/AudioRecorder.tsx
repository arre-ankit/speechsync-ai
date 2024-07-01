'use client'
import { useState } from 'react';
import dynamic from 'next/dynamic';

const ReactMediaRecorder = dynamic(
  () => import('react-media-recorder').then((mod) => mod.ReactMediaRecorder),
  { ssr: false }
);

const AudioRecorder = () => {

  const sendAudioToServer = async (mediaBlobUrl:any) => {
    try {
      const response = await fetch(mediaBlobUrl);
      const blob = await response.blob();
      
      const formData = new FormData();
      formData.append('audio', blob, 'audio.webm');

      const serverResponse = await fetch('http://localhost:8787/audio', {
        method: 'POST',
        body: formData,
      });
      
      if (!serverResponse.ok) {
        throw new Error('Server response was not ok');
      }

      const result = await serverResponse.json();
      console.log("Audio processing result:", result);
    } catch (error) {
      console.error('Error processing audio:', error);
    }
  };

  return (
    <div>
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <button onClick={() => sendAudioToServer(mediaBlobUrl)} disabled={!mediaBlobUrl}>
              Process Audio
            </button>
            <audio src={mediaBlobUrl} controls />
          </div>
        )}
      />
    </div>
  )
}

export default AudioRecorder;