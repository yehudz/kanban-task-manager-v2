import { TaskFormProps } from "../../typings/interfaces"
import OptionsMenu from "./OptionsMenu"
import styles from '../../styles/reusables/FormContainer.module.scss'
import SubtaskItem from "./SubtaskItem"
import Dropdown from '../ui/Dropdown';
import { useContext, useEffect, useState } from "react";
import { BoardColumn } from "../../typings/common.types";
import appContext from "../../context/appContext";
const TaskDetailsForm = ({id, title, description, status, selectedStatus, subtasks, boardColumns}: TaskFormProps)=> {
  const [taskStatus, setTaskStatus] = useState<string>(selectedStatus ? selectedStatus : '')
  const [selectedColumn, setSelectedColumn] = useState<BoardColumn>()
  const {setNewTaskCreated, modalVisibility} = useContext(appContext)
  async function handleUpdates() {
    let params = {
      id: id,
      status: taskStatus,
      columnId: selectedColumn ? selectedColumn.id : boardColumns[0].id
    }
    
    const res = await fetch(`/api/updateTaskStatus`, {
      method: "POST",
      body: JSON.stringify(params)
    })
    if (res.status === 200) {
      setNewTaskCreated(true)
    } else {
      alert('something went wrong')
    }
  }

  // Calls to handle update after column has been selected
  useEffect(()=> {
    if (selectedColumn) handleUpdates()
  }, [selectedColumn])

  // Set the colum to the status drop down selection
  useEffect(()=> {
    
    let selected = boardColumns.filter(column=> taskStatus === column.name)
    setSelectedColumn(selected[0])
  }, [taskStatus])


  return(
    <div data-testid="task-details-container" className={`${styles.container} flex flex-col bg-white dark:bg-grey pt-12 pb-8 px-12 rounded-lg`}>
      <div className="flex flex-row items-center">
        <h3 data-testid="task-details-title" className="flex-1 p-0 text-grey dark:text-white">{title}</h3>
        <OptionsMenu menuItems={['Edit Task', 'Delete Task']}/>
      </div>
      <div data-testid="task-details-description" className="body-lg text-grey-400 my-3">{description}</div>
      <div data-testid="task-details-subtasks-completed" className="my-3 text-grey-400 font-bold dark:text-white">
        Sub tasks ({subtasks?.filter(subtask=>subtask.isCompleted).length} of {subtasks?.length})
      </div>
      <div data-testid="task-details-subtasks-container" className="mb-8">
        {subtasks?.map(subtask=> {
          return(
            <SubtaskItem key={subtask.id} title={subtask.title} isCompleted={subtask.isCompleted}/>
          )
        })}
      </div>
      <Dropdown status={status} selectedStatus={selectedStatus} setTaskStatus={setTaskStatus}/>
    </div>
  )
}

export default TaskDetailsForm