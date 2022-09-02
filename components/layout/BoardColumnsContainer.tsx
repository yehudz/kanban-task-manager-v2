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
import React, { useContext, useEffect, useState, memo } from 'react'
import type { BoardColumn } from '../../typings/common.types'
import getBoardColumnsData from '../hooks/getBoardColumnsData'
import { BoardsContext } from '../../context/BoardsContext'
import { BoardContextValues, ColumnContextValues } from '../../typings/context.types'
import { ColumnsContext } from '../../context/ColumnsContext'

const BoardColumnsContainer = ()=> {
  const [
    emptyScreenType, 
    setEmptyScreenType
  ] = useState<string>('')

  const {board} = useContext(BoardsContext) as BoardContextValues
  const {
    columns, 
    setColumns
   } = useContext(ColumnsContext) as ColumnContextValues
  
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
        <ul 
          data-testid="board-columns"
          id="board-columns"
          className='flex'
        >
          {columns?.map((column)=> {
            return(
              <li 
                key={column.id} 
                data-testid="board-column-container"
                id="board-column"
              >
                <BoardColumn 
                  id={column.id || ''} 
                  name={column.name} 
                  color={column.color}
                />
              </li>
            )
          })}
        </ul>
      {(columns?.length !== 0) ? 
        <AddNewColumnUi /> : 
        null
      }
    </div>
  )
}

export default memo(BoardColumnsContainer)