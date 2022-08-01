import { WarningMessageProps } from "../../typings/interfaces"
import styles from '../../styles/reusables/WarningMessage.module.scss'
import React, { useContext } from "react"
import appContext from "../../context/appContext"

const WarningMessage = ({title, itemName, type}: WarningMessageProps)=> {
  const {setModalVisibility} = useContext(appContext)

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    switch(e.currentTarget.innerText) {
      case 'Confirm': {
        setModalVisibility(false)
        break
      }
    }
  }
  const Message = ()=> {
    if (type === 'task') {
      return(
        <p data-testid="warning-message-tex" className="text-grey-400 mb-6">Are you sure you want to delete the '{itemName}' task and its subtasks? This action cannot be reversed.</p>
      )
    } else {
      return(
        <p data-testid="warning-message-tex" className="text-grey-400 mb-6">Are you sure you want to delete the '{itemName}' board? This action will remove all columns and tasks and cannot be reversed.</p>
      )
    }
  }

  return(
    <div data-testid="warning-message-container" className={`${styles.container} bg-white dark:bg-grey py-12 px-12 rounded-lg`}>
      <h2 data-testid="warning-message-title" className="text-red mb-6">{title}</h2>
      <Message />
      <div className="flex flex-col sm:flex-row items-center justify-between ">
        <button 
          onClick={handleClick} 
          data-testid="warning-message-confirm-button" 
          type="button" 
          className="py-3 w-full mb-4 sm:mb-0 rounded-full bg-red hover:bg-red-light"
          >
            Delete
          </button>
        <button 
          data-testid="warning-message-cancel-button" 
          type="button" 
          className="py-3 w-full rounded-full bg-white hover:bg-white dark:bg-grey-100 dark:hover:bg-grey-200 text-purple"
        >
            Cancel
          </button>
      </div>
    </div>
  )
}

export default WarningMessage