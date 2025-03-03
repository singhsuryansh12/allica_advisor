"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SavingsChart } from "@/components/calculator/savings-chart"
import { SavingsSummary } from "@/components/calculator/savings-summary"
import type { SavingsResult } from "@/lib/calculator"

interface SavingsResultsProps {
  data: SavingsResult
}

export function SavingsResults({ data }: SavingsResultsProps) {
  // Format currency values
  const formatCurrency = (value: number) => {
    return `£${value.toLocaleString("en-GB", { maximumFractionDigits: 0 })}`
  }

  // Prepare data for the chart
  const chartData = [
    { category: "Savings Interest", value: data.savingsInterest.annualSavings },
    { category: "Account Fees", value: data.accountFees.annualSavings },
    { category: "Card Cashback", value: data.cardCashback.annualSavings },
    { category: "International Payments", value: data.internationalPayments.annualSavings },
  ]

  return (
    <div className="space-y-6">
      <Card className="max-w-2xl mx-auto border-allica-blue/20 overflow-hidden">
        <CardHeader className="bg-allica-blue text-white rounded-t-lg border-b-0">
          <CardTitle className="text-2xl">Your Potential Savings</CardTitle>
          <CardDescription className="text-white/80">
            Based on the information you provided, here's how much you could save by switching to Allica Bank.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="flex flex-col justify-center space-y-3 p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">Annual Savings</p>
                <p className="text-4xl font-bold text-allica-orange">{formatCurrency(data.totalAnnualSavings)}</p>
                <p className="text-sm text-muted-foreground">
                  Over 5 years: <span className="font-semibold">{formatCurrency(data.fiveYearSavings)}</span>
                </p>
              </div>
              <div className="h-[200px]">
                <SavingsChart data={chartData} />
              </div>
            </div>

            <SavingsSummary data={data} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

