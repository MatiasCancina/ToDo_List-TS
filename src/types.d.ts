import { type TODO_FILTERS } from './consts'

export interface ToDo {
  id: string
  title: string
  completed: boolean
}

export type ToDoId = Pick<ToDo, 'id'>
export type ToDoTitle = Pick<ToDo, 'title'>
export type ToDoCompleted = Pick<ToDo, 'completed'>

export type ListOfToDos = Todo[]

export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS] // para que pueda usar cualquiera de las keys de TODO_FILTERS
