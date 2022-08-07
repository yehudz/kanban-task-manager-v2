import { Subtask } from "../../typings/common.types"
import styles from '../../styles/reusables/SubtaskItem.module.scss'
import appContext from "../../context/appContext"
import { useContext, useState } from "react"
const SubtaskItem = ({id, title, isCompleted}: Subtask)=> {
  const {setNewTaskCreated} = useContext(appContext)
  const [isChecked, setIsChecked] = useState<boolean>(isCompleted)
  async function handleCompleted(e: React.ChangeEvent<HTMLInputElement>) {
    let checked = e.currentTarget.checked
    setIsChecked(checked)
    let params = {
      subtaskId: id,
      isCompleted: checked
    }

    let res = await fetch(`/api/subtaskCompleted`, {
      method: "POST",
      body: JSON.stringify(params)
    })
    if (res.status === 200) {
      setNewTaskCreated(true)
    } else alert('Something went wrong')
  }

  return(
    <div data-testid="subtask-item" className={`${styles.container} flex flex-row items-center bg-grey-200 dark:bg-midnight p-6 mt-3 form-check`}>
      <input onChange={handleCompleted} type="checkbox" defaultChecked={isChecked ? true : false} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple checked:border-purple focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
      <div className={`${isChecked ? 'text-grey-400 line-through' : ''} text-grey dark:text-white`}>{title}</div>
    </div>
  )
}

export default SubtaskItem