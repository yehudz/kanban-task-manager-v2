import React, { useContext, useEffect, useState } from 'react'
import appContext from '../../context/appContext'
import styles from '../../styles/ui/Dropdown.module.scss'
import getBoardColumnsData from '../hooks/getBoardColumnsData'
import type { DropdownOptions, TaskDetails } from '../../typings/common.types'
import type { DropdownProps } from '../../typings/interfaces'
import updateStatus from '../hooks/updateStatus'
const Dropdown = ({
  taskDetails
}: DropdownProps)=> {
  const [open, setOpen] = useState<boolean>(false)
  const [status, setStatus] = useState<string>('')
  const [options, setOptions] = useState<DropdownOptions[]>([])
  const {boardId, setUpdatedTask} = useContext(appContext)
  async function handleOpenSelect() {
    setOpen((lastOpen)=> lastOpen = !lastOpen)
  }

  function handleStatusSelection(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    let target = e.target as HTMLButtonElement
    setStatus(target.innerText)
  }

  async function updateTaskStatus() {
    let selection = options.filter(option=> {
      if (status === option.name) return option
    })
    if (selection[0]?.id)
    taskDetails.board_column_id = selection[0]?.id

    let updatedTask = await updateStatus(taskDetails)
      if (updatedTask) {
        setUpdatedTask(true)
      }
  }

  useEffect(()=> {
    if (status) {
      updateTaskStatus()
    }
  }, [status])
  
  // Gets all the simple board column data
  useEffect(()=> {
    (async()=> {
      setOptions(await getBoardColumnsData(boardId))
    })()
  }, [])

  // Sets the current task status e.g "To do"
  useEffect(()=> {
    let currentStatus = options.filter(
      option=>option.id === taskDetails.board_column_id
    )
    setStatus(currentStatus[0]?.name)
  }, [options])

  return(
    <div 
      data-testid="status-select" 
      className={`
        ${styles.container}
        flex
        items-center
        relative
        pl-4
        w-full 
        text-grey 
        dark:text-white
        border
        border-solid
        border-grey-700
        rounded-lg
        cursor-pointer
        hover:border-purple
        focus:border-purple
        bg-transparent
      `}
      onClick={handleOpenSelect}
    >
      {status}
      <div 
        data-testid="select-options" 
        className={`
          ${open ? '' : 'hidden'}
          flex
          flex-col
          gap-4
          items-start
          absolute
          top-16
          left-0
          p-4
          w-full
          bg-white
          dark:bg-grey
          border
          border-solid
          border-grey
          dark:border-grey-700
          rounded-lg
        `}
      >
        {options?.map((item, i)=> {
          return(
            <div key={item.name} className="w-full">
              <button 
                data-testid="status-select-option"
                onClick={handleStatusSelection}
                className="
                  text-grey 
                  dark:text-white 
                  hover:text-purple 
                  dark:hover:text-purple 
                  w-full 
                  text-left
                "
              >
                {item.name}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dropdown