import ts_logo from '../../public/images/Typescript_logo.png'
import { CreateToDo } from './CreateToDo'

interface Props {
  saveToDo: (title: string) => void
}

export const Header: React.FC<Props> = ({ saveToDo }) => {
  return (
    <header className="header">
      <h1>
        toDo
        <img style={{ width: '60px', height: 'auto' }} src={ts_logo}></img>
      </h1>

      <CreateToDo saveToDo={saveToDo} />
    </header>
  )
}
