
// Component imports
import styles from '../../styles/layout/BoardColumnsContainer.module.scss'
import BoardColumn from '../reusables/BoardColumn'
import { BoardColumnsProps } from '../../typings/interfaces'
import EmptyBoardScreen from '../ui/EmptyBoardScreen'
import AddNewColumnUi from '../ui/AddNewColumnUi'

//TS Props interface
import { useEffect, useState } from 'react'
const BoardColumnsContainer = ({board}: BoardColumnsProps)=> {
  const [emptyScreenType, setEmptyScreenType] = useState<string>()

  useEffect(()=> {
    if (!board.name && !board.columns.length) setEmptyScreenType('board')
    if (board.name && !board.columns.length) setEmptyScreenType('columns')
  }, [board])

  return(
    <div data-testid="columns-container" className={`${styles.container} h-full relative`}>
      {!board.columns.length && <EmptyBoardScreen type={emptyScreenType}/>}
      {board.columns.map((column)=> {
        return(
          <BoardColumn key={column.name} name={column.name} color={column.color} tasks={column.tasks}/>
        )
      })}
      {board.columns.length !== 0 && <AddNewColumnUi />}
    </div>
  )
}

export default BoardColumnsContainer