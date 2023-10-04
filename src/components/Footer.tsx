import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  onClearCompleted,
  filterSelected,
  handleFilterChange
}) => {
  const singleActiveTask = activeCount === 1
  const activeToDoWord = singleActiveTask ? 'task' : 'tasks'

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount} </strong> pending {activeToDoWord}
      </span>

      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />

      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Delete Completed
        </button>
      )}
    </footer>
  )
}
