import { useState } from "react"
import { TaskItem } from "../../typings/common.types"
import ResuableModal from './ReusableModal'
const BoardColumnTaskItem = ({title, description, status, subtasks}: TaskItem)=> {
  const [modalVisibility, setModalVisibility] = useState<boolean>(false)

  function showModal() {
    setModalVisibility(true)
  }

  return(
    <div data-testid="task-item" onClick={showModal}>
      <div data-testid="task-title">{title}</div>
      <div data-testid="task-subtasks">{subtasks?.length}</div>
      <ResuableModal visibility={modalVisibility}/>
    </div>
  )
}

export default BoardColumnTaskItem