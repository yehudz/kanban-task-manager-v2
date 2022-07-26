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

export interface BoardTitleProps {
  title: string
  isMobile: boolean
  handleClick(): void
}

export interface PrimaryButtonProps {
  buttonText: string
  color: string
  handleClick?: ()=> void
}