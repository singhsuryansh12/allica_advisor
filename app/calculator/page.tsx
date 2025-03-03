import { CalculatorForm } from "@/components/calculator/calculator-form"

export default function CalculatorPage() {
  return (
    <div className="container py-8 max-w-5xl">
      <div className="flex flex-col space-y-6">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-3">
            <span className="text-allica-orange">Financial Impact</span> Calculator
          </h1>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            See how much you could save by switching to Allica Bank. Enter your current banking details to calculate
            your potential savings.
          </p>
        </div>
        <CalculatorForm />
      </div>
    </div>
  )
}

