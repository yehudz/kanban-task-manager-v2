import { useContext, useState } from "react"
import { TaskItem } from "../../typings/common.types"
import ResuableModal from './ReusableModal'
import appContext from "../../context/appContext"
const BoardColumnTaskItem = ({title, description, status, subtasks}: TaskItem)=> {
  const {setModalVisibility} = useContext(appContext)

  function showModal() {
    setModalVisibility(true)
  }

  return(
    <div data-testid="task-item" onClick={showModal}>
      <div data-testid="task-title">{title}</div>
      <div data-testid="task-subtasks">{subtasks?.length}</div>
    </div>
  )
}

export default BoardColumnTaskItem