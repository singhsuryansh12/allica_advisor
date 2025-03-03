// Types for calculator data
export interface CalculatorInputs {
  currentBank: string
  accountBalance: number
  savingsBalance: number
  monthlyCardSpend: number
  annualInternationalPayments: number
  monthlyTransactions: number
}

export interface SavingsCategory {
  title: string
  annualSavings: number
  description: string
}

export interface SavingsResult {
  savingsInterest: SavingsCategory
  accountFees: SavingsCategory
  cardCashback: SavingsCategory
  internationalPayments: SavingsCategory
  totalAnnualSavings: number
  fiveYearSavings: number
}

// Bank-specific data for more accurate calculations
const bankData = {
  hsbc: {
    savingsRate: 0.0225, // 2.25%
    monthlyFee: 8,
    cardCashbackRate: 0.0025, // 0.25%
    internationalPaymentRate: 0.025, // 2.5%
  },
  barclays: {
    savingsRate: 0.02, // 2%
    monthlyFee: 10,
    cardCashbackRate: 0.005, // 0.5%
    internationalPaymentRate: 0.028, // 2.8%
  },
  lloyds: {
    savingsRate: 0.0215, // 2.15%
    monthlyFee: 7,
    cardCashbackRate: 0.003, // 0.3%
    internationalPaymentRate: 0.026, // 2.6%
  },
  natwest: {
    savingsRate: 0.021, // 2.1%
    monthlyFee: 6,
    cardCashbackRate: 0.002, // 0.2%
    internationalPaymentRate: 0.027, // 2.7%
  },
  santander: {
    savingsRate: 0.023, // 2.3%
    monthlyFee: 5,
    cardCashbackRate: 0.004, // 0.4%
    internationalPaymentRate: 0.024, // 2.4%
  },
  other: {
    savingsRate: 0.022, // 2.2% (average)
    monthlyFee: 7.5, // average
    cardCashbackRate: 0.003, // 0.3% (average)
    internationalPaymentRate: 0.026, // 2.6% (average)
  },
}

// Allica Bank data
const allicaData = {
  savingsRate: 0.0465, // 4.65%
  monthlyFee: 0, // No monthly fee
  cardCashbackRate: 0.01, // 1%
  internationalPaymentRate: 0.005, // 0.5%
}

// Function to calculate savings based on input data
export function calculateSavings(data: CalculatorInputs): SavingsResult {
  // Get the selected bank's data
  const selectedBank = bankData[data.currentBank as keyof typeof bankData] || bankData.other

  // Calculate savings interest difference
  const savingsInterestDifference = allicaData.savingsRate - selectedBank.savingsRate
  const annualSavingsInterestGain = data.savingsBalance * savingsInterestDifference

  // Calculate account fee savings
  const annualAccountFeeSavings = selectedBank.monthlyFee * 12

  // Calculate card cashback difference
  const cardCashbackDifference = allicaData.cardCashbackRate - selectedBank.cardCashbackRate
  const annualCardCashback = data.monthlyCardSpend * 12 * cardCashbackDifference

  // Calculate international payment savings
  const internationalPaymentDifference = selectedBank.internationalPaymentRate - allicaData.internationalPaymentRate
  const annualInternationalSavings = data.annualInternationalPayments * internationalPaymentDifference

  // Calculate total annual savings
  const totalAnnualSavings =
    annualSavingsInterestGain + annualAccountFeeSavings + annualCardCashback + annualInternationalSavings

  return {
    savingsInterest: {
      title: "Savings Interest",
      annualSavings: annualSavingsInterestGain,
      description: `Based on a ${(savingsInterestDifference * 100).toFixed(2)}% higher interest rate on your savings balance of £${data.savingsBalance.toLocaleString()}.`,
    },
    accountFees: {
      title: "Account Fees",
      annualSavings: annualAccountFeeSavings,
      description: `No monthly account fees, saving you £${selectedBank.monthlyFee} per month compared to your current bank.`,
    },
    cardCashback: {
      title: "Card Cashback",
      annualSavings: annualCardCashback,
      description: `${(cardCashbackDifference * 100).toFixed(2)}% more cashback on your monthly card spend of £${data.monthlyCardSpend.toLocaleString()}.`,
    },
    internationalPayments: {
      title: "International Payments",
      annualSavings: annualInternationalSavings,
      description: `Lower fees on international payments, saving approximately ${(internationalPaymentDifference * 100).toFixed(2)}% on your annual volume of £${data.annualInternationalPayments.toLocaleString()}.`,
    },
    totalAnnualSavings,
    fiveYearSavings: totalAnnualSavings * 5,
  }
}

