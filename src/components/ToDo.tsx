import { ToDoId, type ToDo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveToDo: ({ id }: ToDoId) => void
}
export const Todo: React.FC<Props> = ({
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
          onRemoveToDo({ id }) // como puedo simplificar para pasar solamente la action desde ToDos?
        }}
      />
    </div>
  )
}
