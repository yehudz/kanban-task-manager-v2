import { Subtask } from "../../typings/common.types"
import styles from '../../styles/reusables/SubtaskItem.module.scss'
const SubtaskItem = ({title, isCompleted}: Subtask)=> {
  return(
    <div data-testid="subtask-item" className={`${styles.container} flex flex-row items-center bg-grey-200 dark:bg-midnight p-6 mt-3 form-check`}>
      <input type="checkbox" defaultChecked={isCompleted ? true : false} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple checked:border-purple focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
      <div className={`${isCompleted ? 'text-grey-400 line-through' : ''} text-grey dark:text-white`}>{title}</div>
    </div>
  )
}

export default SubtaskItem