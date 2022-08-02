import styles from '../../styles/layout/BoardColumnsContainer.module.scss'
import BoardColumn from '../reusables/BoardColumn'
//TS Props interface
import { BoardColumnsProps } from '../../typings/interfaces'
import EmptyBoardScreen from '../ui/EmptyBoardScreen'
import AddNewColumnUi from '../ui/AddNewColumnUi'
const BoardColumnsContainer = ({board}: BoardColumnsProps)=> {
  return(
    <div data-testid="columns-container" className={`${styles.container} h-full relative`}>
      {!board.columns.length && <EmptyBoardScreen />}
      {board.columns.map((column)=> {
        return(
          <BoardColumn key={column.name} name={column.name} color={column.color} tasks={column.tasks}/>
        )
      })}
      {board.columns.length && <AddNewColumnUi />}
    </div>
  )
}

export default BoardColumnsContainer