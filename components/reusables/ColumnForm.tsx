import styles from '../../styles/reusables/FormContainer.module.scss'
import appContext from '../../context/appContext'
import { useContext } from 'react'
import Input from '../ui/Input'
const ColumnForm = ()=> {
  const {setModalVisibility} = useContext(appContext)
  function handleClick() {
    setModalVisibility(false)
  }

  return(
    <div 
      data-testid="add-column-form" 
      className={`${styles.container} flex flex-col bg-white dark:bg-grey pt-12 pb-8 px-12 rounded-md`}
    >
      <h3>Add Column</h3>
      <Input 
        testId='add-column-input'
        placeholder='e.g. To do'
        name="columnName"
      />
      <div className='flex flex-col sm:flex-row items-center justify-center mt-6 gap-3'>
        <button onClick={handleClick} data-testid="add-column-confirm" type="button" className="py-3 w-full mb-3 sm:mb-0 rounded-full bg-purple hover:bg-purple-light">Create Column</button>
        <button data-testid="warning-message-cancel-button" type="button" className="py-3 w-full rounded-full bg-white hover:bg-white text-purple">Cancel</button>
      </div>
    </div>
  )
}

export default ColumnForm