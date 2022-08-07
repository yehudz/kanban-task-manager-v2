
// Performance imports
import dynamic from 'next/dynamic'

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
import { useContext, useEffect, useState } from 'react'
import { BoardColumn } from '../../typings/common.types'
import appContext from '../../context/appContext'
const BoardColumnsContainer = ({board}: BoardColumnsProps)=> {
  const {columnAdded, setColumnAdded} = useContext(appContext)
  const [emptyScreenType, setEmptyScreenType] = useState<string>('')
  const [columns, setColumns] = useState<BoardColumn[]>()
  async function getAllColumns() {
    let params = {
      boardId: board.id
    }
    const res = await fetch(`/api/getColumns`, {
      method: "POST",
      body: JSON.stringify(params)
    })
    let result = await res.json()
    setColumns(result.columns)
    setColumnAdded(false)
  }

  useEffect(()=> {
    if (board.id) getAllColumns()
  }, [board, columnAdded])


  useEffect(()=> {
    if (!board?.name && !board?.columns.length) setEmptyScreenType('board')
    if (board?.name && !board?.columns.length) setEmptyScreenType('columns')
  }, [board])
  return(
    <div data-testid="columns-container" className={`${styles.container} h-full relative`}>
      {columns?.length === 0 && <EmptyBoardScreen type={emptyScreenType}/>}
      {columns?.map((column)=> {
        return(
          <BoardColumn key={column.id} id={column.id} name={column.name} color={column.color}/>
        )
      })}
      {(columns?.length !== 0) ? <AddNewColumnUi /> : null}
    </div>
  )
}

export default BoardColumnsContainer