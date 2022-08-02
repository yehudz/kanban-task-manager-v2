export type Board = {
  name: string
  columns: BoardColumn[]
}

export type BoardColumn = {
  id?: string
  name: string
  color: string
  tasks: TaskItem[]
  createdAt?: Date
  updatedAt?: Date
  placeholder?: string
}

export type TaskItem = {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  title: string
  description: string | null
  status: BoardColumn[]
  selectedStatus: string
  columnId?: string
  subtaskId?: string
  subtasks?: Subtask[]
}

export type Subtask = {
  id?: string
  title: string
  isCompleted: boolean
  taskId?: string
}

export type BoardListItem = {
  title: string
  active: boolean
}