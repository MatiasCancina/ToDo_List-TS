import { type ToDo as ToDoType } from '../types'

interface Props extends ToDoType {
  onRemoveToDo: (id: string) => void
}
export const ToDo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveToDo
}) => {
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={() => {}}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveToDo(id) // como puedo simplificar para pasar solamente la action desde ToDos?
        }}
      />
    </div>
  )
}
