import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Calculator, MessageSquare } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-270x270-aT4obkE0lnJi2fi9quhoHzkCM70PUy.webp"
                alt="Allica Bank Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-xl text-allica-blue dark:text-white">Allica Advisor</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-1 sm:space-x-2">
          <Link href="/chat">
            <Button
              variant="ghost"
              size="sm"
              className="text-allica-blue dark:text-white hover:text-allica-orange dark:hover:text-allica-orange"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Chat</span>
            </Button>
          </Link>
          <Link href="/calculator">
            <Button
              variant="ghost"
              size="sm"
              className="text-allica-blue dark:text-white hover:text-allica-orange dark:hover:text-allica-orange"
            >
              <Calculator className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Calculator</span>
            </Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

