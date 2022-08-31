import { useContext, useEffect, useState } from "react"
import type { Subtask, TaskItem } from "../../typings/common.types"
import appContext from "../../context/appContext"
import styles from '../../styles/reusables/BoardColumnTaskItem.module.scss'
import getSubtasks from "../hooks/getSubtasks"
const BoardColumnTaskItem = (
  {
    id, 
    title, 
    description, 
  }: TaskItem)=> {
  const [subtasks, setSubtasks] = useState<Subtask[]>([])
  const {
    setModalVisibility, 
    setTaskDetails, 
    setModalContentType
  } = useContext(appContext)

  useEffect(()=> {
    const fetchData = async () => {
      setSubtasks(await getSubtasks(id))
    };

    fetchData();
  }, [])
  let params = {
    id,
    title,
    description,
    subtasks
  }

  function showModal() {
    setModalVisibility(true)
    setModalContentType("TASK_DETAILS")
    setTaskDetails(params)
  }

  return(
    <div 
      data-testid="task-item" 
      onClick={showModal} 
      className={`
        ${styles.container} 
        bg-white 
        dark:bg-grey 
        rounded-lg 
        shadow-md
      `}
    >
      <h3 
        data-testid="task-title" 
        className="
          text-grey 
          dark:text-white
        "
      >
        {title}
      </h3>
      <div 
        data-testid="task-subtasks" 
        className="
          body-m 
          text-grey-400 
          mt-1
        "
      >
        <span>{
            subtasks ?
            subtasks.filter(subtask=>subtask.completed).length :
            0
          } </span>
        <span>of </span>
        <span>{
            subtasks ? 
            subtasks.length : 
            0
          } </span>
        <span>subtasks</span>
      </div>
    </div>
  )
}

export default BoardColumnTaskItem