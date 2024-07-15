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

app.use(cors())


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
  const answer = await c.env.AI.run('@cf/openai/whisper-tiny-en', input)as AudioAnalysisResult;

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

    const ans = await c.env.AI.run('@cf/meta/llama-2-7b-chat-fp16',
      {
        messages: [
          { 
            role: "system", 
            content:`You are an AI language analysis assistant specializing in English pronunciation and speech evaluation. Your task is to analyze English audio transcriptions, identify pronunciation errors, assess overall language proficiency, and provide constructive feedback. Use your expertise in English phonetics, linguistics, and language learning to offer detailed, accurate, and helpful analyses. Your responses should be clear, structured, and tailored to help improve English pronunciation and speaking skills. The speaker will speak only in English.
                    Analyze the provided transcriptions by comparing the "vtt" section (${userVTT}) with the "text" section (${realAudio}). Identify any discrepancies between these two as potential pronunciation errors. Your output must be a JSON object containing the following keys:
                    
                    mispronouncedWords: An array of objects, each containing:
                    incorrect: A string from the vtt section.
                    correct: A string from the text section.
                    reason: A string explaining the pronunciation error.
                    
                    summary: An object with:
                    correctPercentage: A number representing the percentage of correctly pronounced words.
                    incorrectPercentage: A number representing the percentage of incorrectly pronounced words.
                    patterns: An array of strings describing observed error patterns in English pronunciation.
                    
                    recommendations: An array of strings with suggestions for improving English pronunciation.

                    wordCount: A number representing the total number of words in the transcription.

                    Only consider English words and pronunciations. Do not include or consider any non-English languages in your analysis.
                    Example JSON Output:

                    json
                    Copy code
                    {
                        "mispronouncedWords": [
                            {
                                "incorrect": "thier",
                                "correct": "their",
                                "reason": "Substituted the 'i' sound with an 'e' sound"
                            },
                            {
                                "incorrect": "aks",
                                "correct": "ask",
                                "reason": "Reversed the 's' and 'k' sounds"
                            }
                        ],
                        "summary": {
                            "correctPercentage": 90,
                            "incorrectPercentage": 10,
                            "patterns": [
                                "Vowel substitution errors",
                                "Consonant reversal errors"
                            ]
                        },
                        "recommendations": [
                            "Practice differentiating between similar vowel sounds",
                            "Focus on the correct order of consonants in commonly mispronounced words"
                        ],
                        "wordCount": ${wordCount}
                    }`
          },
          { 
            role: "user", 
            content: "Analyze the following transcription and provide the results in the specified JSON format:\n\n[Insert transcription here]"
          }
        ]
      }
       )
    console.log("ans", ans);
    return c.json(ans);
    
});

export default app