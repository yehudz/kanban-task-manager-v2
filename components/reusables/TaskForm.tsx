import PrimaryButton from "../ui/PrimaryButton"
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from "@mui/material";
import { useState } from "react";
import { TaskFormProps } from "../../typings/interfaces";

const TaskForm = ({formTitle, title, description, status, subtasks, buttonText}: TaskFormProps)=> {

  const [subtaskInputs, setSubtaskInputs] = useState([
        {placeholder: "e.g. Make Coffee"},
        {placeholder: "e.g. Drike coffee & smile"}
    ])

  function createNewSubtaskInput() {
    setSubtaskInputs((prevInputs)=> [...prevInputs, {placeholder: "e.g. Do more stuff"}])
  }

  function createNewTask() {
    // Todo add database functionality
    alert('Task created')
  }

  return(
    <div data-testid="task-form" className="flex flex-col bg-white dark:bg-midnight p-5 rounded-md">
      <h1 data-testid="task-form-title">{formTitle}</h1>
      <form>
        <span data-testid="task-form-title-input" className="flex flex-col ">
          <label htmlFor="titleInput">Title</label>
          <input 
            data-testid="new-task-title" 
            type="text" 
            name="titleInput" 
            placeholder="e.g. Take a coffe break" 
            defaultValue={title}/>
        </span>
        <span data-testid="task-form-description-textarea" className="flex flex-col">
          <label htmlFor="descriptionInput">Description</label>
          <textarea name="descriptionInput" placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little.">{description}</textarea>
        </span>
      </form>
     
      <div data-testid="task-form-subtasks-container">
        <h1>Subtasks</h1>
        {subtasks?.map(subtask=> {
          return(
            <div data-testid="task-form-subtask-input">
              <input data-testid="subtask-input" type="text" placeholder="Subtask Title" defaultValue={subtask.title}/>
              <IconButton>
                <ClearIcon />
              </IconButton>
            </div>
          )
        })}
      </div>
      <PrimaryButton buttonText="+ Add new subtask" color="white" handleClick={createNewSubtaskInput}/>
      <span data-testid="task-form-status-select" className="flex flex-col">
        <h1>Status</h1>
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