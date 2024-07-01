import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'


type Bindings = {
  [key in keyof CloudflareBindings]: CloudflareBindings[key]
}

const app = new Hono<{ Bindings: Bindings }>()


app.get('/', async (c) => {
  return c.json({ message: 'Hello, World!' })
})


let audioAnalysisResult = {};
let userVTT = "";
let realAudio = "";

app.get('/audio', async (c) => {
  // URL to the audio file in the public directory
  const audioUrl = 'https://github.com/Azure-Samples/cognitive-services-speech-sdk/raw/master/samples/cpp/windows/console/samples/enrollment_audio_katie.wav';

  // Fetch the audio file
  const res = await fetch(audioUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch audio: ${res.statusText}`);
  }

  // Convert the response to a Blob, then to an ArrayBuffer, and finally to a Uint8Array
  const blob = await res.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const audioArray = new Uint8Array(arrayBuffer);

  // Use the Uint8Array as input for the Cloudflare Worker AI
  const input = {
    audio: [...audioArray],
  };

  // Assuming `c.env.AI.run` is the method to call the AI with the audio input
  const answer = await c.env.AI.run('@cf/openai/whisper', input);

  audioAnalysisResult = answer;
  realAudio += answer.text;
  userVTT += answer.vtt;

  console.log("audioAnalysisResult", audioAnalysisResult);

  // Return the AI's response
  return c.json(answer);
});







app.get('/analysis', async (c) => {

  if (Object.keys(audioAnalysisResult).length === 0) {
    return c.json({ error: "Audio analysis not yet performed or no data available." });
  }

    const ans = await c.env.AI.run('@cf/mistral/mistral-7b-instruct-v0.1',
       { 
        prompt: `Analyze the provided VTT audio transcription and real audio translation to evaluate the speaker's English pronunciation and accuracy. Perform the following steps:
                  Compare the "vtt" section (transcription) ${userVTT} with the "text" section ${realAudio} (real translation).
                  Identify words in the "vtt" section that differ from the corresponding words in the "text" section.
                  Evaluate the overall quality of the speaker's English:
                  a. Assess whether the speaker is using correct English grammar and vocabulary.
                  b. Determine if the speaker's pronunciation is generally good or needs improvement.
                  Create a list of words that are pronounced incorrectly, based on the differences between the "vtt" and "text" sections.
                  For each mispronounced word:
                  a. Provide the incorrect pronunciation (from "vtt").
                  b. Provide the correct pronunciation (from "text").
                  c. Explain briefly why the pronunciation is considered incorrect.
                  Summarize the findings:
                  a. Overall assessment of the speaker's English proficiency.
                  b. Percentage of words pronounced correctly vs. incorrectly.
                  c. Patterns in pronunciation errors (e.g., consistent issues with certain sounds or word types).
                  Provide recommendations for improvement:
                  a. Suggest specific areas of focus for the speaker to enhance their pronunciation.
                  b. Recommend exercises or techniques to address the identified issues.

                  Output:
                  Present the analysis in a clear, structured format, including:

                  Overall evaluation
                  List of mispronounced words with correct pronunciations
                  Summary of findings
                  Recommendations for improvement`, 
       })
    return c.json(ans);
});

export default app