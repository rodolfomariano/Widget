import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de uma minhoca'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackType(null)
    setFeedbackSent(false)
  }

  return (
    <div
      className="
      bg-zinc-900 relatives rounded-2xl mb-4 py-2 flex flex-col items-center shadow-lg animate-[visible_300ms_ease-in-out_forwards]
      "
    >

      {feedbackSent
        ? <FeedbackSuccessStep onFeedbackRestarted={handleRestartFeedback}/>
        : (
          <>
            {!feedbackType
              ? (
                <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
              )
              : (
                <FeedbackContentStep
                  feedbackType={feedbackType}
                  onFeedbackRestarted={handleRestartFeedback}
                  onFeedbackSent={() => setFeedbackSent(true)}
                />
              )

            }
          </>
        )
      }

      <footer >
        Feito com carinho
      </footer>
    </div >
  )
}