import { streamChatResponse } from "@/lib/gemini"

export async function POST(req: Request) {
  try {
    // Get messages from request body
    const { messages } = await req.json()

    // Stream the response using Gemini
    const result = await streamChatResponse(messages)

    // Return a streaming response
    return new Response(result.textStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })
  } catch (error) {
    console.error("Error in chat route:", error)
    return new Response(JSON.stringify({ error: "Failed to process chat request" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

