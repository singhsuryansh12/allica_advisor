import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DetailedSavingsChart } from "@/components/results/detailed-savings-chart"
import { SavingsTimeline } from "@/components/results/savings-timeline"

export default function ResultsPage() {
  return (
    <div className="container py-8 max-w-5xl">
      <div className="flex flex-col space-y-8">
        <div className="flex items-center">
          <Link href="/calculator">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="h-4 w-4" /> Back to Calculator
            </Button>
          </Link>
        </div>

        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2">
            Your Detailed Savings Analysis
          </h1>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            A comprehensive breakdown of your potential savings by switching to Allica Bank.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Annual Savings Breakdown</CardTitle>
              <CardDescription>Detailed view of your potential savings across different banking services</CardDescription>
            </CardHeader>
            <CardContent className="p-0 sm:p-6">
              <div className="relative w-full h-[450px] sm:h-[550px]">
                <div className="absolute inset-0 p-2 sm:p-4">
                  <DetailedSavingsChart />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>5-Year Savings Projection</CardTitle>
              <CardDescription>See how your savings could grow over time</CardDescription>
            </CardHeader>
            <CardContent className="p-0 sm:p-6">
              <div className="relative w-full h-[450px] sm:h-[550px]">
                <div className="absolute inset-0 p-2 sm:p-4">
                  <SavingsTimeline />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
              <CardDescription>Ready to start saving with Allica Bank?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Based on your financial profile, switching to Allica Bank could save you significantly over time. Here's
                  how to get started:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-medium mb-2">1. Book a Consultation</h3>
                    <p className="text-sm text-muted-foreground">
                      Speak with an Allica Bank specialist to discuss your specific needs.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-medium mb-2">2. Complete Application</h3>
                    <p className="text-sm text-muted-foreground">
                      Our streamlined application process takes just minutes to complete.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-medium mb-2">3. Start Saving</h3>
                    <p className="text-sm text-muted-foreground">
                      Once approved, start enjoying better rates and lower fees immediately.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <Button size="lg" className="w-full sm:w-auto">Get Started with Allica Bank</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

