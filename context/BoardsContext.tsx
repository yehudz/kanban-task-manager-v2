import { createContext, useState, useEffect } from "react";
import getBoardData from "../components/hooks/getBoardData";
import type { Board } from "../typings/common.types";
import type { BoardContextValues } from "../typings/context.types";

export const BoardsContext = createContext<BoardContextValues | null>(null)

interface BoardsContextProps {
  children: JSX.Element[]
}

const BoardsContextProvider: 
React.FC<BoardsContextProps> = (
  {
    children
  })=> {
  const [board, setBoard] = useState<Board>({id: '', name: '', active: false})
  const [boardId, setBoardId] = useState<string>('')
  const [boardsList, setBoardsList] = useState<Board[]>([])
  const [selectedBoard, setSelectedBoard] = useState<number>(0)
  const [newCreatedBoard, setNewCreatedBoard] = useState<boolean>(false)

  let values = {
    board,
    setBoard,
    boardId,
    setBoardId,
    boardsList,
    setBoardsList,
    selectedBoard,
    setSelectedBoard,
    newCreatedBoard,
    setNewCreatedBoard
  }

   // Function to get all boards array
   async function getAllBoards() {
    const result = await getBoardData()
    setBoard(result[selectedBoard])
    setBoardId(result[selectedBoard].id)
    setBoardsList(result)
    setNewCreatedBoard(false)
    // setColumnAdded(false)
  }

  // Everytime the selected board changes 
  useEffect(()=> {
    getAllBoards()
  }, [selectedBoard, newCreatedBoard])

  return(
    <BoardsContext.Provider value={values}>
      {children}
    </BoardsContext.Provider>
  )
}
export default BoardsContextProvider