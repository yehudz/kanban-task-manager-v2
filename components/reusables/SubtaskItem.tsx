import { Subtask } from "../../typings/common.types"
import styles from '../../styles/reusables/SubtaskItem.module.scss'
const SubtaskItem = ({title, isCompleted}: Subtask)=> {
  return(
    <div data-testid="subtask-item" className={`${styles.container} flex flex-row items-center bg-white dark:bg-midnight`}>
      <input type="checkbox" checked={isCompleted ? true : false} className="mr-6"/>
      <div>{title}</div>
    </div>
  )
}

export default SubtaskItem