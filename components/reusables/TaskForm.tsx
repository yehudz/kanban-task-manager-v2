import PrimaryButton from "../ui/PrimaryButton"
import { IconButton } from "@mui/material";
import { useContext, useEffect, useState, useRef } from "react";
import { TaskFormProps } from "../../typings/interfaces";
import { BoardColumn, Subtask, TaskParams } from "../../typings/common.types";
import appContext from "../../context/appContext";
import Input from "../ui/Input";
import styles from '../../styles/reusables/FormContainer.module.scss';
import Textarea from "../ui/Textarea";
import Dropdown from '../ui/Dropdown';
import { useRouter } from "next/router";

const TaskForm = (
  {
    formTitle, 
    title, 
    description, 
    selectedStatus, 
    status, 
    subtasks, 
    buttonText,
    boardColumns
  }: TaskFormProps)=> {
  const {setModalVisibility, boardId, setNewTaskCreated} = useContext(appContext)
  const [createResource, setCreateResource] = useState<boolean>(false)
  const [taskTitle, setTaskTitle] = useState<string>('')
  const [taskDescription, setTaskDescription] = useState<string>('')
  const [subtaskValue, setSubtaskValue] = useState<string>('')
  const [taskStatus, setTaskStatus] = useState<string>(selectedStatus ? selectedStatus : '')
  const [subtaskInputs, setSubtaskInputs] = useState([
        {placeholder: "e.g. Make Coffee"},
        {placeholder: "e.g. Drike coffee & smile"}
    ])
  const [subtaskValues, setSubtaskValues] = useState<Subtask[]>([])
  const subtasksContainer = useRef()
  const [selectedColumn, setSelectedColumn] = useState<BoardColumn>()

  // Creates empty inputs for subtasks
  function createNewSubtaskInput() {
    setSubtaskInputs((prevInputs)=> [...prevInputs, {placeholder: "e.g. Do more stuff"}])
  }

  // Gets all values from all subtasks inputs
  function getSubtasksInputValues() {
    if (subtasksContainer.current) {
      let target = subtasksContainer.current as HTMLElement
      let inputs = Array.from(target.querySelectorAll('input'))
      setSubtaskValues(inputs.map((input: any)=> {return {title: input.value, isCompleted: false}}))
    }
  }

  function createNewTask() {
    getSubtasksInputValues()
    setCreateResource(true)
  }

  async function saveTaskToDB(params: TaskParams) {
    let res = await fetch(`/api/createTask`, {
      body: JSON.stringify(params),
      method: 'POST'
    })
    if (res.status === 200) {
      setModalVisibility(false)
      setNewTaskCreated(true)
    }
    else alert('Something went wrong')
  }

  useEffect(()=> {
    if (createResource) {
      let params = {
        columnId: selectedColumn ? selectedColumn.id : boardColumns[0].id,
        title: taskTitle,
        description: taskDescription,
        subtasks: subtaskValues,
        status: taskStatus ? taskStatus : status[0].name
      }
      saveTaskToDB(params)
    }
  }, [createResource])

  // Sets the column to add tasks to
  useEffect(()=> {
    let selectedColum = boardColumns.filter(column=> taskStatus === column.name)
    setSelectedColumn(selectedColum[0])
  }, [taskStatus])

  useEffect(()=> {
    if (subtasks) setSubtaskInputs([])
  }, [])

  return(
    <div data-testid="task-form" className={`${styles.container} flex flex-col bg-white dark:bg-grey pt-12 pb-8 px-12 rounded-md`}>
      <h3 data-testid="task-form-title" className="text-grey dark:text-white">{formTitle}</h3>
      <form>
        <span data-testid="task-form-title-input" className="flex flex-col mt-6">
          <Input 
            testId="task-title-input"
            labelText="Title"
            name="titleInput"
            placeholder="e.g. Take a coffee break"
            defaultValue={title}
            setValue={setTaskTitle}
            createResource={createResource}
          />
        </span>
        <span data-testid="task-form-description-textarea" className="flex flex-col mt-8">
          <label htmlFor="descriptionInput" className="text-grey-400 dark:text-white">Description</label>
          <Textarea 
            placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
            name="descriptionTextarea"
            defaultValue={description?.toString()}
            setValue={setTaskDescription}
            createResource={true}
          />
        </span>
      </form>
     
      <div data-testid="task-form-subtasks-container" className="mt-8">
        <div  className="text-grey-400 dark:text-white">Subtasks</div>
        <div ref={subtasksContainer}>
          {subtasks?.map(subtask=> {
            return(
              <div data-testid="task-form-subtask-input" className="flex flex-row items-center">
                <Input 
                  testId="subtask-input"
                  placeholder="Subtask Title"
                  defaultValue={subtask.title}
                  name="subtask-input"
                  setValue={setSubtaskValue}
                  createResource={createResource}
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
                  setValue={setSubtaskValue}
                  createResource={createResource}
                />
                <IconButton sx={{color: '#fff', paddingRight: 0, paddingLeft: 2, paddingTop: 2}}>
                  <img src="/images/icon-cross.svg" alt="" />
                </IconButton>
              </div>
            )
          })}
        </div>
      </div>
      <PrimaryButton buttonText="+ Add new subtask" color="white" handleClick={createNewSubtaskInput}/>
      <span data-testid="task-form-status-select" className="flex flex-col">
        <div className="font-bold mb-4">Status</div>
        <Dropdown 
          status={status} 
          selectedStatus={selectedStatus}
          setTaskStatus={setTaskStatus}
        />
      </span>
      <PrimaryButton buttonText={buttonText} color="primary" handleClick={createNewTask}/>
    </div>
  )
}

export default TaskForm