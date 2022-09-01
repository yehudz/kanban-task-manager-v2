import { Board, TaskDetails, TaskItem } from "./common.types";

export type AppContextType = {
  isMobile: boolean,
  setIsMobile: (isMobile: boolean)=> void
  openMobileMenu: boolean
  setOpenMobileMenu: (openMobileMenu: boolean)=> void
  modalVisibility: boolean
  setModalVisibility: (modalVisibility: boolean)=> void
  sidebarOpen: boolean
  setSidebarOpen: (sidebarOpen: (prevState: boolean) => boolean)=> void
  theme: string
  setTheme: (theme: string)=> void
  boardsCount: number
  setBoardsCount: (boardsCount: number)=> void
  taskDetails: TaskItem
  setTaskDetails: (taskDetails: TaskItem)=>void
  modalContentType: string | null
  setModalContentType: (modalContentType: string | null)=> void
  newTaskCreated: boolean
  setNewTaskCreated: (newTaskCreated: boolean)=> void
  newCreatedBoard: boolean
  setNewCreatedBoard: (newCreatedBoard: boolean)=> void
  columnAdded: boolean
  setColumnAdded: (columnAdded: boolean)=> void
  columnsCount: number
  setColumnsCount: (columnsCount: number)=> void
  updatedTask: boolean
  setUpdatedTask: (updatedTask: boolean)=> void
}

export type BoardContextValues = {
  board: Board
  setBoard: (board: Board)=> void
  boardId: string
  setBoardId: (boardId: string)=> void
  boardsList: Board[]
  setBoardsList: (boardList: Board[])=> void
  selectedBoard: number
  setSelectedBoard: (selectedBoard: number)=> void
}