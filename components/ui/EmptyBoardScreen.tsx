import { EmptyBoardScreenProps } from "../../typings/interfaces"
import AddNewTaskButton from "./AddNewTaskButton"

const EmptyBoardScreen = ({type}: EmptyBoardScreenProps)=> {
  return(
    <div className="flex justify-center items-center w-full h-full bg-transparent">
      <h3 
        data-testid="columns-empty-screen" 
        className="bg-transparent text-grey dark:text-grey-400"
      >
        {type === 'board' ? 'Create a board to get started' : 'This board is empty. Create a new column to get started.'}
      </h3>
      <AddNewTaskButton />
    </div>
  )
}

export default EmptyBoardScreen