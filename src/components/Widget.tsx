
import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { FeedbackSelectOptionCard } from './FeedbackSelectOptionCard'

export function Widget() {

  return (
    <Popover className="absolute bottom-6 right-6 z-10">
      <Popover.Panel
        className={`absolute bottom-14 right-0 bg-[#ccc] rounded-xl animate-[visible_300ms_ease-in-out_forwards]`}
      >
        <FeedbackSelectOptionCard />
      </Popover.Panel>


      <Popover.Button
        className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"
      >
        <ChatTeardropDots className="w-6 h-6" />

        <span
          className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out">
          <span className="pl-2">Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  )
}