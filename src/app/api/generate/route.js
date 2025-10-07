/*
import { Ollama } from "ollama";

export async function POST(request) {
  try {
    const body = await request.json();
    
    const ollama = new Ollama();
    const response = await ollama.generate({
      model: "llama2:13b",
      prompt: `${body.prompt}. Based on this prompt find real 3 songs that fit the mood / description.
      `
    });

    let parsedResult;
    try {
      parsedResult = JSON.parse(response.response);
    } catch (parseError) {
      // If parsing fails, return the raw response
      parsedResult = response.response;
    }
    
    return Response.json({ result: parsedResult, success: true }); // Have to use Response.json() for next.js App router
  } catch (error) {
    console.error('Error in API route:', error);
    return Response.json({ 
      error: error.message || "Internal server error", 
      success: false 
    }, { status: 500 });
  }
}
  */