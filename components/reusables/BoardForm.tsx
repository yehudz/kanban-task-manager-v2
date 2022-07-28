import React, { useContext, useEffect, useState } from "react"
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import PrimaryButton from "../ui/PrimaryButton";
import appContext from '../../context/appContext'
import {BoardFormProps} from '../../typings/interfaces'
import {BoardColumn} from '../../typings/common.types'

const BoardForm = ({formTitle, boardName, boardColumns}: BoardFormProps)=> {
  const {setModalVisibility} = useContext(appContext)
  const [emptyBoardColumns, emptySetBoardColumns] = useState<BoardColumn[]>([{name: '', color: '', placeholder: 'e.g. To do', tasks: []}])
  useEffect(()=> {
    if (boardColumns.length) emptySetBoardColumns(boardColumns)
  }, [])
  function addNewColumnField(event: React.MouseEvent<HTMLButtonElement>){
    event.preventDefault()
    emptySetBoardColumns(prevColumns=> [...prevColumns, {name: '', color: '', placeholder: 'e.g. Enter column title', tasks: []}])
  }

  function submitForm(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    // todo save changes to database
    setModalVisibility(false)
  }
  return(
    <form data-testid="add-new-board-form" className="flex flex-col bg-white dark:bg-midnight p-5 rounded-md">
      <div data-testid="add-new-board-form-title">{formTitle}</div>
      <span data-testid="add-new-board-form-title-input" className="flex flex-col">
        <label htmlFor="boardTitle">Board Name</label>
        <input 
          data-testid="board-title-input" 
          name="boardTitle" 
          type="text" 
          placeholder="e.g. Web Design" 
          defaultValue={boardName}/>
      </span>
      <div data-testid="add-new-board-form-columns-creator" className="flex flex-col">
        <h1>Board Columns</h1>
        {emptyBoardColumns.map((column: BoardColumn)=> {
          return(
            <div key={column.name} data-tesid="add-new-board-form-column" className="flex flex-row items-center">
              <input 
                data-testid="column-name-input" 
                name="boardTitle" 
                type="text" 
                defaultValue={column.name} 
                placeholder={column.placeholder}/>
              <ClearOutlinedIcon />
            </div>
          )
        })}
        <PrimaryButton buttonText="+ Add New Column" color="white" handleClick={addNewColumnField}/>
      </div>
      <PrimaryButton buttonText="Create Board" color="primary" handleClick={submitForm}/>
    </form>
  )
}

export default BoardForm