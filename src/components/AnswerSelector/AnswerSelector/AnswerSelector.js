import { useState, useCallback, useMemo } from 'react'

import { useEffectSkipMount } from '../hooks'
import { AnswerSelectorContext } from '../context'

import { Radio } from '../Radio'
import { Check } from '../Check'
import { Question } from '../Question'

import './AnswerSelector.css'

export function AnswerSelector({ children, id, onChange }) {
  const [_answer, _setAnswer] = useState()

  const setAnswer = useCallback((answer) => _setAnswer(answer), [])

  useEffectSkipMount(() => {
    onChange({ id, answer: _answer })
  }, [_answer])

  const value = useMemo(
    () => ({ answer: _answer, setAnswer, questionId: id }),
    [_answer, id, setAnswer]
  )

  return (
    <AnswerSelectorContext.Provider value={value}>
      <div className="answer-selector-container">{children}</div>
    </AnswerSelectorContext.Provider>
  )
}

AnswerSelector.Radio = Radio
AnswerSelector.Check = Check
AnswerSelector.Question = Question
