import { Board, TaskItem, BoardColumn } from "./common.types"

export interface TopBarProps {
  boardName: string
}

export interface BoardColumnsProps {
  board: Board
}

export interface BoardColumnProps {
  name: string
  color: string
  tasks: TaskItem[]
}

export interface BoardTitleProps {
  title: string
  isMobile: boolean
  handleClick:
  | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  | undefined;
}

export interface PrimaryButtonProps {
  buttonText: string
  color: string
  handleClick:
  | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  | undefined;
}

export interface OptionsMenuButtonProps {
  handleClick:
  | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  | undefined;
}
export interface OptionMenuProps {
  menuItems: string[]
}

export interface TaskFormProps extends TaskItem {
  formTitle: string
  buttonText: string
}

export interface BoardFormProps {
  formTitle: string
  boardName: string
  boardColumns: BoardColumn[]
}

export interface WarningMessageProps {
  title: string
  itemName: string
  type: string
}

export interface SidebarMenuListItemProps {
  title: string
  active: boolean
}

export interface InputProps {
  placeholder: string | undefined
  labelText?: string
  name: string
  defaultValue?: string
  testId?: string
}

export interface TextareaProps extends InputProps {}