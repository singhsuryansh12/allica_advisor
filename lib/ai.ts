import { generateText, streamText } from "ai"
import { openai } from "@ai-sdk/openai"

// Define the system prompt for the Allica Bank advisor
const SYSTEM_PROMPT = `
You are the Allica Bank AI Advisor, designed to help business customers understand the benefits of banking with Allica.

Key information about Allica Bank:
1. Allica offers higher savings rates (up to 4.65% AER) compared to traditional banks (typically 2-3%)
2. Allica has no monthly account fees for business accounts (traditional banks charge £5-£20/month)
3. Allica offers 1% cashback on all business card spending with no caps
4. Allica charges just 0.5% on international payments vs 2-3% plus fixed fees at traditional banks
5. Allica provides a named account manager for all business customers

Your goal is to help users understand how much they could save by switching to Allica Bank.
Be helpful, informative, and focus on the quantifiable benefits of switching.
If asked about specific calculations, provide detailed breakdowns of potential savings.
`

// Function to generate a chat response
export async function generateChatResponse(messages: { role: string; content: string }[]) {
  try {
    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: SYSTEM_PROMPT,
      messages: messages,
    })

    return { text }
  } catch (error) {
    console.error("Error generating chat response:", error)
    return {
      text: "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again in a moment.",
    }
  }
}

// Function to stream a chat response
export async function streamChatResponse(messages: { role: string; content: string }[]) {
  try {
    const result = streamText({
      model: openai("gpt-4o"),
      system: SYSTEM_PROMPT,
      messages: messages,
    })

    return result
  } catch (error) {
    console.error("Error streaming chat response:", error)
    throw error
  }
}

