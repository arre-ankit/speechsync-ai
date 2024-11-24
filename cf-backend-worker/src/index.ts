import { Hono } from 'hono'
import { cors } from 'hono/cors'

interface AudioAnalysisResult {
  text: string;
  vtt: string;
  words: Array<any>; // Replace `any` with a more specific type if possible
  // Include other properties returned by the AI
}

type Bindings = {
  [key in keyof CloudflareBindings]: CloudflareBindings[key]
}

const app = new Hono<{ Bindings: Bindings }>()

app.use(
  '*', 
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type']
  })
);

app.get('/', async (c) => {
  return c.json({ message: 'Hello, World!' })
})


let audioAnalysisResult = {};
let userVTT = "";
let realAudio = "";
let wordCount = 0;

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
  const answer = await c.env.AI.run('@cf/openai/whisper', input)as AudioAnalysisResult;

  audioAnalysisResult = answer;
  realAudio += answer.text;
  userVTT += answer.vtt;
  wordCount = answer.words.length;

  console.log("audioAnalysisResult", audioAnalysisResult);

  // Return the AI's response
  return c.json(answer);
});


app.get('/analysis', async (c) => {

  if (Object.keys(audioAnalysisResult).length === 0) {
    return c.json({ error: "Audio analysis not yet performed or no data available." });
  }
  //@ts-ignore
  const ans = await c.env.AI.run('@cf/meta/llama-3-8b-instruct',
    {
      messages: [
        { 
          role: "system", 
          content: `You are an AI language analysis assistant. Your task is to analyze English audio transcriptions and provide a JSON output with pronunciation errors, summary, recommendations, and word count. Always respond with valid JSON only.`
        },
        { 
          role: "user", 
          content: `Analyze the following transcriptions:
  
  VTT (user pronunciation): ${userVTT}
  Actual text: ${realAudio}
  
  Provide a JSON response with the following structure:
  {
    "mispronouncedWords": [
      {
        "incorrect": "word from VTT",
        "correct": "word from actual text",
        "reason": "explanation of error"
      }
    ],
    "summary": {
      "correctPercentage": number in percentage (0-100),
      "incorrectPercentage": number in percentage (0-100),
      "patterns": ["error pattern 1", "error pattern 2"]
    },
    "recommendations": ["recommendation 1", "recommendation 2"],
    "wordCount": number
  }
  
  Ensure the JSON is valid and contains all required fields. Do not include any text outside the JSON structure.`
        }
      ]
    }
  );
    console.log("ans", ans);
    return c.json(ans);
    
});

export default app