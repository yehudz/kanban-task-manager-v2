import { TaskFormProps } from "../../typings/interfaces"
import OptionsMenu from "./OptionsMenu"
import styles from '../../styles/reusables/FormContainer.module.scss'
import SubtaskItem from "./SubtaskItem"
import Dropdown from '../ui/Dropdown';

const TaskDetailsForm = (
  {
    id, 
    title, 
    description, 
    subtasks, 
  }: TaskFormProps)=> {
  async function handleUpdates() {
    
  }

  return(
    <div 
      data-testid="task-details-container" 
      className={`
        ${styles.container} 
        flex 
        flex-col 
        bg-white 
        dark:bg-grey 
        pt-12 
        pb-8 
        px-12 
        rounded-lg
      `}
    >
      <div 
        className="
          flex 
          flex-row 
          items-center
        "
      >
        <h3 
          data-testid="task-details-title" 
          className="
            flex-1 
            p-0 
            text-grey 
            dark:text-white
          "
        >
          {title}
        </h3>
        <OptionsMenu 
          menuItems={['Edit Task', 'Delete Task']}
        />
      </div>
      <div 
        data-testid="task-details-description" 
        className="
          body-lg 
          text-grey-400 
          my-3
        "
      >
        {description}
      </div>
      <div 
        data-testid="task-details-subtasks-completed" 
        className="
          my-3 
          text-grey-400 
          font-bold 
          dark:text-white
        "
      >
        <span>
          Sub tasks  
        </span>&nbsp;
        <span>
        {subtasks?.filter(subtask=>subtask.completed).length} 
        </span>&nbsp; 
        <span>
          of 
        </span>&nbsp;
        <span>
        {subtasks?.length}
        </span>
      </div>
      <div 
        data-testid="task-details-subtasks-container" 
        className="mb-8"
      >
        {subtasks?.map(subtask=> {
          return(
            <SubtaskItem 
              key={subtask.id} 
              id={subtask.id} 
              title={subtask.title} 
              completed={subtask.completed}
            />
          )
        })}
      </div>
      <Dropdown />
    </div>
  )
}

export default TaskDetailsForm