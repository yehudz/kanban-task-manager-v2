import PrimaryButton from "../ui/PrimaryButton"
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { TaskFormProps } from "../../typings/interfaces";
import appContext from "../../context/appContext";
import Input from "../ui/Input";
import styles from '../../styles/reusables/FormContainer.module.scss';
import Textarea from "../ui/Textarea";

const TaskForm = ({formTitle, title, description, status, subtasks, buttonText}: TaskFormProps)=> {
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
      <h2 data-testid="task-form-title">{formTitle}</h2>
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
                inputDefaultValue={subtask.title}
                inputName="subtask-input"
              />
              <IconButton sx={{color: '#fff', paddingRight: 0, paddingLeft: 2, paddingTop: 2}}>
                <img src="/images/icon-cross.svg" alt="" />
              </IconButton>
            </div>
          )
        })}
        {subtaskInputs.map(subtask=> {
          return(
            <div data-testid="task-form-subtask-input" className="flex flex-row items-center">
               <Input 
                inputDefaultValue=""
                testId="subtask-input"
                placeholder={subtask.placeholder}
                inputName="subtask-input"
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
        <select data-testid="status-select" name="statusSelect" id="statusSelect">
          <option value="Todo">Todo</option>
          <option value="Done">Done</option>
        </select>
      </span>
      <PrimaryButton buttonText={buttonText} color="primary" handleClick={createNewTask}/>
    </div>
  )
}

export default TaskForm