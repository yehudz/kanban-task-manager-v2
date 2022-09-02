import styles from '../../styles/reusables/FormContainer.module.scss'
import {AppContext} from '../../context/AppContext'
import { useContext, useEffect, useState } from 'react'
import randomColor from '../../utils/randomColor'
import Input from '../ui/Input'
import { AppContextType, BoardContextValues, ColumnContextValues } from '../../typings/context.types'
import { BoardsContext } from '../../context/BoardsContext'
import { ColumnsContext } from '../../context/ColumnsContext';
import createBoardColumn from '../api/createBoardColumn'
const CreateColumnForm = ()=> {
  const {
    setModalVisibility, 
  } = useContext(AppContext) as AppContextType

  const {
    boardId, 
  } = useContext(BoardsContext) as BoardContextValues

  const {
    columns,
    setColumns
  } = useContext(ColumnsContext) as ColumnContextValues
  const [createResource, setCreateResource] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  async function saveColumnToDB() {
    let params = {
      id: '',
      boardId: boardId,
      name: value,
      color: randomColor(),
      order: columns.length + 1
    }

    const res = await createBoardColumn(params)
    if (res) {
      setColumns([...columns, params])
      setModalVisibility(false)
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

export default CreateColumnForm