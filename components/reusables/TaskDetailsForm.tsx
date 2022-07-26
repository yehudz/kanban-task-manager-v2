import { TaskItem } from "../../typings/common.types"
import OptionsMenuButton from "../ui/OptionsMenuButton"
import OptionsMenu from "./OptionsMenu"
const TaskDetailsForm = ({title, description, status, subtasks}: TaskItem)=> {
  return(
    <div data-testid="task-details-container" className="flex flex-col bg-white dark:bg-midnight p-5 rounded-md">
      <div data-testid="task-details-title">{title}</div>
      <OptionsMenu menuItems={['Edit Task', 'Delete Task']}/>
      <div data-testid="task-details-description">{description}</div>
      <div data-testid="task-details-subtasks-completed">
        Sub tasks (2 of {subtasks?.length})
      </div>
      <div data-testid="task-details-subtasks-container">
        {subtasks?.map(subtask=> {
          return(
            <div key={subtask.title} data-testid="subtask-item">{subtask.title}</div>
          )
        })}
        <div>Sub Task</div>
      </div>
      <select data-testid="task-status-selector" name="status-selector" id="status-selector" defaultValue={''}>
        <option value="todo">Todo</option>
      </select>
    </div>
  )
}

export default TaskDetailsForm