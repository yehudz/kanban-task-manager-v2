import styles from '../../styles/reusables/FormContainer.module.scss'
import appContext from '../../context/appContext'
import { useContext, useEffect, useState } from 'react'
import randomColor from '../utils/randomColor'
import Input from '../ui/Input'
const ColumnForm = ()=> {
  const {setModalVisibility, boardId, setColumnAdded, board} = useContext(appContext)
  const [createResource, setCreateResource] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  async function saveColumnToDB() {
    let params = {
      boardId: boardId,
      columnName: value,
      columnColor: randomColor(),
      order: board.columns.length + 1
    }
    const res = await fetch(`/api/createBoardColumn`, {
      method: "POST",
      body: JSON.stringify(params)
    })
    if (res.status === 200) {
      setColumnAdded(true)
      setModalVisibility(false)
    } else {
      alert('Something when wrong')
    }
  }

  useEffect(()=> {
    if (createResource) {
      saveColumnToDB()
    }
  }, [createResource])

  function createColumn() {
    setCreateResource(true)
  }

  return(
    <div 
      data-testid="add-column-form" 
      className={`${styles.container} flex flex-col bg-white dark:bg-grey pt-12 pb-8 px-12 rounded-md`}
    >
      <h3 className='text-grey dark:text-white'>Add Column</h3>
      <Input 
        testId='add-column-input'
        placeholder='e.g. To do'
        name="columnName"
        setValue={setValue}
        createResource={createResource}
      />
      <div className='flex flex-col sm:flex-row items-center justify-center mt-6 gap-3'>
        <button onClick={createColumn} data-testid="add-column-confirm" type="button" className="py-3 w-full mb-3 sm:mb-0 rounded-full bg-purple hover:bg-purple-light">Create Column</button>
        <button onClick={()=> setModalVisibility(false)} data-testid="warning-message-cancel-button" type="button" className="py-3 w-full rounded-full bg-grey-200 hover:bg-white text-purple">Cancel</button>
      </div>
    </div>
  )
}

export default ColumnForm