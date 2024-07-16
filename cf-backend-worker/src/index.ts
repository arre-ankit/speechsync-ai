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

    const ans = await c.env.AI.run('@cf/meta/llama-2-7b-chat-fp16',
      {
        messages: [
          { 
            role: "system", 
            content:`You are an AI language analysis assistant specializing in English pronunciation and speech evaluation. Your task is to analyze English audio transcriptions, identify pronunciation errors, assess overall language proficiency, and provide constructive feedback. Use your expertise in English phonetics, linguistics, and language learning to offer detailed, accurate, and helpful analyses. Your responses should be clear, structured, and tailored to help improve English pronunciation and speaking skills. The speaker will speak only in English.
                    Analyze the provided transcriptions by comparing the "vtt" section (${userVTT}) with the "text" section (${realAudio}). Identify any discrepancies between these two as potential pronunciation errors. Your output must be a JSON object containing the following keys:
                    
                    mispronouncedWords: An array of objects, each containing:
                    incorrect: A word from the vtt section that was mispronounced can be seen from ${userVTT}.
                    correct: A word from the text section that was correct can be seen from ${realAudio}.
                    reason: A string explaining the pronunciation error.Describe the specific phonetic or articulatory mistake made by the speaker.
                    
                    summary: An object with:
                    correctPercentage: A number representing the percentage of correctly pronounced words.Can be calculated by dividing the number of correctly pronounced words by the total number of words and multiplying by 100.
                    incorrectPercentage: A number representing the percentage of incorrectly pronounced words.Can be calculated by dividing the number of incorrectly pronounced words by the total number of words and multiplying by 100.
                    patterns: An array of strings describing observed error patterns in English pronunciation.
                    
                    recommendations: An array of strings with suggestions for improving English pronunciation.Suggent some great recommendations can be videos or blog posts or any other resources.

                    wordCount: A number representing the total number of words in the transcription.

                    Only consider English words and pronunciations. Do not include or consider any non-English languages in your analysis.
                    
                    Don't copy paste the exaple format. Just give me JSON as a responce from you analysis in this format
                    Examples format for JSON Output:
                    {
                        "mispronouncedWords": [
                            {
                                "incorrect": " A word from the vtt section that was mispronounced can be seen from ${userVTT}",
                                "correct": "A word from the text section that was correct can be seen from ${realAudio}",
                                "reason": "A string explaining the pronunciation error.Describe the specific phonetic or articulatory mistake made by the speaker."
                            },
                            {
                                "incorrect": " A word from the vtt section that was mispronounced can be seen from ${userVTT}",
                                "correct": "A word from the text section that was correct can be seen from ${realAudio}",
                                "reason": "A string explaining the pronunciation error.Describe the specific phonetic or articulatory mistake made by the speaker."
                            },
                        ],
                        "summary": {
                            "correctPercentage": number calutated from correct words and total words,
                            "incorrectPercentage": number calutated from incorrect words and total words,
                            "patterns": [
                                "Vowel substitution errors",
                                "Consonant reversal errors"
                            ]
                        },
                        "recommendations": [
                            "Practice differentiating between similar vowel sounds",
                            "Focus on the correct order of consonants in commonly mispronounced words"
                            "Blog links"....etc.
                        ],
                        "wordCount": ${wordCount}
                    }`
          },
          { role: "user", content: `Just give me JSON as a responce.Analyze the audio transcription and provide feedback on any pronunciation errors and give output in JSON format ${userVTT} & ${realAudio}` }
        ]
      }
       )
    console.log("ans", ans);
    return c.json(ans);
    
});

export default app