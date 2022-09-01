import { createContext, useState } from "react";
import type { Board } from "../typings/common.types";
import type { BoardContextValues } from "../typings/context.types";

export const BoardsContext = createContext<BoardContextValues | null>(null)

interface BoardsContextProps {
  children: JSX.Element
}

const BoardsContextProvider: 
React.FC<BoardsContextProps> = (
  {
    children
  })=> {

  const [boardsList, setBoardsList] = useState<Board[]>([])

  let values = {
    boardsList,
    setBoardsList
  }

  return(
    <BoardsContext.Provider value={values}>
      {children}
    </BoardsContext.Provider>
  )
}
export default BoardsContextProvider