import { type ToDo as ToDoType, type ToDoId, type ListOfTodos } from '../types'
import { Todo } from './ToDo'

interface Props {
  todos: ListOfTodos
  onRemoveToDo: ({ id }: ToDoId) => void
  onToggleCompleted: ({
    id,
    completed
  }: Pick<ToDoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveToDo, onToggleCompleted }) => {
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
            onToggleCompleted={onToggleCompleted}
          />
        </li>
      ))}
    </ul>
  )
}
