import React, { useContext, useEffect, useRef, useState } from "react"
import PrimaryButton from "../ui/PrimaryButton";
import {AppContext} from '../../context/AppContext'
import {BoardFormProps} from '../../typings/interfaces'
import {Board, BoardColumn} from '../../typings/common.types'
import styles from '../../styles/reusables/FormContainer.module.scss'
import randomColor from "../utils/randomColor";
// Reusable Component imports
import Input from "../ui/Input";
import { IconButton } from "@mui/material";

const BoardForm = ({formTitle, boardName, boardColumns}: BoardFormProps)=> {
  const {
      setModalVisibility, 
      setNewCreatedBoard, 
      boardId
    } = useContext(AppContext) 

  const [
    boardNameValue, 
    setBoardNameValue
  ] = useState<string>(boardName? boardName : '')
  const [
    emptyBoardColumns, 
    setEmptyBoardColumns
  ] = useState<BoardColumn[]>([
    {
      id: '', 
      name: '', 
      color: '', 
      placeholder: 'e.g. To do', 
      order: 1, 
      tasks: []
    }
  ])
  const [
    boardColumnName, 
    setBoardColumnName
  ] = useState<string>('')
  const [columns, setColumns] = useState<BoardColumn[]>([])
  const [createResource, setCreateBoard] = useState<boolean>(false)
  const [type, setType] = useState<string>('')

  const inputsContainer = useRef()
  // Shows the empty screen if there are no columns in the board
  useEffect(()=> {
    if (formTitle.includes('Edit')) setType('edit')
    else setType('create')
    if (boardColumns.length) setEmptyBoardColumns(boardColumns)
    return ()=> {setCreateBoard(false)}
  }, [])

  // This we need for editing the board
  useEffect(()=> {
    if (type === 'edit') setColumns(emptyBoardColumns)
  }, [emptyBoardColumns])

  // Generates the params for API call
  useEffect(()=> {
    //  Returns if no values are set
    if (createResource) {
      // this we only need when editing
      if (inputsContainer.current && type === 'edit') {
        let target = inputsContainer.current as HTMLDivElement
        let inputs = target.querySelectorAll('input')
        inputs.forEach((input: HTMLInputElement, idx: number)=> {
          columns[idx].name = input.value
        })
      }
      let params = {
        id: boardId,
        name: boardNameValue,
        columns: columns
      }
      boardNameToDB(params)
    }
  }, [createResource, columns])

  // Add new input field for new column
  function addNewColumnField(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    let color = randomColor()
    event.preventDefault()
    setColumns(prevColumns=> [...prevColumns, 
      {
        name: boardColumnName, 
        order: prevColumns.length + 1, 
        color: color
      }
    ])
    setEmptyBoardColumns(prevColumns=> [...prevColumns, 
      {
        name: '', 
        color: '', 
        placeholder: 'e.g. Enter column title', 
        order: 1, 
        tasks: []
      }
    ])
    setBoardColumnName('')
  }

  // Summits the form and sets to be ready for saving to DB
  function submitForm(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    setCreateBoard(true)
    if (!boardNameValue || !boardColumnName) return // Returns if no values are set
    // This we need for when creating a new board
    let color = randomColor()
    setColumns(prevColumns => [...prevColumns, 
      {
        name: boardColumnName, 
        order: prevColumns.length+1,
        color: color
      }
    ])
  }

  // Makes API call to save the form to DB
  async function boardNameToDB(params: Board) {
    let route = type === 'create' ? 'createBoard' : 'editBoard'
    let res = await fetch(`/api/${route}`, {
      body: JSON.stringify(params),
      method: 'POST'
    })
    if (res.status === 200) {
      setNewCreatedBoard(true)
      setModalVisibility(false)
    }
    else alert('Something went wrong')
  }

  return(
    <form 
      data-testid="add-new-board-form" 
      className={`
        ${styles.container} 
        flex 
        flex-col 
        bg-white 
        dark:bg-grey 
        pt-12 
        pb-8 
        px-12 
        rounded-lg
      `}
    >
      <h2 
        data-testid="add-new-board-form-title" 
        className="
          text-grey 
          dark:text-white
        "
      >
        {formTitle}
      </h2>
      <span 
        data-testid="add-new-board-form-title-input" 
        className="
          flex 
          flex-col 
          mb-8 
          mt-8
        "
      >
        <Input 
          testId="board-title-input"
          placeholder="e.g. Web Design"
          labelText="Board Name"
          name="boardTitle"
          defaultValue={boardName}
          setValue={setBoardNameValue}
          createResource={createResource}

        />
      </span>
      <div 
        data-testid="add-new-board-form-columns-creator" 
        className="flex flex-col"
      >
        <h4 
          className="
            text-grey-400 
            dark:text-white
          "
        >
          Board Columns
        </h4>
        <div ref={inputsContainer}>
          {emptyBoardColumns.map((column: BoardColumn, index)=> {
            return(
              <div 
                key={index} 
                data-tesid="add-new-board-form-column" 
                className="
                  flex 
                  flex-row 
                  items-center
                "
              >
                <Input 
                  testId="column-name-input"
                  placeholder={column.placeholder}
                  defaultValue={column.name}
                  name="boardTitle"
                  setValue={setBoardColumnName}
                  createResource={createResource}
                />  
                <IconButton sx={
                  {
                    color: '#fff', 
                    paddingRight: 0, 
                    paddingLeft: 2, 
                    paddingTop: 2
                  }
                }>
                  <img src="/images/icon-cross.svg" alt="" />
                </IconButton>
              </div>
            )
          })}
        </div>
        <PrimaryButton 
          buttonText="+ Add New Column" 
          color="white" 
          handleClick={addNewColumnField}
        />
      </div>
      <PrimaryButton 
        buttonText="Create Board" 
        color="primary" 
        handleClick={submitForm}
      />
    </form>
  )
}

export default BoardForm