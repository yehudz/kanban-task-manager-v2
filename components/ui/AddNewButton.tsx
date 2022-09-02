import { useContext } from "react"
import {AppContext} from "../../context/AppContext"
import styles from '../../styles/ui/AddNewButton.module.scss'
import { AddNewButtonProps } from "../../typings/interfaces"
const AddNewButton = (
  {
    buttonText, 
    contentType, 
    disabled
  }: AddNewButtonProps)=> {
  const {setModalContentType} = useContext(AppContext)

  function handleClick() {
    setModalVisibility(true)
    switch(contentType) {
      case 'add-new-task':
        setModalContentType("ADD_NEW_TASK")
        break
      case 'create-new-board':
        setModalContentType('CREATE_NEW_BOARD')
        break
      case 'add-new-column':
        setModalContentType("ADD_COLUMN")
        break
    }
  }

  const {setModalVisibility} = useContext(AppContext)
  return(
    <button 
      type="button" 
      data-testid="add-new-task-button" 
      disabled={disabled}
      className={
          `${styles.container} 
          flex 
          flex-row 
          items-center 
          justify-center 
          bg-purple font-bold
          text-white
        `
      }
      onClick={handleClick}>
        <img 
          src="images/icon-add-task-mobile.svg" 
          alt="" 
          className="mr-3"
        />
        <span 
          className={styles.buttonText}
        >
          {buttonText}
        </span>
      </button>
  )
}

export default AddNewButton