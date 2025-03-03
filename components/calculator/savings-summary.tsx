import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { SavingsResult } from "@/lib/calculator"

interface SavingsSummaryProps {
  data: SavingsResult
}

export function SavingsSummary({ data }: SavingsSummaryProps) {
  // Format currency values
  const formatCurrency = (value: number) => {
    return `£${value.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`
  }

  // Create an array of savings categories for easier rendering
  const savingsCategories = [data.savingsInterest, data.accountFees, data.cardCashback, data.internationalPayments]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Savings Breakdown</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {savingsCategories.map((category, index) => (
          <Card
            key={index}
            className="overflow-hidden border-allica-blue/20 transition-all duration-200 hover:shadow-md"
          >
            <CardHeader className="p-4 pb-2 bg-muted/50">
              <CardTitle className="text-base flex items-center">
                <span className="h-2 w-2 rounded-full bg-allica-orange mr-2"></span>
                {category.title}
              </CardTitle>
              <CardDescription className="text-xl font-bold text-allica-orange">
                {formatCurrency(category.annualSavings)} / year
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-2 text-sm text-muted-foreground">{category.description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

