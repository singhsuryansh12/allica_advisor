import { ChatInterface } from "@/components/chat/chat-interface"

export default function ChatPage() {
  return (
    <div className="container py-8 max-w-5xl">
      <div className="flex flex-col space-y-6">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-3">
            Chat with <span className="text-allica-orange">Allica Advisor</span>
          </h1>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Ask questions about Allica Bank's services, compare with your current bank, or learn about potential
            savings.
          </p>
        </div>
        <ChatInterface />
      </div>
    </div>
  )
}

