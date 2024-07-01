import Image from "next/image";
import AudioRecorder from "./components/AudioRecorder";
import Analysis from "./components/Analysis";


export default function Home() {
  return (
    <div>
      <AudioRecorder />
      <Analysis />
    </div>
  );
}
