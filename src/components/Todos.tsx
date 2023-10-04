import { ToDo } from './ToDo'
import type { ToDo as ToDoType } from '../types'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface Props {
  toDos: ToDoType[]
  setCompleted: (id: string, completed: boolean) => void
  setTitle: (params: Omit<ToDoType, 'completed'>) => void
  removeTodo: (id: string) => void
}

export const ToDos: React.FC<Props> = ({
  toDos,
  setCompleted,
  setTitle,
  removeTodo
}) => {
  const [isEditing, setIsEditing] = useState('')
  const [parent] = useAutoAnimate()

  return (
    <ul className="todo-list" ref={parent}>
      {toDos?.map(toDo => (
        <li
          key={toDo.id}
          onDoubleClick={() => {
            setIsEditing(toDo.id)
          }}
          className={`
            ${toDo.completed ? 'completed' : ''}
            ${isEditing === toDo.id ? 'editing' : ''}
          `}
        >
          <ToDo
            key={toDo.id}
            id={toDo.id}
            title={toDo.title}
            completed={toDo.completed}
            setCompleted={setCompleted}
            setTitle={setTitle}
            removeToDo={removeTodo}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        </li>
      ))}
    </ul>
  )
}
