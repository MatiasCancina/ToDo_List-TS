import { useState } from 'react'
import { ToDos } from './components/ToDos'
import '../index.css'
import { TODO_FILTERS } from './consts'
import { type FilterValue } from './types'
import { Footer } from './components/Footer'

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
  const [filterSelected, setFilterSelected] = useState(TODO_FILTERS.ALL)

  const handleRemove = (id: string): void => {
    const newToDos = toDos.filter(toDo => toDo.id !== id)
    setToDos(newToDos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  return (
    <div className="todoapp">
      <ToDos onRemoveToDo={handleRemove} toDos={toDos} />
      <Footer filterSelected={filterSelected} handleFilterChange={handleFilterChange}/>
    </div>
  )
}

export default App
