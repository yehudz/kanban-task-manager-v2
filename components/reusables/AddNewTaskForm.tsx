import PrimaryButton from "../ui/PrimaryButton"
import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from "@mui/material";
import { useState } from "react";
const AddNewTaskForm = ()=> {

  const [subtaskInputs, setSubtaskInputs] = useState([
        {placeholder: "e.g. Make Coffee"},
        {placeholder: "e.g. Drike coffee & smile"}
    ])

  function createNewSubtaskInput() {
    setSubtaskInputs((prevInputs)=> [...prevInputs, {placeholder: "e.g. Do more stuff"}])
  }

  function createNewTask() {
    // Todo add database functionality
  }

  return(
    <div data-testid="add-task-form" className="flex flex-col bg-white dark:bg-midnight p-5 rounded-md">
      <h1 data-testid="add-new-task-form-title">Add New Task</h1>
      <form>
        <span data-testid="add-new-task-form-title-input" className="flex flex-col ">
          <label htmlFor="titleInput">Title</label>
          <input type="text" name="titleInput" placeholder="e.g. Take a coffe break"/>
        </span>
        <span data-testid="add-new-task-form-description-textarea" className="flex flex-col">
          <label htmlFor="descriptionInput">Description</label>
          <textarea name="descriptionInput" placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."></textarea>
        </span>
      </form>
     
      <div data-testid="add-new-task-form-subtasks-container">
        <h1>Subtasks</h1>
        {subtaskInputs.map(subtaskInput=> {
          return(
            <div data-testid="add-new-task-form-subtask-input">
              <input type="text" placeholder={subtaskInput.placeholder}/>
              <IconButton>
                <ClearIcon />
              </IconButton>
            </div>
          )
        })}
      </div>
      <PrimaryButton buttonText="+ Add new subtask" color="white" handleClick={createNewSubtaskInput}/>
      <span data-testid="add-new-task-form-status-select" className="flex flex-col">
        <h1>Status</h1>
        <select name="statusSelect" id="statusSelect">
          <option value="Todo">Todo</option>
        </select>
      </span>
      <PrimaryButton buttonText="Create Task" color="primary" handleClick={createNewTask}/>
    </div>
  )
}

export default AddNewTaskForm