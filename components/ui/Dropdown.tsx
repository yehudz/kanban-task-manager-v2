import React, { useContext, useEffect, useState } from 'react'
import appContext from '../../context/appContext'
import styles from '../../styles/ui/Dropdown.module.scss'
import getBoardColumnsData from '../hooks/getBoardColumnsData'
import { DropdownOptions } from '../../typings/common.types'
const Dropdown = ()=> {
  const [open, setOpen] = useState<boolean>(false)
  const [status, setStatus] = useState<string>('To do')
  const [options, setOptions] = useState<DropdownOptions[]>([])
  const {boardId} = useContext(appContext)

  function handleOpenSelect() {
    setOpen((lastOpen)=> lastOpen = !lastOpen)
  }

  function handleStatusSelection(
    e: React.MouseEvent<HTMLButtonElement>
  ) {
    let target = e.target as HTMLButtonElement
    setStatus(target.innerText)
  }

  useEffect(()=> {
    (async()=> {
      setOptions(await getBoardColumnsData(boardId))
    })()
  }, [])
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