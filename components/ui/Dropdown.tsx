import React, { useEffect, useState } from 'react'
import styles from '../../styles/ui/Dropdown.module.scss'
import { DropdownProps } from '../../typings/interfaces'

const Dropdown = ({status, selectedStatus, setTaskStatus}: DropdownProps)=> {
  const [open, setOpen] = useState<boolean>(false)
  const [selection, setSelection] = useState<string>()
// 
  useEffect(()=> {
    console.log(selectedStatus)
    setSelection(selectedStatus ? selectedStatus : status[0].name)
  }, [])

  function handleOpenSelect() {
    setOpen((lastOpen)=> lastOpen = !lastOpen)
  }

  function handleStatusSelection(e: React.MouseEvent<HTMLButtonElement>) {
    setTaskStatus(e.currentTarget.innerText, e)
  }

  return(
    <div 
      data-testid="status-select" 
      className={`${styles.container} w-full text-grey dark:text-white`}
      onClick={handleOpenSelect}
    >
      {selection}
      <div data-testid="select-options" className={`${open ? '' : 'hidden'}`}>
        {status.map((item, i)=> {
          return(
            <button 
              key={item.name} 
              data-testid="status-select-option"
              onClick={handleStatusSelection}
            >
              {item.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Dropdown