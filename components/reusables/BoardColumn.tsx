import { GetServerSideProps } from 'next'
import { BoardColumnProps } from "../../typings/interfaces"
import BoardColumnTaskItem from "./BoardColumnTaskItem"
import styles from '../../styles/reusables/BoardColumn.module.scss'
import { useContext, useEffect, useState } from "react"
import { TaskItem } from '../../typings/common.types'
import appContext from '../../context/appContext'
const BoardColumn = ({id, name, color}: BoardColumnProps)=> {
  const {newTaskCreated, setNewTaskCreated} = useContext(appContext)
  const [tasks, setTasks] = useState<TaskItem[]>([])
  async function getAllTasks() {
    let getParams = {
      columnId: id
    }
    let res = await fetch(`/api/getTasks`, {
      method: "POST",
      body: JSON.stringify(getParams)
    })

    let result = await res.json()
    setTasks(result.tasks)
    setNewTaskCreated(false)
  }
  useEffect(()=> {
    getAllTasks()
  }, [newTaskCreated])
  return(
    <div data-testid="board-column-container" className={`${styles.container} h-full mb-3`}>
      <div className="flex flex-row">
        <div className={`${styles.badge} mr-4`} style={{backgroundColor: color}}></div>
        <div data-testid="board-column-title" className={`${styles.title} text-grey-400 font-bold`}>{name} ({tasks?.length})</div>
      </div>
        {tasks && <div className="flex flex-col">
          {tasks?.map((task)=> {
            return(
              <BoardColumnTaskItem
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                status={task.status}
                subtasks={task.subtasks}
              />
            )
          })}
        </div>}
    </div>
  )
}

export default BoardColumn