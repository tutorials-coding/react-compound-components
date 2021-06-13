import { createContext, useContext } from 'react'

export const AnswerSelectorContext = createContext()

export function useAnswerSelectorContext() {
  const context = useContext(AnswerSelectorContext)
  if (!context) {
    throw new Error(
      'Answer selector compound components should be used only with AnswerSelector'
    )
  }
  return context
}
