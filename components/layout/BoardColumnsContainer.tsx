// Performance imports
import dynamic from 'next/dynamic'

// Component imports
import styles 
from 
'../../styles/layout/BoardColumnsContainer.module.scss'
import AddNewColumnUi from '../ui/AddNewColumnUi'

const BoardColumn = dynamic(
  ()=> import('../reusables/BoardColumn'), {
  suspense: true
})
import EmptyBoardScreen from '../ui/EmptyBoardScreen'

//TS Props interface
import { useContext, useEffect, useState } from 'react'
import { BoardColumn } from '../../typings/common.types'
import getBoardColumnsData from '../hooks/getBoardColumnsData'
import { BoardsContext } from '../../context/BoardsContext'
import { BoardContextValues } from '../../typings/context.types'

const BoardColumnsContainer = ()=> {
  const [
    emptyScreenType, 
    setEmptyScreenType
  ] = useState<string>('')

  const {board} = useContext(BoardsContext) as BoardContextValues

  const [
    columns, 
    setColumns
  ] = useState<BoardColumn[]>([])
  async function getAllColumns() {
    let results = await getBoardColumnsData(board.id)
    setColumns(results)
  }

  useEffect(()=> {
    if (board?.id) getAllColumns()
  }, [board])


  useEffect(()=> {
    if (!columns.length) 
    setEmptyScreenType('column')

    if (!board) 
    setEmptyScreenType('board') 
  }, [board, columns])
  return(
    <div 
      data-testid="columns-container" 
      className={`
        ${styles.container} 
        h-full 
        relative
      `
    }>
      {columns?.length === 0 && 
        <EmptyBoardScreen 
          type={emptyScreenType}
        />}
      {columns?.map((column)=> {
        return(
          <BoardColumn 
            key={column.id} 
            id={column.id || ''} 
            name={column.name} 
            color={column.color}
          />
        )
      })}
      {(columns?.length !== 0) ? 
        <AddNewColumnUi /> : 
        null
      }
    </div>
  )
}

export default BoardColumnsContainer