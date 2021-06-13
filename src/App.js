import { useState } from 'react'
import AnswerSelector from './components/AnswerSelector'
import { question1 as q1, question2 as q2 } from './data/questions'

import './App.css'

function App() {
  const [answers, setAnswers] = useState({})

  const handleAnswerSelect = (data) => {
    setAnswers((oldAnswers) => ({
      ...oldAnswers,
      [data.id]: data.answer,
    }))
    console.log(`question id: ${data.id}`, JSON.stringify(data, null, 2))
  }

  const handleSubmit = () => {
    console.log('answers', JSON.stringify(answers, null, 2))
  }

  return (
    <div className="main-container">
      <AnswerSelector id={q1.id} onChange={handleAnswerSelect}>
        <AnswerSelector.Question text={q1.text} />
        {q1.answers.map(({ id, title }) => (
          <AnswerSelector.Radio key={id} id={id} title={title} />
        ))}
      </AnswerSelector>

      <AnswerSelector id={q2.id} onChange={handleAnswerSelect}>
        <AnswerSelector.Question text={q2.text} />
        {q2.answers.map(({ id, title }) => (
          <AnswerSelector.Check key={id} id={id} title={title} />
        ))}
      </AnswerSelector>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default App
