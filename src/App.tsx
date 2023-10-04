import { useState } from 'react'
import { ToDos } from './components/ToDos'
import '../index.css'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'
import { type ToDoId, type ToDo as ToDoType, type FilterValue } from './types'

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )

  const handleRemove = ({ id }: ToDoId): void => {
    const newToDos = toDos.filter(toDo => toDo.id !== id)
    setToDos(newToDos)
  }

  const handleCompleted = ({
    id,
    completed
  }: Pick<ToDoType, 'id' | 'completed'>): void => {
    const newToDos = toDos.map(toDo => {
      if (toDo.id === id) {
        return {
          ...toDo,
          completed
        }
      }
      return toDo
    })

    setToDos(newToDos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newToDos = toDos.filter(toDo => !toDo.completed)
    setToDos(newToDos)
  }

  const activeCount = toDos.filter(toDo => !toDo.completed).length
  const completedCount = toDos.length - activeCount

  const filteredToDos = toDos.filter(toDo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !toDo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return toDo.completed
    return toDo
  })

  return (
    <div className="todoapp">
      <ToDos
        onToggleCompleted={handleCompleted}
        onRemoveToDo={handleRemove}
        toDos={filteredToDos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
