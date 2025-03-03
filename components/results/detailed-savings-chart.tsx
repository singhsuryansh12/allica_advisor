"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for the chart
const data = [
  {
    name: "Savings Interest",
    allica: 4650,
    competitor: 1500,
    savings: 3150,
  },
  {
    name: "Account Fees",
    allica: 0,
    competitor: 180,
    savings: 180,
  },
  {
    name: "Card Cashback",
    allica: 1200,
    competitor: 0,
    savings: 1200,
  },
  {
    name: "International",
    allica: 250,
    competitor: 1000,
    savings: 750,
  },
]

export function DetailedSavingsChart() {
  return (
    <ChartContainer
      config={{
        allica: {
          label: "Allica Bank",
          color: "hsl(var(--chart-1))",
          formatter: (value: number) => `£${value.toLocaleString()}`,
        },
        competitor: {
          label: "Current Bank",
          color: "hsl(var(--chart-2))",
          formatter: (value: number) => `£${value.toLocaleString()}`,
        },
        savings: {
          label: "Your Savings",
          color: "hsl(var(--chart-3))",
          formatter: (value: number) => `£${value.toLocaleString()}`,
        },
      }}
      className="h-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `£${value}`} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="allica" fill="var(--color-allica)" name="Allica Bank" radius={[4, 4, 0, 0]} />
          <Bar dataKey="competitor" fill="var(--color-competitor)" name="Current Bank" radius={[4, 4, 0, 0]} />
          <Bar dataKey="savings" fill="var(--color-savings)" name="Your Savings" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

