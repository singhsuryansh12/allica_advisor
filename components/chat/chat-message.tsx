import { User } from "lucide-react"
import Image from "next/image"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface ChatMessageProps {
  message: {
    id: string
    type: "user" | "ai"
    content: string
  }
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.type === "user"

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} animate-in fade-in-0 slide-in-from-bottom-3 duration-300`}
    >
      <div className={`flex gap-3 max-w-[85%] ${isUser ? "flex-row-reverse" : ""}`}>
        <Avatar className={isUser ? "bg-allica-blue" : "bg-allica-orange"}>
          <AvatarFallback>
            {isUser ? (
              <User className="h-5 w-5 text-white" />
            ) : (
              <div className="relative h-5 w-5">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-270x270-aT4obkE0lnJi2fi9quhoHzkCM70PUy.webp"
                  alt="Allica Bank Logo"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </AvatarFallback>
        </Avatar>
        <div
          className={`rounded-lg p-4 ${
            isUser ? "bg-allica-blue text-white rounded-tr-none" : "bg-muted text-foreground rounded-tl-none"
          }`}
        >
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        </div>
      </div>
    </div>
  )
}

