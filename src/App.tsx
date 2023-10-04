import { useState } from 'react'
import { ToDos } from './components/ToDos'
import '../index.css'

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
  const [toDos, setToDos] = useState(mockToDos)

  const handleRemove = (id: string): void => {
    const newToDos = toDos.filter(toDo => toDo.id !== id)
    setToDos(newToDos)
  }

  return (
    <div className="todoapp">
      <ToDos
      onRemoveToDo={handleRemove}
      toDos={toDos} />
    </div>
  )
}

export default App
