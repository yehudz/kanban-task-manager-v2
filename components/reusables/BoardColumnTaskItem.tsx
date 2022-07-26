import { useContext, useState } from "react"
import { TaskItem } from "../../typings/common.types"
import appContext from "../../context/appContext"
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
    <div data-testid="task-item" onClick={showModal}>
      <div data-testid="task-title">{title}</div>
      <div data-testid="task-subtasks">{subtasks?.length}</div>
    </div>
  )
}

export default BoardColumnTaskItem