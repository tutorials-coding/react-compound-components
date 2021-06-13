import { useState, useCallback } from 'react'
import { useEffectSkipMount } from '../hooks'
import { useAnswerSelectorContext } from '../context'

import './Check.css'

export function Check({ id, title }) {
  const [checked, setChecked] = useState(false)

  const { answer, setAnswer, questionId } = useAnswerSelectorContext()

  const handleChange = useCallback(() => {
    setChecked(!checked)
  }, [setChecked, checked])

  useEffectSkipMount(() => {
    const _answer = answer || []
    const newAnswer = checked
      ? [..._answer, id]
      : _answer.filter((answerId) => answerId !== id)

    setAnswer(newAnswer.length ? newAnswer : null)
  }, [checked])

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        value={id}
        name={questionId}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  )
}
