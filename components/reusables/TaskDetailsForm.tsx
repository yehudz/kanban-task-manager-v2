import { TaskItem } from "../../typings/common.types"
import OptionsMenu from "./OptionsMenu"
import styles from '../../styles/reusables/FormContainer.module.scss'
import SubtaskItem from "./SubtaskItem"
import Dropdown from '../ui/Dropdown';
const TaskDetailsForm = ({title, description, status, selectedStatus, subtasks}: TaskItem)=> {
  return(
    <div data-testid="task-details-container" className={`${styles.container} flex flex-col bg-white dark:bg-grey pt-12 pb-8 px-12 rounded-lg`}>
      <div className="flex flex-row items-center">
        <h3 data-testid="task-details-title" className="flex-1 p-0">{title}</h3>
        <OptionsMenu menuItems={['Edit Task', 'Delete Task']}/>
      </div>
      <div data-testid="task-details-description" className="body-lg text-grey-400 my-3">{description}</div>
      <div data-testid="task-details-subtasks-completed" className="my-3">
        Sub tasks ({subtasks?.filter(subtask=>subtask.isCompleted).length} of {subtasks?.length})
      </div>
      <div data-testid="task-details-subtasks-container" className="mb-8">
        {subtasks?.map(subtask=> {
          return(
            <SubtaskItem key={subtask.title} title={subtask.title} isCompleted={subtask.isCompleted}/>
          )
        })}
      </div>
      <Dropdown status={status} selectedStatus={selectedStatus}/>
    </div>
  )
}

export default TaskDetailsForm