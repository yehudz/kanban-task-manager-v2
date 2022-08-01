import React, { useContext, useEffect, useState } from "react"
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import PrimaryButton from "../ui/PrimaryButton";
import appContext from '../../context/appContext'
import {BoardFormProps} from '../../typings/interfaces'
import {BoardColumn} from '../../typings/common.types'
import styles from '../../styles/reusables/FormContainer.module.scss'

// Reusable Component imports
import Input from "../ui/Input";
import { IconButton } from "@mui/material";

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
    <form data-testid="add-new-board-form" className={`${styles.container} flex flex-col bg-white dark:bg-grey pt-12 pb-8 px-12 rounded-lg`}>
      <h2 data-testid="add-new-board-form-title">{formTitle}</h2>
      <span data-testid="add-new-board-form-title-input" className="flex flex-col mb-8 mt-8">
        <Input 
          testId="board-title-input"
          placeholder="e.g. Web Design"
          labelText="Board Name"
          inputName="boardTitle"
          inputDefaultValue={boardName}
        />
      </span>
      <div data-testid="add-new-board-form-columns-creator" className="flex flex-col">
        <h4 className="font-bold">Board Columns</h4>
        {emptyBoardColumns.map((column: BoardColumn)=> {
          return(
            <div key={column.name} data-tesid="add-new-board-form-column" className="flex flex-row items-center">
              <Input 
                testId="column-name-input"
                placeholder={column.placeholder}
                inputDefaultValue={column.name}
                inputName="boardTitle"
              />
              <IconButton sx={{color: '#fff', paddingRight: 0, paddingLeft: 2, paddingTop: 2}}>
                <img src="/images/icon-cross.svg" alt="" />
              </IconButton>
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