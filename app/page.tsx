import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calculator, MessageSquare, PiggyBank, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover How Much More <span className="text-allica-orange">Value</span> You Could Get
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Compare your current bank with Allica and see the quantifiable benefits of switching. Our AI-powered
                  advisor helps you make informed decisions.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link href="/chat">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto gap-1.5 bg-allica-orange hover:bg-allica-orange/90 text-white font-medium"
                  >
                    Start Chatting <MessageSquare className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/calculator">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto gap-1.5 border-allica-blue text-allica-blue hover:bg-allica-blue/10 dark:border-white dark:text-white font-medium"
                  >
                    Calculate Savings <Calculator className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-square">
                <div className="absolute inset-0 bg-gradient-to-r from-allica-blue to-allica-orange rounded-full opacity-20 blur-3xl"></div>
                <div className="relative bg-card border rounded-xl shadow-xl overflow-hidden h-full flex items-center justify-center p-8">
                  <div className="relative h-48 w-48 sm:h-64 sm:w-64">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-270x270-aT4obkE0lnJi2fi9quhoHzkCM70PUy.webp"
                      alt="Allica Bank Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-allica-blue/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose <span className="text-allica-orange">Allica Bank</span>?
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Allica Bank offers significant advantages over traditional banks for business customers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            <Card className="border-allica-blue/20 transition-all duration-200 hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="h-12 w-12 rounded-full bg-allica-orange/10 flex items-center justify-center">
                  <PiggyBank className="h-6 w-6 text-allica-orange" />
                </div>
                <CardTitle className="text-xl">Better Value</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Higher savings yields, cashback on card spending, and no account fees mean more money stays in your
                  business.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-allica-blue/20 transition-all duration-200 hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="h-12 w-12 rounded-full bg-allica-orange/10 flex items-center justify-center">
                  <Wallet className="h-6 w-6 text-allica-orange" />
                </div>
                <CardTitle className="text-xl">Simple Digital UX</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Clean, intuitive digital banking experience designed specifically for business needs.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-allica-blue/20 transition-all duration-200 hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="h-12 w-12 rounded-full bg-allica-orange/10 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-allica-orange" />
                </div>
                <CardTitle className="text-xl">Named Account Manager</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Direct access to a dedicated account manager who understands your business.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-allica-blue text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to See the <span className="text-allica-orange">Difference</span>?
              </h2>
              <p className="text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Use our AI-powered tools to calculate your potential savings and benefits.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/chat">
                <Button
                  size="lg"
                  className="w-full sm:w-auto gap-1.5 bg-allica-orange hover:bg-allica-orange/90 text-white font-medium"
                >
                  Chat with Advisor <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
              <Link href="/calculator">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto gap-1.5 border-white text-allica-blue hover:bg-white/90 font-medium"
                >
                  Try the Calculator <Calculator className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

