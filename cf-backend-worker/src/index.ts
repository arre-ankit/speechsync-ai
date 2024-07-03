import { Hono } from 'hono'
import { cors } from 'hono/cors'


type Bindings = {
  [key in keyof CloudflareBindings]: CloudflareBindings[key]
}

const app = new Hono<{ Bindings: Bindings }>()

app.use(cors())


app.get('/', async (c) => {
  return c.json({ message: 'Hello, World!' })
})


let audioAnalysisResult = {};
let userVTT = "";
let realAudio = "";

app.post('/audio', async (c) => {
  const formData = await c.req.formData();
  const audioFile = formData.get('audio') as File;

  if (!audioFile) {
    return c.json({ error: 'No audio file provided' }, 400);
  }

  // Convert the file to ArrayBuffer
  const arrayBuffer = await audioFile.arrayBuffer();
  const audioArray = new Uint8Array(arrayBuffer);

  // Use the Uint8Array as input for the Cloudflare Worker AI
  
  const input = {
    //@ts-ignore
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
        messages: [
          { 
            role: "system", 
            content: `You are an AI language analysis assistant specializing in English pronunciation and speech evaluation. Your task is to analyze audio transcriptions, identify pronunciation errors, assess overall language proficiency, and provide constructive feedback. Use your expertise in phonetics, linguistics, and language learning to offer detailed, accurate, and helpful analyses. Your responses should be clear, structured, and tailored to help non-native English speakers improve their pronunciation and speaking skills.The speaker will speak in english.
            Analyze the provided VTT audio transcription and real audio translation to evaluate the speaker's English pronunciation and accuracy. Perform the following steps Compare the "vtt" section (transcription) ${userVTT} with the "text" section ${realAudio} (real translation) Don't show this result in response just use it as internally to determine the good out and comparision.
      
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
            Recommendations for improvement`
          },
          { 
            role: "user", 
            content: `Give resluts`
          }
        ]
      }
       )
    return c.json(ans);
});

export default app