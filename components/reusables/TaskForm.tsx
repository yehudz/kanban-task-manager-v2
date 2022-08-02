import PrimaryButton from "../ui/PrimaryButton"
import { IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { TaskFormProps } from "../../typings/interfaces";
import appContext from "../../context/appContext";
import Input from "../ui/Input";
import styles from '../../styles/reusables/FormContainer.module.scss';
import Textarea from "../ui/Textarea";
import Dropdown from '../ui/Dropdown';

const TaskForm = ({formTitle, title, description, selectedStatus, status, subtasks, buttonText}: TaskFormProps)=> {
  const {setModalVisibility} = useContext(appContext)
  const [subtaskInputs, setSubtaskInputs] = useState([
        {placeholder: "e.g. Make Coffee"},
        {placeholder: "e.g. Drike coffee & smile"}
    ])

  function createNewSubtaskInput() {
    setSubtaskInputs((prevInputs)=> [...prevInputs, {placeholder: "e.g. Do more stuff"}])
  }

  function createNewTask() {
    setModalVisibility(false)
    // Todo add database functionality
    // alert('Task created')
  }

  useEffect(()=> {
    if (subtasks) setSubtaskInputs([])
  }, [])

  return(
    <div data-testid="task-form" className={`${styles.container} flex flex-col bg-white dark:bg-grey pt-12 pb-8 px-12 rounded-md`}>
      <h3 data-testid="task-form-title">{formTitle}</h3>
      <form>
        <span data-testid="task-form-title-input" className="flex flex-col mt-6">
          <Input 
            testId="task-title-input"
            labelText="Title"
            name="titleInput"
            placeholder="e.g. Take a coffee break"
            defaultValue={title}
          />
        </span>
        <span data-testid="task-form-description-textarea" className="flex flex-col mt-8">
          <label htmlFor="descriptionInput">Description</label>
          <Textarea 
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
            name="descriptionTextarea"
            defaultValue={description?.toString()}
          />
        </span>
      </form>
     
      <div data-testid="task-form-subtasks-container" className="mt-8">
        <div className="font-bold">Subtasks</div>
        {subtasks?.map(subtask=> {
          return(
            <div data-testid="task-form-subtask-input" className="flex flex-row items-center">
              <Input 
                testId="subtask-input"
                placeholder="Subtask Title"
                defaultValue={subtask.title}
                name="subtask-input"
              />
              <IconButton sx={{color: '#fff', paddingRight: 0, paddingLeft: 2, paddingTop: 2}}>
                <img src="/images/icon-cross.svg" alt="" />
              </IconButton>
            </div>
          )
        })}
        {subtaskInputs.map(subtask=> {
          return(
            <div key={subtask.placeholder} data-testid="task-form-subtask-input" className="flex flex-row items-center">
               <Input 
                defaultValue=""
                testId="subtask-input"
                placeholder={subtask.placeholder}
                name="subtask-input"
              />
              <IconButton sx={{color: '#fff', paddingRight: 0, paddingLeft: 2, paddingTop: 2}}>
                <img src="/images/icon-cross.svg" alt="" />
              </IconButton>
            </div>
          )
        })}
      </div>
      <PrimaryButton buttonText="+ Add new subtask" color="white" handleClick={createNewSubtaskInput}/>
      <span data-testid="task-form-status-select" className="flex flex-col">
        <div className="font-bold mb-4">Status</div>
        <Dropdown status={status} selectedStatus={selectedStatus}/>
      </span>
      <PrimaryButton buttonText={buttonText} color="primary" handleClick={createNewTask}/>
    </div>
  )
}

export default TaskForm