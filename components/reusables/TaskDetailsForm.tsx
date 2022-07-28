import { TaskItem } from "../../typings/common.types"
import OptionsMenu from "./OptionsMenu"
import styles from '../../styles/reusables/FormContainer.module.scss'
import SubtaskItem from "./SubtaskItem"
const TaskDetailsForm = ({title, description, status, subtasks}: TaskItem)=> {
  return(
    <div data-testid="task-details-container" className={`${styles.container} flex flex-col bg-white dark:bg-grey p-5 rounded-md`}>
      <div className="flex flex-row items-center">
        <h3 data-testid="task-details-title" className="flex-1 p-0">{title}</h3>
        <OptionsMenu menuItems={['Edit Task', 'Delete Task']}/>
      </div>
      <div data-testid="task-details-description" className="body-lg text-grey-400 my-3">{description}</div>
      <div data-testid="task-details-subtasks-completed" className="my-3">
        Sub tasks ({subtasks?.filter(subtask=>subtask.isCompleted).length} of {subtasks?.length})
      </div>
      <div data-testid="task-details-subtasks-container">
        {subtasks?.map(subtask=> {
          return(
            <SubtaskItem title={subtask.title} isCompleted={subtask.isCompleted}/>
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