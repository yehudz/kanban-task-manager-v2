
// Performance imports
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Component imports
import styles from '../../styles/layout/BoardColumnsContainer.module.scss'
import BoardColumn from '../reusables/BoardColumn'
import { BoardColumnsProps } from '../../typings/interfaces'
import AddNewColumnUi from '../ui/AddNewColumnUi'

const EmptyBoardScreen = dynamic(() => import('../ui/EmptyBoardScreen'), {
  suspense: true,
})

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
      {!board.columns.length && <Suspense fallback={<h1>...</h1>}>
          <EmptyBoardScreen type={emptyScreenType}/>
        </Suspense>}
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