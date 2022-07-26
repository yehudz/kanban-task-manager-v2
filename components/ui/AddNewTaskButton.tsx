import { useContext } from "react"
import appContext from "../../context/appContext"

const AddNewTaskButton = ()=> {
  const {setModalContentType} = useContext(appContext)
  function handleClick() {
    setModalVisibility(true)
    setModalContentType("ADD_NEW_TASK")
  }

  const {setModalVisibility} = useContext(appContext)
  return(
    <div data-testid="add-new-task-button" className="btn" onClick={handleClick}>Add New Task</div>
  )
}

export default AddNewTaskButton