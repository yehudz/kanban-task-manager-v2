
// Performance imports
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Component imports
import styles from '../../styles/layout/BoardColumnsContainer.module.scss'
import { BoardColumnsProps } from '../../typings/interfaces'
import AddNewColumnUi from '../ui/AddNewColumnUi'

// import BoardColumn from '../reusables/BoardColumn'
const BoardColumn = dynamic(()=> import('../reusables/BoardColumn'), {
  suspense: true
})
const EmptyBoardScreen = dynamic(() => import('../ui/EmptyBoardScreen'), {
  suspense: true,
})

//TS Props interface
import { useEffect, useState } from 'react'
const BoardColumnsContainer = ({board}: BoardColumnsProps)=> {
  const [emptyScreenType, setEmptyScreenType] = useState<string>('')

  useEffect(()=> {
    if (!board?.name && !board?.columns.length) setEmptyScreenType('board')
    if (board?.name && !board?.columns.length) setEmptyScreenType('columns')
  }, [board])

  return(
    <div data-testid="columns-container" className={`${styles.container} h-full relative`}>
      {!board?.columns.length && <EmptyBoardScreen type={emptyScreenType}/>}
      {board?.columns.map((column)=> {
        return(
          <BoardColumn key={column.id} id={column.id} name={column.name} color={column.color}/>
        )
      })}
      {board?.columns ? <AddNewColumnUi /> : null}
    </div>
  )
}

export default BoardColumnsContainer