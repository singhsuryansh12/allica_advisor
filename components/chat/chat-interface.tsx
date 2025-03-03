"use client"

import { useState, useEffect, useCallback } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChatMessage } from "@/components/chat/chat-message"
import { SuggestedQuestions } from "@/components/chat/suggested-questions"

// Suggested questions for the user to ask
const suggestedQuestions = [
  "How does Allica's savings rate compare to other banks?",
  "What fees does Allica charge for business accounts?",
  "How much could I save on international payments?",
  "Tell me about Allica's card cashback program",
]

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm your Allica Bank advisor. I can help you understand how Allica Bank compares to your current bank and calculate potential savings. What would you like to know?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error("No reader available")

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '',
      }

      setMessages(prev => [...prev, assistantMessage])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const text = new TextDecoder().decode(value)
        setMessages(prev => {
          const newMessages = [...prev]
          const lastMessage = newMessages[newMessages.length - 1]
          if (lastMessage.role === 'assistant') {
            lastMessage.content += text
          }
          return newMessages
        })
      }
    } catch (error) {
      console.error("Error in chat:", error)
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: "I apologize, but I'm having trouble processing your request. Please try again.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
    const form = document.createElement('form')
    form.onsubmit = handleSubmit as any
    form.dispatchEvent(new Event('submit'))
  }

  return (
    <Card className="w-full border-allica-blue/20">
      <div className="flex flex-col h-[600px]">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={{
                id: message.id,
                type: message.role === "user" ? "user" : "ai",
                content: message.content,
              }}
            />
          ))}
          {isLoading && (
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 bg-allica-orange rounded-full animate-bounce"></div>
              <div className="h-3 w-3 bg-allica-orange rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="h-3 w-3 bg-allica-orange rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          )}
        </div>

        {messages.length === 1 && (
          <div className="px-4 pb-4">
            <SuggestedQuestions questions={suggestedQuestions} onQuestionClick={handleSuggestedQuestion} />
          </div>
        )}

        <div className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              name="message"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading}
              className="bg-allica-orange hover:bg-allica-orange/90"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </Card>
  )
}

