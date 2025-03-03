"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface SavingsChartProps {
  data: {
    category: string
    value: number
  }[]
}

export function SavingsChart({ data }: SavingsChartProps) {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Amount",
          color: "hsl(var(--primary))",
          formatter: (value: number) => `£${value.toLocaleString()}`,
        },
      }}
      className="h-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis
            dataKey="category"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => value.split(" ")[0]}
          />
          <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `£${value}`} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

