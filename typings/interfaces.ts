import { Board, TaskItem, BoardColumn } from "./common.types"

export interface TopBarProps {
  boardName: string
  boardColumnsCount: number
}

export interface BoardColumnsProps {
  board: Board
}

export interface BoardColumnProps {
  name: string
  color?: string
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
  formTitle: string
  buttonText: string
  selectedStatus?: BoardColumn[] | string
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
  name: string
  active: boolean
}

export interface InputProps {
  placeholder: string | undefined
  labelText?: string
  name: string
  defaultValue?: string
  testId?: string
  createBoard: boolean
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

export interface DropdownProps {
  status: BoardColumn[]
  selectedStatus?: BoardColumn[] | string
}

export interface EmptyBoardScreenProps {
  type?: string
}

export interface AddNewButtonProps {
  disabled?: boolean
  buttonText: string
  contentType: string
}