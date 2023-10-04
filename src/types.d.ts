export interface ToDo {
  id: string
  title: string
  completed: boolean
}

export type ListOfToDos = ToDo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS] // para que pueda usar cualquiera de las keys de TODO_FILTERS
