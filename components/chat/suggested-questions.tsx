import { Button } from "@/components/ui/button"

interface SuggestedQuestionsProps {
  questions: string[]
  onQuestionClick: (question: string) => void
}

export function SuggestedQuestions({ questions, onQuestionClick }: SuggestedQuestionsProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-muted-foreground">Suggested questions:</p>
      <div className="flex flex-wrap gap-2">
        {questions.map((question, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => onQuestionClick(question)}
            className="text-xs border-allica-blue/30 hover:bg-allica-orange/10 hover:text-allica-orange hover:border-allica-orange transition-colors duration-200 dark:border-white/30 dark:hover:bg-allica-orange/20"
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  )
}

