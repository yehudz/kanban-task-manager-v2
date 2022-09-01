import { Board, TaskItem, BoardColumn, Subtask, TaskDetails } from "./common.types"

export interface TopBarProps {
  boardName: string
  boardColumnsCount: number
}

export interface BoardColumnsProps {
  board: Board
}

export interface BoardColumnProps {
  id: string
  name: string
  color?: string
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
  handleClick?:
  | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  | undefined;
}

export interface OptionsMenuButtonProps {
  handleClick:
  | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  | undefined;
  disabled?: boolean
}
export interface OptionMenuProps {
  menuItems: string[]
  disabled?: boolean
}

export interface TaskFormProps extends TaskItem {
  id: string
  formTitle: string
  buttonText: string
  subtasks: Subtask[]
  board_column_id: string
}

export interface BoardFormProps {
  formTitle: string
  boardName: string
  boardColumns: BoardColumn[]
}

export interface WarningMessageProps {
  id: string
  title: string
  itemName: string
  type: string
}

export interface SidebarMenuListItemProps {
  name: string
  active: boolean
  index: number
}

export interface InputProps {
  placeholder: string | undefined
  labelText?: string
  name: string
  defaultValue?: string
  testId?: string
  createResource: boolean
  setValue: (
    selectType: string,
    event:React.ChangeEvent<HTMLInputElement>
) => void;
}

export interface TextareaProps extends InputProps {}

export interface BoardItem {
  name: string
  color?: string
}

export interface EmptyBoardScreenProps {
  type: string
}

export interface AddNewButtonProps {
  disabled?: boolean
  buttonText: string
  contentType: string
}

export interface DropdownProps {
  taskDetails: TaskDetails
}

export interface AppContextProps {
  children: JSX.Element
}