import { useEffect, useReducer } from 'react'
import { TODO_FILTERS } from '../consts'
import { fetchToDos, updateToDos } from '../services/toDos'
import { type ListOfToDos, type FilterValue } from '../types'

const initialState = {
  sync: false,
  toDos: [],
  filterSelected: (() => {
    // read from url query params using URLSearchParams
    const params = new URLSearchParams(window.location.search)
    const filter = params.get('filter') as FilterValue | null
    if (filter === null) return TODO_FILTERS.ALL
    // check filter is valid, if not return ALL
    return Object.values(TODO_FILTERS).includes(filter)
      ? filter
      : TODO_FILTERS.ALL
  })()
}

type Action =
  | { type: 'INIT_TODOS', payload: { toDos: ListOfToDos } }
  | { type: 'CLEAR_COMPLETED' }
  | { type: 'COMPLETED', payload: { id: string, completed: boolean } }
  | { type: 'FILTER_CHANGE', payload: { filter: FilterValue } }
  | { type: 'REMOVE', payload: { id: string } }
  | { type: 'SAVE', payload: { title: string } }
  | { type: 'UPDATE_TITLE', payload: { id: string, title: string } }

interface State {
  sync: boolean
  toDos: ListOfToDos
  filterSelected: FilterValue
}

const reducer = (state: State, action: Action): State => {
  if (action.type === 'INIT_TODOS') {
    const { toDos } = action.payload
    return {
      ...state,
      sync: false,
      toDos
    }
  }

  if (action.type === 'CLEAR_COMPLETED') {
    return {
      ...state,
      sync: true,
      toDos: state.toDos.filter(toDo => !toDo.completed)
    }
  }

  if (action.type === 'COMPLETED') {
    const { id, completed } = action.payload
    return {
      ...state,
      sync: true,
      toDos: state.toDos.map(toDo => {
        if (toDo.id === id) {
          return {
            ...toDo,
            completed
          }
        }

        return toDo
      })
    }
  }

  if (action.type === 'FILTER_CHANGE') {
    const { filter } = action.payload
    return {
      ...state,
      sync: true,
      filterSelected: filter
    }
  }

  if (action.type === 'REMOVE') {
    const { id } = action.payload
    return {
      ...state,
      sync: true,
      toDos: state.toDos.filter(toDo => toDo.id !== id)
    }
  }

  if (action.type === 'SAVE') {
    const { title } = action.payload
    const newToDo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    return {
      ...state,
      sync: true,
      toDos: [...state.toDos, newToDo]
    }
  }

  if (action.type === 'UPDATE_TITLE') {
    const { id, title } = action.payload
    return {
      ...state,
      sync: true,
      toDos: state.toDos.map(toDo => {
        if (toDo.id === id) {
          return {
            ...toDo,
            title
          }
        }

        return toDo
      })
    }
  }

  return state
}

export const useToDos = (): {
  activeCount: number
  completedCount: number
  toDos: ListOfToDos
  filterSelected: FilterValue
  handleClearCompleted: () => void
  handleCompleted: (id: string, completed: boolean) => void
  handleFilterChange: (filter: FilterValue) => void
  handleRemove: (id: string) => void
  handleSave: (title: string) => void
  handleUpdateTitle: (params: { id: string, title: string }) => void
} => {
  const [{ sync, toDos, filterSelected }, dispatch] = useReducer(
    reducer,
    initialState
  )

  const handleCompleted = (id: string, completed: boolean): void => {
    dispatch({ type: 'COMPLETED', payload: { id, completed } })
  }

  const handleRemove = (id: string): void => {
    dispatch({ type: 'REMOVE', payload: { id } })
  }

  const handleUpdateTitle = ({
    id,
    title
  }: {
    id: string
    title: string
  }): void => {
    dispatch({ type: 'UPDATE_TITLE', payload: { id, title } })
  }

  const handleSave = (title: string): void => {
    dispatch({ type: 'SAVE', payload: { title } })
  }

  const handleClearCompleted = (): void => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  const handleFilterChange = (filter: FilterValue): void => {
    dispatch({ type: 'FILTER_CHANGE', payload: { filter } })

    const params = new URLSearchParams(window.location.search)
    params.set('filter', filter)
    window.history.pushState(
      {},
      '',
      `${window.location.pathname}?${params.toString()}`
    )
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

  const completedCount = toDos.filter(toDo => toDo.completed).length
  const activeCount = toDos.length - completedCount

  useEffect(() => {
    fetchToDos()
      .then(toDos => {
        dispatch({ type: 'INIT_TODOS', payload: { toDos } })
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  useEffect(() => {
    if (sync) {
      updateToDos({ todos: toDos }).catch(err => {
        console.error(err)
      })
    }
  }, [toDos, sync])

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
