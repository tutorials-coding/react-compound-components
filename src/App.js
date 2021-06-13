import './App.css'
import AnswerSelector from './components/AnswerSelector'

const q1 = {
  id: '5336cfe2-f86d-407b-afc0-070110be4e63',
  question: '',
  answers: [
    {
      id: '60647508-9118-45cd-a26a-ff17674a6917',
      title: 'Radio answer 1',
    },
    {
      id: 'dfbc58b6-82a8-4a83-a3f9-ba3a03d4d71e',
      title: 'Radio answer 2',
    },
    {
      id: '8921812c-0f73-47fc-aed8-ef4ad089a6e0',
      title: 'Radio answer 3',
    },
    {
      id: '97305929-547b-4821-b28d-9c0050fae31b',
      title: 'Radio answer 4',
    },
  ],
}

const q2 = {
  id: '1ea99493-0c04-495a-9b47-94e8ab0404fc',
  question: '',
  answers: [
    {
      id: 'c21dd56e-0a48-4ae6-a10a-7bc98c0f2600',
      title: 'Check answer 1',
    },
    {
      id: '2afb2b8a-c291-456d-af8b-278e6d4c09bf',
      title: 'Check answer 2',
    },
    {
      id: 'a98337bb-80b7-4ada-9696-6df6a5671bfe',
      title: 'Check answer 3',
    },
    {
      id: 'b2e08e08-564a-4301-b48f-ab61868ca442',
      title: 'Check answer 4',
    },
  ],
}

function App() {
  const handleAnswerSelect = (data) => {
    console.log(data)
  }
  return (
    <div className="App">
      <AnswerSelector id={q1.id} onChange={handleAnswerSelect}>
        {q1.answers.map(({ id, title }) => (
          <AnswerSelector.Radio key={id} id={id} title={title} />
        ))}
      </AnswerSelector>
      <AnswerSelector id={q2.id} onChange={handleAnswerSelect}>
        {q2.answers.map(({ id, title }) => (
          <AnswerSelector.Check key={id} id={id} title={title} />
        ))}
      </AnswerSelector>
    </div>
  )
}

export default App
