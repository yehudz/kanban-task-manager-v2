import { Board, TaskItem } from "./common.types"

export interface TopBarProps {
  boardName: string
}

export interface BoardColumnsProps {
  board: Board
}

export interface BoardColumnProps {
  name: string
  tasks: TaskItem[]
}