import { TaskItem } from "../../typings/common.types"

const TaskDetailsForm = ({title, description, status, subtasks}: TaskItem)=> {
  return(
    <div data-testid="task-details-container">
      <div data-testid="task-details-title">{title}</div>
      <div data-testid="task-details-description">{description}</div>
      <div data-testid="task-details-subtasks-completed">
        Sub tasks (2 of {subtasks?.length})
      </div>
      <div data-testid="task-details-subtasks-container">
        <div>Sub Task</div>
      </div>
      <select data-testid="task-status-selector" name="status-selector" id="status-selector">
        <option value="todo" selected>To do</option>
      </select>
    </div>
  )
}

export default TaskDetailsForm