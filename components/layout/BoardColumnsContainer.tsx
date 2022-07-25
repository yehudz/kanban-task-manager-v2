import styles from '../../styles/layout/BoardColumnsContainer.module.scss'
import BoardColumn from '../reusables/BoardColumn'
//TS Props interface
import { BoardColumnsProps } from '../../typings/interfaces'
import EmptyBoardScreen from '../ui/EmptyBoardScreen'
const BoardColumnsContainer = ({board}: BoardColumnsProps)=> {
  return(
    <div data-testid="columns-container" className={`${styles.container} w-full h-full`}>
      {!board.columns.length && <EmptyBoardScreen />}
      {board.columns.map(column=> {
        return(
          <BoardColumn key={column.name}/>
        )
      })}
    </div>
  )
}

export default BoardColumnsContainer