import { TaskItem } from "../../typings/common.types"

const BoardColumnTaskItem = ({title, description, status, subtasks}: TaskItem)=> {
  return(
    <div data-testid="task-item">
      <div data-testid="task-title">{title}</div>
      <div data-testid="task-description">{description}</div>
      <div data-testid="task-status">{status}</div>
      <div data-testid="task-subtasks">{subtasks?.length}</div>

    </div>
  )
}

export default BoardColumnTaskItem