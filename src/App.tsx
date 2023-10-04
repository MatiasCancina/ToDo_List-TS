import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { ToDos } from './components/ToDos.tsx'
import { useToDos } from './hooks/useToDos.ts'

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
