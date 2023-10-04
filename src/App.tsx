import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ToDos } from './components/ToDos'
import { useToDos } from './hooks/useToDos'

const App: React.FC = () => {
  const {
    activeCount,
    completedCount,
    filterSelected,
    handleClearCompleted,
    handleCompleted,
    handleFilterChange,
    handleRemove,
    handleSave,
    handleUpdateTitle,
    toDos: filteredToDos
  } = useToDos()

  return (
    <>
      <div className="todoapp">
        <Header saveToDo={handleSave} />
        <ToDos
          removeTodo={handleRemove}
          setCompleted={handleCompleted}
          setTitle={handleUpdateTitle}
          toDos={filteredToDos}
        />
        <Footer
          handleFilterChange={handleFilterChange}
          completedCount={completedCount}
          activeCount={activeCount}
          filterSelected={filterSelected}
          onClearCompleted={handleClearCompleted}
        />
      </div>
    </>
  )
}

export default App
