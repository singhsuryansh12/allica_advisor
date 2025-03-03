"use client"

import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for the chart
const data = [
  {
    year: "Year 1",
    savings: 5280,
    cumulative: 5280,
  },
  {
    year: "Year 2",
    savings: 5280,
    cumulative: 10560,
  },
  {
    year: "Year 3",
    savings: 5280,
    cumulative: 15840,
  },
  {
    year: "Year 4",
    savings: 5280,
    cumulative: 21120,
  },
  {
    year: "Year 5",
    savings: 5280,
    cumulative: 26400,
  },
]

export function SavingsTimeline() {
  return (
    <ChartContainer
      config={{
        savings: {
          label: "Annual Savings",
          color: "hsl(var(--chart-1))",
          formatter: (value: number) => `£${value.toLocaleString()}`,
        },
        cumulative: {
          label: "Cumulative Savings",
          color: "hsl(var(--chart-2))",
          formatter: (value: number) => `£${value.toLocaleString()}`,
        },
      }}
      className="h-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `£${value}`} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Area
            type="monotone"
            dataKey="savings"
            fill="var(--color-savings)"
            stroke="var(--color-savings)"
            fillOpacity={0.2}
            name="Annual Savings"
          />
          <Area
            type="monotone"
            dataKey="cumulative"
            fill="var(--color-cumulative)"
            stroke="var(--color-cumulative)"
            fillOpacity={0.2}
            name="Cumulative Savings"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

