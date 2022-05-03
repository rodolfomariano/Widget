import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/bug.svg'
import ideaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'

const feedbackTypes = {
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

export function FeedbackSelectOptionCard() {
  return (
    <div
      className="
      bg-zinc-900 relatives rounded-2xl mb-4 py-2 flex flex-col items-center shadow-lg animate-[visible_300ms_ease-in-out_forwards]
      "
    >
      <header >
        <span className='text-xl leading-6'>Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className='flex py-8 px-4 gap-2 w-full'>
        {
          Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className='bg-zinc-800 rounded-lg py-5 w-20 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            )
          })
        }
      </div>

      <footer >
        Feito com carinho
      </footer>
    </div>
  )
}