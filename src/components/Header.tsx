import ts_logo from '../../public/images/Typescript_logo.png'
import { type ToDoTitle } from '../types'
import { CreateToDo } from './CreateToDo'

interface Props {
  onAddToDo: ({ title }: ToDoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddToDo }) => {
  return (
    <header className="header">
      <h1>
        toDo
        <img src={ts_logo} style={{ width: '60px', height: 'auto' }} />
      </h1>
      <CreateToDo saveToDo={onAddToDo} />
    </header>
  )
}
