import { TaskItem } from "../../typings/common.types"
import OptionsMenuButton from "../ui/OptionsMenuButton"
const TaskDetailsForm = ({title, description, status, subtasks}: TaskItem)=> {
  return(
    <div data-testid="task-details-container" className="flex flex-col bg-white dark:bg-midnight p-5 rounded-md">
      <div data-testid="task-details-title">{title}</div>
      <OptionsMenuButton />
      <div data-testid="task-details-description">{description}</div>
      <div data-testid="task-details-subtasks-completed">
        Sub tasks (2 of {subtasks?.length})
      </div>
      <div data-testid="task-details-subtasks-container">
        {subtasks?.map(subtask=> {
          return(
            <div data-testid="subtask-item">{subtask.title}</div>
          )
        })}
        <div>Sub Task</div>
      </div>
      <select data-testid="task-status-selector" name="status-selector" id="status-selector">
        <option value="todo" selected>To do</option>
      </select>
    </div>
  )
}

export default TaskDetailsForm