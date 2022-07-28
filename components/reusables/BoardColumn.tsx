import { BoardColumnProps } from "../../typings/interfaces"
import BoardColumnTaskItem from "./BoardColumnTaskItem"
import styles from '../../styles/reusables/BoardColumn.module.scss'

const BoardColumn = ({name, tasks}: BoardColumnProps)=> {
  return(
    <div data-testid="board-column-container" className={`${styles.container} h-full mb-3`}>
      <div data-testid="board-column-title">{name}</div>
      <div className="flex flex-col">
        {tasks.map((task)=> {
          return(
            <BoardColumnTaskItem
              key={task.title} 
              title={task.title} 
              description={task.description} 
              status={task.status}
              subtasks={task.subtasks}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BoardColumn