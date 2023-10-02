import { useState } from 'react'
import { Todos } from './components/Todos'

const mockToDos = [
  {
    id: '1',
    title: 'Todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'Todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'Todo 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockToDos)

  return (
    <Todos todos={todos}/>
  )
}

export default App
