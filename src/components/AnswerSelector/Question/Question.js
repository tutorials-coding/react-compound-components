import './Question.css'

export function Question({ text }) {
  return (
    <div className="question-container">
      <p className="question-text">{text}</p>
    </div>
  )
}
