import { createContext, useState } from "react";
import { BoardColumn } from "../typings/common.types";
import type { ColumnContextValues } from "../typings/context.types";

export const ColumnsContext = createContext<ColumnContextValues | null>(null)
interface ColumnsContextProps {
  children: JSX.Element[]
}

const ColumnsContextProvider: React.FC<ColumnsContextProps> = ({children})=> {
  const [columns, setColumns] = useState<BoardColumn[]>([])

  let values = {
    columns,
    setColumns
  }

  return(
    <ColumnsContext.Provider value={values}>
      {children}
    </ColumnsContext.Provider>
  )
}

export default ColumnsContextProvider