"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SavingsResults } from "@/components/calculator/savings-results"
import { calculateSavings } from "@/lib/calculator"
import type { SavingsResult } from "@/lib/calculator"

// Form schema with validation
const formSchema = z.object({
  currentBank: z.string().min(1, "Please select your current bank"),
  accountBalance: z.string().min(1, "Please enter your account balance"),
  savingsBalance: z.string().min(1, "Please enter your savings balance"),
  monthlyCardSpend: z.string().min(1, "Please enter your monthly card spend"),
  annualInternationalPayments: z.string().min(1, "Please enter your annual international payments"),
  monthlyTransactions: z.string().min(1, "Please enter your monthly transactions"),
})

// Banks for the dropdown
const banks = [
  { value: "hsbc", label: "HSBC" },
  { value: "barclays", label: "Barclays" },
  { value: "lloyds", label: "Lloyds" },
  { value: "natwest", label: "NatWest" },
  { value: "santander", label: "Santander" },
  { value: "other", label: "Other" },
]

export function CalculatorForm() {
  const [activeTab, setActiveTab] = useState("calculator")
  const [calculationData, setCalculationData] = useState<SavingsResult | null>(null)

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentBank: "",
      accountBalance: "",
      savingsBalance: "",
      monthlyCardSpend: "",
      annualInternationalPayments: "",
      monthlyTransactions: "",
    },
  })

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Convert string values to numbers for calculation
    const data = {
      currentBank: values.currentBank,
      accountBalance: Number.parseFloat(values.accountBalance.replace(/,/g, "")),
      savingsBalance: Number.parseFloat(values.savingsBalance.replace(/,/g, "")),
      monthlyCardSpend: Number.parseFloat(values.monthlyCardSpend.replace(/,/g, "")),
      annualInternationalPayments: Number.parseFloat(values.annualInternationalPayments.replace(/,/g, "")),
      monthlyTransactions: Number.parseFloat(values.monthlyTransactions.replace(/,/g, "")),
    }

    // Calculate savings
    const calculatedData = calculateSavings(data)
    setCalculationData(calculatedData)
    setActiveTab("results")
  }

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
        <TabsTrigger value="calculator">Calculator</TabsTrigger>
        <TabsTrigger value="results">Results</TabsTrigger>
      </TabsList>
      <TabsContent value="calculator">
        <Card className="max-w-2xl mx-auto border-allica-blue/20">
          <CardContent className="pt-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="currentBank"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Bank</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-allica-blue/20 focus:ring-allica-orange">
                            <SelectValue placeholder="Select your current bank" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {banks.map((bank) => (
                            <SelectItem key={bank.value} value={bank.value}>
                              {bank.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="accountBalance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Account Balance (£)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. 50000"
                          {...field}
                          className="border-allica-blue/20 focus-visible:ring-allica-orange"
                        />
                      </FormControl>
                      <FormDescription>Average balance in your business current account</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="savingsBalance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Savings Balance (£)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. 100000"
                          {...field}
                          className="border-allica-blue/20 focus-visible:ring-allica-orange"
                        />
                      </FormControl>
                      <FormDescription>Total amount in business savings accounts</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="monthlyCardSpend"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Monthly Card Spend (£)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. 10000"
                          {...field}
                          className="border-allica-blue/20 focus-visible:ring-allica-orange"
                        />
                      </FormControl>
                      <FormDescription>Average monthly spending on business cards</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="annualInternationalPayments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Annual International Payments (£)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. 50000"
                          {...field}
                          className="border-allica-blue/20 focus-visible:ring-allica-orange"
                        />
                      </FormControl>
                      <FormDescription>Total annual value of international payments</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="monthlyTransactions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Monthly Transactions</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. 100"
                          {...field}
                          className="border-allica-blue/20 focus-visible:ring-allica-orange"
                        />
                      </FormControl>
                      <FormDescription>Average number of monthly transactions</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-allica-orange hover:bg-allica-orange/90 text-white font-medium"
                >
                  Calculate Savings
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="results">
        {calculationData ? (
          <SavingsResults data={calculationData} />
        ) : (
          <Card className="max-w-2xl mx-auto border-allica-blue/20">
            <CardContent className="pt-6 text-center py-12">
              <p className="text-muted-foreground">
                Please fill out the calculator form to see your potential savings.
              </p>
            </CardContent>
          </Card>
        )}
      </TabsContent>
    </Tabs>
  )
}

