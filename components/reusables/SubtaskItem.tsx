import { Subtask } from "../../typings/common.types"
import styles from '../../styles/reusables/SubtaskItem.module.scss'
const SubtaskItem = ({title, isCompleted}: Subtask)=> {
  return(
    <div data-testid="subtask-item" className={`${styles.container} flex flex-row items-center bg-white dark:bg-midnight p-6 mt-3`}>
      <input type="checkbox" defaultChecked={isCompleted ? true : false} className="mr-6"/>
      <div className={`${isCompleted ? 'text-grey-400 line-through' : ''}`}>{title}</div>
    </div>
  )
}

export default SubtaskItem