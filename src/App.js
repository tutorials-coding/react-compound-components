import { useState, useCallback } from 'react'
import AnswerSelector from './components/AnswerSelector'
import { question1 as q1, question2 as q2 } from './data/questions'

import './App.css'

function App() {
  const [answers, setAnswers] = useState({})

  const handleAnswerSelect = useCallback(
    (data) => {
      setAnswers((oldAnswers) => ({
        ...oldAnswers,
        [data.id]: data.answer,
      }))
      console.log(`question id: ${data.id}`, JSON.stringify(data, null, 2))
    },
    [setAnswers]
  )

  const handleSubmit = useCallback(() => {
    console.log('answers', JSON.stringify(answers, null, 2))
  }, [answers])

  return (
    <div className="main-container">
      <AnswerSelector id={q1.id} onChange={handleAnswerSelect}>
        <AnswerSelector.Question>{q1.text}</AnswerSelector.Question>
        {q1.answers.map(({ id, title }) => (
          <AnswerSelector.Radio key={id} id={id}>
            {title}
          </AnswerSelector.Radio>
        ))}
      </AnswerSelector>

      <AnswerSelector id={q2.id} onChange={handleAnswerSelect}>
        <AnswerSelector.Question>{q2.text}</AnswerSelector.Question>
        {q2.answers.map(({ id, title }) => (
          <AnswerSelector.Check key={id} id={id}>
            {title}
          </AnswerSelector.Check>
        ))}
      </AnswerSelector>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App
