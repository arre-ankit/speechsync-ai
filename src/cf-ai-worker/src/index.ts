export interface Env {
	AI: Ai;
  }
  
  export default {
	async fetch(request, env): Promise<Response> {
	  
		const res = await fetch(
		"https://github.com/Azure-Samples/cognitive-services-speech-sdk/raw/master/samples/cpp/windows/console/samples/enrollment_audio_katie.wav"
		);
		const blob = await res.arrayBuffer();
	
		const input = {
			audio: [...new Uint8Array(blob)],
		};
	
		const response = await env.AI.run(
			"@cf/openai/whisper",
			input
		);
	
		return Response.json({ input: { audio: [] }, response });

	},
  } satisfies ExportedHandler<Env>;