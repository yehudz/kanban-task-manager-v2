import { useContext, useState } from "react"

// Component imports
import TaskDetailsForm from '../reusables/TaskDetailsForm'
import TaskForm from '../reusables/TaskForm'
import BoardForm from '../reusables/BoardForm'
import WarningMessage from '../reusables/WarningMessage'
import CreateColumnForm from '../reusables/CreateColumnForm'

import {AppContext} from "../../context/AppContext"

const ModalContent = ()=> {

  const {modalContentType, board, taskDetails, setOpenMobileMenu} = useContext(AppContext)
  switch(modalContentType) {
    case "ADD_NEW_TASK": 
      return <TaskForm 
                id=""
                formTitle="Create New Task"
                title=""
                description=""
                selectedStatus={''}
                order={board?.columns?.tasks ? board?.columns.tasks.length + 1 : 1}
                buttonText='Create Task'
                subtasks={[]}
                board_column_id={taskDetails.board_column_id }
              />
    case "TASK_DETAILS":
      return <TaskDetailsForm 
                id={taskDetails.id}
                formTitle="Create New Task"
                title={taskDetails?.title} 
                description={taskDetails?.description}
                subtasks={taskDetails?.subtasks}
                buttonText=""
                order={0}
                board_column_id={taskDetails.board_column_id }
              />
    case "CREATE_NEW_BOARD":
      setOpenMobileMenu(false)
      return <BoardForm 
                formTitle='Add New Board'
                boardName=''
                boardColumns={[]}
              />
    case "EDIT_TASK": 
      return <TaskForm 
                id={taskDetails.id}
                formTitle="Edit Task"
                title={taskDetails?.title} 
                description={taskDetails?.description}
                selectedStatus={taskDetails?.status}
                subtasks={taskDetails?.subtasks}
                buttonText='Save Changes'
                order={0}
              />
    case "EDIT_BOARD":
      return <BoardForm 
                formTitle='Edit Board'
                boardName={board?.name}
                boardColumns={board?.columns}
              />
    case "DELETE_TASK": 
      return <WarningMessage 
                id={taskDetails.id}
                title="Delete this task?"
                itemName={taskDetails?.title}
                type="task"
              />
    case "DELETE_BOARD": 
      return <WarningMessage 
              id={board.id}
              title="Delete this board?"
              itemName={board?.name}
              type="board"
            />
    case "ADD_COLUMN":
      return <CreateColumnForm />
    default:
      return null
  }
}

export default ModalContent