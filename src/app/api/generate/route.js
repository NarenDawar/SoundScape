import { Ollama } from "ollama";

export async function POST(request) {
  try {
    const body = await request.json();
    
    const ollama = new Ollama();
    const response = await ollama.generate({
      model: "mistral",
      prompt: `${body.prompt}. Based on this prompt find exactly 3 real existing songs that fit this description / mood. 
      Do not make up music. All music you give must exist on streaming platforms.
      Return the 3 songs in this format with the artist that made the song: 
      [
        { "title": "Song 1", "creator": "Artist 1" },
        { "title": "Song 2", "creator": "Artist 2" },
        { "title": "Song 3", "creator": "Artist 3" }
      ] 
      Do not say anything else.`
    });

    let parsedResult;
    try {
      parsedResult = JSON.parse(response.response);
    } catch (parseError) {
      // If parsing fails, return the raw response
      parsedResult = response.response;
    }
    
    return Response.json({ result: parsedResult, success: true }); // Havw to use Response.json() for next.js App router
  } catch (error) {
    console.error('Error in API route:', error);
    return Response.json({ 
      error: error.message || "Internal server error", 
      success: false 
    }, { status: 500 });
  }
}