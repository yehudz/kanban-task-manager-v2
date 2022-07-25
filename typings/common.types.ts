export type Board = {
  name: string
  columns: BoardColumn[]
}

export type BoardColumn = {
  id?: string
  name: string
  tasks: TaskItem[]
  createdAt?: Date
  updatedAt?: Date
}

export type TaskItem = {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  title: string
  description: string | null
  status: string | null
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