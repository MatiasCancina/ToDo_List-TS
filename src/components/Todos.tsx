import { type ToDo as ToDoType, type ToDoId, type ListOfToDos } from '../types'
import { ToDo } from './ToDo'

interface Props {
  toDos: ListOfToDos
  onRemoveToDo: ({ id }: ToDoId) => void
  onToggleCompleted: ({
    id,
    completed
  }: Pick<ToDoType, 'id' | 'completed'>) => void
}

export const ToDos: React.FC<Props> = ({
  toDos,
  onRemoveToDo,
  onToggleCompleted
}) => {
  return (
    <ul className="todo-list">
      {toDos.map(toDo => (
        <li key={toDo.id} className={`${toDo.completed === true ? 'completed' : ' '} `}>
          <ToDo
            key={toDo.id}
            id={toDo.id}
            title={toDo.title}
            completed={toDo.completed}
            onRemoveToDo={onRemoveToDo}
            onToggleCompleted={onToggleCompleted}
          />
        </li>
      ))}
    </ul>
  )
}
