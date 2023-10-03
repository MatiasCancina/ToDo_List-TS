export interface ToDo {
  id: string
  title: string
  completed: boolean
}

export type ToDoId = Pick<ToDo, 'id'>
export type ToDoTitle = Pick<ToDo, 'title'>
export type ToDoCompleted = Pick<ToDo, 'completed'>

export type ListOfTodos = Todo[]
