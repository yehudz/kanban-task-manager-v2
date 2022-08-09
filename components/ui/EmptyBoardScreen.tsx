import { EmptyBoardScreenProps } from "../../typings/interfaces"
import AddNewButton from "./AddNewButton"

const EmptyBoardScreen = ({type}: EmptyBoardScreenProps)=> {

  const ButtonType = (): JSX.Element=> {
    if (!type) return <></>
    if (type === 'board') {
      return <AddNewButton buttonText="Create New Board" contentType="create-new-board"/>
    }
    else if (type === 'column') {
      return <AddNewButton buttonText="Add New Column" contentType="add-new-column"/>
    } else return <></>
  }
  if (type) {
    return(
      <div className="flex flex-col justify-center items-center w-full h-full bg-transparent">
        <h3 
          data-testid="columns-empty-screen" 
          className="bg-transparent text-grey dark:text-grey-400 mb-8"
        >
          {type === 'board' ? 'Create a board to get started' : 'This board is empty. Create a new column to get started.'}
        </h3>
        
        <ButtonType />
      </div>
    )
  } else {
    return <></>
  }
}

export default EmptyBoardScreen