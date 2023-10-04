import { type ListOfToDos } from '../types'
import { ToDo } from './ToDo'

interface Props {
  toDos: ListOfToDos
  onRemoveToDo: (id: string) => void
}

export const ToDos: React.FC<Props> = ({ toDos, onRemoveToDo }) => {
  return (
    <ul className="todo-list">
      {toDos.map(toDo => (
        <li key={toDo.id} className={`${toDo.completed ? 'completed' : ' '} `}>
          <ToDo
            key={toDo.id}
            id={toDo.id}
            title={toDo.title}
            completed={toDo.completed}
            onRemoveToDo={onRemoveToDo}
          />
        </li>
      ))}
    </ul>
  )
}
