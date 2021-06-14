import './Question.css'

export function Question({ children }) {
  return (
    <div className="question-container">
      <p className="question-content">{children}</p>
    </div>
  )
}
