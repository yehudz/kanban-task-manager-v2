import React, { useEffect, useState } from 'react'
import styles from '../../styles/ui/Dropdown.module.scss'
import { DropdownProps } from '../../typings/interfaces'

const Dropdown = ({status, selectedStatus, setTaskStatus}: DropdownProps)=> {
  const [open, setOpen] = useState<boolean>(false)
  const [selection, setSelection] = useState<string>()

  useEffect(()=> {
    setSelection(selectedStatus ? selectedStatus : status[0].name)
  }, [])

  function handleOpenSelect() {
    setOpen((lastOpen)=> lastOpen = !lastOpen)
  }

  function handleStatusSelection(e: React.MouseEvent<HTMLButtonElement>) {
    setSelection(e.currentTarget.innerText)
    setTaskStatus(e.currentTarget.innerText, e)
  }

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
      {selection}
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
        {status.map((item, i)=> {
          return(
            <div key={item.name} className="w-full">
              <button 
                data-testid="status-select-option"
                onClick={handleStatusSelection}
                className="text-grey dark:text-white hover:text-purple dark:hover:text-purple w-full text-left"
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