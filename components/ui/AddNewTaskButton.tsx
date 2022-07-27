import { useContext } from "react"
import appContext from "../../context/appContext"
import styles from '../../styles/ui/AddNewButton.module.scss'

const AddNewTaskButton = ()=> {
  const {setModalContentType} = useContext(appContext)
  function handleClick() {
    setModalVisibility(true)
    setModalContentType("ADD_NEW_TASK")
  }

  const {setModalVisibility} = useContext(appContext)
  return(
    <button 
      type="button" 
      data-testid="add-new-task-button" 
      className={`${styles.container} flex flex-row items-center justify-center bg-purple font-bold`}
      onClick={handleClick}>
        <img src="images/icon-add-task-mobile.svg" alt="" className="mr-3"/>
        <span>Add New Task</span>
      </button>
  )
}

export default AddNewTaskButton