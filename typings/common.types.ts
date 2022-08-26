export type Board = {
  id: string
  name: string
  columns?: BoardColumn[]
}

export type BoardColumn = {
  id?: string
  name: string
  color: string
  order: number
  tasks?: TaskItem[]
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
  order: number
  selectedStatus?: string
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
  id: string
  name: string
  active: boolean
}

export type TaskParams = {
  title: string
  description?: string
  subtasks: Subtask[]
  status: string
}