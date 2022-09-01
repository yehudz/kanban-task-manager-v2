// Performance imports
import dynamic from 'next/dynamic'

// Component imports
import styles 
from 
'../../styles/layout/BoardColumnsContainer.module.scss'
import AddNewColumnUi from '../ui/AddNewColumnUi'

import type { BoardColumnsProps } from '../../typings/interfaces'

const BoardColumn = dynamic(
  ()=> import('../reusables/BoardColumn'), {
  suspense: true
})
import EmptyBoardScreen from '../ui/EmptyBoardScreen'

//TS Props interface
import { useContext, useEffect, useState } from 'react'
import { BoardColumn } from '../../typings/common.types'
import {AppContext} from '../../context/AppContext'
const BoardColumnsContainer = (
  {board}: BoardColumnsProps
  )=> {
  const {
    columnAdded, 
    setColumnAdded,
    setColumnsCount
  } = useContext(AppContext)
  const [
    emptyScreenType, 
    setEmptyScreenType
  ] = useState<string>('')
  const [
    columns, 
    setColumns
  ] = useState<BoardColumn[]>([])
  async function getAllColumns() {
    const res = await fetch(
      `http://localhost:3001/api/v2/boardColumns/${board.id}`, {
        method: "GET"
      })
    let result = await res.json()
    setColumns(result)
    setColumnAdded(false)
    setColumnsCount(columns.length)
  }

  useEffect(()=> {
    if (board?.id) getAllColumns()
  }, [board, columnAdded])


  useEffect(()=> {
    if (!columns.length) 
    setEmptyScreenType('column')

    if (!board.name && !columns.length) 
    setEmptyScreenType('board') 
  }, [board])
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