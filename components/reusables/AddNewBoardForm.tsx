import { useState } from "react"
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import PrimaryButton from "../ui/PrimaryButton";
type Column = {
  placeholder: string
}


const AddNewBoardForm = ()=> {
  const [boardColumns, setBoardColumns] = useState<Column[]>([{placeholder: 'e.g. To do'}])
  function addNewColumnField() {
    setBoardColumns(prevColumns=> [...prevColumns, {placeholder: 'e.g. Enter column title'}])
  }

  function submitForm() {
    alert('Form submitted')
  }
  return(
    <form data-testid="add-new-board-form">
      <div data-testid="add-new-board-form-title">Add Board</div>
      <span data-testid="add-new-board-form-title-input" className="flex flex-col">
        <label htmlFor="boardTitle">Board Name</label>
        <input name="boardTitle" type="text" placeholder="e.g. Web Design"/>
      </span>
      <div data-testid="add-new-board-form-columns-creator" className="flex flex-col">
        <h1>Board Columns</h1>
        {boardColumns.map((column: Column)=> {
          return(
            <div data-tesid="add-new-board-form-column" className="flex flex-row items-center">
              <input name="boardTitle" type="text" placeholder={column.placeholder}/>
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

export default AddNewBoardForm