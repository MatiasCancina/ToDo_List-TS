import { useState } from 'react'
import { type ToDoTitle } from '../types'

interface Props {
  saveToDo: ({ title }: ToDoTitle) => void
}

export const CreateToDo: React.FC<Props> = ({ saveToDo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveToDo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value)
        }}
        onKeyDown={() => {}}
        placeholder="What do you want to do?"
        autoFocus
      />
    </form>
  )
}
