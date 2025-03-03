# Allica Advisor

A Next.js-powered AI tool that helps businesses understand and quantify the benefits of switching to Allica Bank through interactive chat and financial impact analysis.

## Overview

Allica Advisor combines the power of Google's Gemini AI with advanced financial calculations to provide:
- 💬 AI-powered chat interface for exploring Allica Bank's benefits
- 📊 Financial Impact Calculator showing personalized savings
- 📈 Interactive visualizations of potential cost reductions
- 🔄 Real-time comparison with current banking providers

## Features

### Intelligent Chat Interface
- Natural language conversations about Allica Bank's services
- Context-aware responses based on user's financial profile
- Guided exploration of banking benefits and features
- Seamless integration with the Financial Impact Calculator

### Financial Impact Calculator
- Detailed savings analysis across multiple categories:
  - Savings interest rates
  - Account fees
  - Card cashback benefits
  - International payment costs
- Interactive charts showing:
  - Annual savings breakdown
  - 5-year savings projections
  - Category-wise comparisons

### Modern UI/UX
- Responsive design that works on all devices
- Dark/light mode support
- Accessible following WCAG guidelines
- Real-time data visualization using Recharts

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **AI**: Google Gemini API
- **Charts**: Recharts
- **State Management**: React Hooks
- **Type Safety**: TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/allica-advisor.git
cd allica-advisor
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with:
```
GOOGLE_API_KEY=your_gemini_api_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
allica-advisor/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── calculator/        # Financial calculator page
│   ├── chat/             # Chat interface page
│   └── results/          # Results visualization page
├── components/            # React components
│   ├── calculator/       # Calculator-specific components
│   ├── chat/            # Chat interface components
│   ├── results/         # Results visualization components
│   └── ui/              # Shared UI components
├── lib/                   # Utility functions and services
│   ├── calculator.ts     # Financial calculations
│   ├── gemini.ts        # Gemini AI integration
│   └── utils.ts         # Helper functions
└── public/               # Static assets
```

## Key Features Implementation

### AI Chat Interface
- Powered by Google's Gemini API
- Maintains conversation context
- Provides relevant suggestions
- Seamlessly integrates with calculator

### Financial Calculator
- Real-time calculations
- Interactive input validation
- Dynamic result updates
- Comprehensive savings analysis

### Results Visualization
- Responsive charts
- Interactive data exploration
- Clear savings breakdown
- Future projections

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software owned by Allica Bank.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Charts powered by [Recharts](https://recharts.org/)
- AI capabilities by [Google Gemini](https://ai.google.dev/) 