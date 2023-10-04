import { useState } from 'react'
import { TODO_FILTERS } from '../consts'
import { type ListOfToDos, type FilterValue } from '../types'
import { mockToDos } from '../mocks/toDos'

export const useTodos = (): {
  activeCount: number
  completedCount: number
  toDos: ListOfToDos
  filterSelected: FilterValue | undefined
  handleClearCompleted: () => void
  handleCompleted: (id: string, completed: boolean) => void
  handleFilterChange: (filter: FilterValue) => void
  handleRemove: (id: string) => void
  handleSave: (title: string) => void
  handleUpdateTitle: (params: { id: string, title: string }) => void
} => {
  const [toDos, setToDos] = useState(mockToDos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>()

  const handleCompleted = (id: string, completed: boolean): void => {
    const newTodos = toDos.map(toDo => {
      if (toDo.id === id) {
        return {
          ...toDo,
          completed
        }
      }

      return toDo
    })

    setToDos(newTodos)
  }

  const handleRemove = (id: string): void => {
    const newTodos = toDos.filter(toDo => toDo.id !== id)
    setToDos(newTodos)
  }

  const handleUpdateTitle = ({
    id,
    title
  }: {
    id: string
    title: string
  }): void => {
    const newToDos = toDos.map(toDo => {
      if (toDo.id === id) {
        return {
          ...toDo,
          title
        }
      }

      return toDo
    })

    setToDos(newToDos)
  }

  const handleSave = (title: string): void => {
    const newToDo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    setToDos([...toDos, newToDo])
  }

  const handleClearCompleted = (): void => {
    const newToDos = toDos.filter(toDo => !toDo.completed)
    setToDos(newToDos)
  }

  const filteredToDos = toDos.filter(toDo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !toDo.completed
    }

    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return toDo.completed
    }

    return true
  })

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
    const params = new URLSearchParams(window.location.search)
    params.set('filter', filter)
    window.history.pushState(
      {},
      '',
      `${window.location.pathname}?${params.toString()}`
    )
  }

  const completedCount = toDos.filter(toDo => toDo.completed).length
  const activeCount = toDos.length - completedCount

  return {
    activeCount,
    completedCount,
    filterSelected,
    handleClearCompleted,
    handleCompleted,
    handleFilterChange,
    handleRemove,
    handleSave,
    handleUpdateTitle,
    toDos: filteredToDos
  }
}
