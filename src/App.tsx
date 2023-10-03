import { useState } from 'react'
import { Todos } from './components/Todos'
import '../index.css'
import { ToDoId, ToDo as ToDoType } from './types'

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

  const handleRemove = ({ id }: ToDoId): void => {
    const newToDos = todos.filter(todo => todo.id !== id)
    setTodos(newToDos)
  }

  const handleCompleted = ({
    id,
    completed
  }: Pick<ToDoType, 'id' | 'completed'>
  ): void => {
    const newToDos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    
    setTodos(newToDos)
  }

  return (
    <div className="todoapp">
      <Todos 
      onToggleCompleted={handleCompleted}
      onRemoveToDo={handleRemove} 
      todos={todos} />
    </div>
  )
}

export default App
