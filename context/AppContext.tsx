import React, { createContext, useState } from 'react'
import type { AppContextType } from '../typings/context.types'
import type { Board, TaskItem } from '../typings/common.types'
import type { AppContextProps } from '../typings/interfaces'
export const AppContext = createContext<AppContextType | null>(null)

const AppContextProvider: 
React.FC<AppContextProps> = (
  {
    children
  })=> {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false)
  const [modalVisibility, setModalVisibility] = useState<boolean>(false)
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)
  const [theme, setTheme] = useState<string>('')
  const [boardsCount, setBoardsCount] = useState<number>(0)
  const [taskDetails, setTaskDetails] = useState<TaskItem>({
    id: '', board_column_id: '', title: '', description: '', order: 0
  })
  const [modalContentType, setModalContentType] = useState<string | null>('')
  const [newTaskCreated, setNewTaskCreated] = useState<boolean>(false)
  const [newCreatedBoard, setNewCreatedBoard] = useState<boolean>(false)
  const [columnAdded, setColumnAdded] = useState<boolean>(false)
  const [columnsCount, setColumnsCount] = useState<number>(0)
  const [updatedTask, setUpdatedTask] = useState<boolean>(false)

  let values = {
    isMobile,
    setIsMobile,
    openMobileMenu,
    setOpenMobileMenu,
    modalVisibility,
    setModalVisibility,
    sidebarOpen,
    setSidebarOpen,
    theme,
    setTheme,
    boardsCount,
    setBoardsCount,
    taskDetails,
    setTaskDetails,
    modalContentType,
    setModalContentType,
    newTaskCreated,
    setNewTaskCreated,
    newCreatedBoard,
    setNewCreatedBoard,
    columnAdded,
    setColumnAdded,
    columnsCount,
    setColumnsCount,
    updatedTask,
    setUpdatedTask
  }

  return(
    <AppContext.Provider 
      value={values}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider