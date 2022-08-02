import { useContext } from "react"
import { TaskItem } from "../../typings/common.types"
import appContext from "../../context/appContext"
import styles from '../../styles/reusables/BoardColumnTaskItem.module.scss'
const BoardColumnTaskItem = ({title, description, status, subtasks}: TaskItem)=> {
  const {setModalVisibility, setTaskDetails, setModalContentType} = useContext(appContext)

  let params = {
    title,
    description,
    status,
    subtasks
  }

  function showModal() {
    setModalVisibility(true)
    setModalContentType("TASK_DETAILS")
    setTaskDetails(params)
  }

  return(
    <div data-testid="task-item" onClick={showModal} className={`${styles.container} bg-white dark:bg-grey rounded-lg shadow-md`}>
      <h3 data-testid="task-title" className="text-grey dark:text-white">{title}</h3>
      <div data-testid="task-subtasks" className="body-m text-grey-400 mt-1">{subtasks?.filter(subtask=>subtask.isCompleted).length} of {subtasks?.length} substasks</div>
    </div>
  )
}

export default BoardColumnTaskItem