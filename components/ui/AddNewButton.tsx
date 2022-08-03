import { useContext } from "react"
import appContext from "../../context/appContext"
import styles from '../../styles/ui/AddNewButton.module.scss'
import { AddNewButtonProps } from "../../typings/interfaces"
const AddNewButton = ({buttonText, contentType}: AddNewButtonProps)=> {
  const {setModalContentType} = useContext(appContext)

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

  const {setModalVisibility} = useContext(appContext)
  return(
    <button 
      type="button" 
      data-testid="add-new-task-button" 
      className={`${styles.container} flex flex-row items-center justify-center bg-purple font-bold`}
      onClick={handleClick}>
        <img src="images/icon-add-task-mobile.svg" alt="" className="mr-3"/>
        <span className={styles.buttonText}>{buttonText}</span>
      </button>
  )
}

export default AddNewButton