import { type ToDoId, type ToDo as ToDoType } from '../types'

interface Props extends ToDoType {
  onRemoveToDo: ({ id }: ToDoId) => void
  onToggleCompleted: ({
    id,
    completed
  }: Pick<ToDoType, 'id' | 'completed'>) => void
}
export const ToDo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveToDo,
  onToggleCompleted
}) => {
  const handleChangeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    onToggleCompleted({ id, completed: event.target.checked })
  }

  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={handleChangeCheckbox}
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
