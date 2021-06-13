import { useCallback } from 'react'
import { useAnswerSelectorContext } from '../context'

import './Radio.css'

export function Radio({ id, title }) {
  const { setAnswer, questionId } = useAnswerSelectorContext()

  const handleClick = useCallback(() => {
    setAnswer(id)
  }, [setAnswer, id])

  return (
    <div>
      <input
        type="radio"
        id={id}
        value={id}
        name={questionId}
        onClick={handleClick}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  )
}
