import { useState } from 'react'
import { Todos } from './components/Todos'

const mockToDos = [
  {
    id: '1',
    title: 'Learn React with Typescript',
    completed: true
  },
  {
    id: '2',
    title: 'Finish this proyect',
    completed: false
  },
  {
    id: '3',
    title: 'Make this proyect looks good',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockToDos)

  return (
    <div className="todoapp">
      <Todos todos={todos} />
    </div>
  )
}

export default App
