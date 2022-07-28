import styles from '../../styles/reusables/FormContainer.module.scss'
import appContext from '../../context/appContext'
import { useContext } from 'react'
const ColumnForm = ()=> {
  const {setModalVisibility} = useContext(appContext)
  function handleClick() {
    setModalVisibility(false)
  }

  return(
    <div 
      data-testid="add-column-form" 
      className={`${styles.container} flex flex-col bg-white dark:bg-midnight rounded-md`}
    >
      <h3>Add Column</h3>
      <input data-testid="add-column-input" type="text" placeholder='e.g. To do' className='mt-6 mb-6 p-3 rounded-lg'/>
      <div className='flex flex-row items-center justify-center'>
        <button onClick={handleClick} data-testid="add-column-confirm" type="button" className="py-3 w-60 mr-6 rounded-full bg-purple hover:bg-purple-light">Create Column</button>
        <button data-testid="warning-message-cancel-button" type="button" className="py-3 w-60 rounded-full bg-white hover:bg-white text-purple">Cancel</button>
      </div>
    </div>
  )
}

export default ColumnForm