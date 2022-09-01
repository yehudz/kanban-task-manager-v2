import { GetServerSideProps } from 'next'
import { BoardColumnProps } from "../../typings/interfaces"
import BoardColumnTaskItem from "./BoardColumnTaskItem"
import styles from '../../styles/reusables/BoardColumn.module.scss'
import { useContext, useEffect, useState } from "react"
import { TaskItem } from '../../typings/common.types'
import {AppContext} from '../../context/AppContext'
const BoardColumn = (
  {
    id, 
    name, 
    color
  }: BoardColumnProps)=> {
  const {
      newTaskCreated, 
      setNewTaskCreated,
      updatedTask,
      setUpdatedTask
    } = useContext(AppContext)
  const [tasks, setTasks] = useState<TaskItem[]>([])
  async function getAllTasks() {
    let res = await fetch(`http://localhost:3001/api/v2/tasks/${id}`, {
      method: "GET",
    })

    let result = await res.json()
    setTasks(result)
    setNewTaskCreated(false)
    setUpdatedTask(false)
  }
  useEffect(()=> {
    getAllTasks()
  }, [newTaskCreated, updatedTask])
  return(
    <div 
      data-testid="board-column-container" 
      className={`
        ${styles.container} 
        h-full 
        mb-3
      `
    }>
      <div className="flex flex-row">
        <div 
          className={`
            ${styles.badge} 
            mr-4
          `} 
          style={{backgroundColor: color}}
        >
        </div>
        <div 
          data-testid="board-column-title" 
          className={`
            ${styles.title} 
            text-grey-400 
            font-bold
          `}
        >
          {name} ({tasks?.length})
        </div>
      </div>
        {tasks && <div className="flex flex-col">
          {tasks?.map((task)=> {
            return(
              <BoardColumnTaskItem
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                order={task.order}
                board_column_id={task.board_column_id}
              />
            )
          })}
        </div>}
    </div>
  )
}

export default BoardColumn