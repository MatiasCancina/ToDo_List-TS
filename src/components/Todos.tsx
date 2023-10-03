import { ToDoId, type ListOfTodos } from '../types'
import { Todo } from './ToDo'

interface Props {
  todos: ListOfTodos
  onRemoveToDo: ({ id }: ToDoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveToDo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ' '} `}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveToDo={onRemoveToDo}
          />
        </li>
      ))}
    </ul>
  )
}
