type Board = {
  columns: BoardColumn[]
}

type BoardColumn = {
  id: string
  name: string
  tasks: TaskItem[]
  createdAt: Date
  updatedAt: Date
}

type TaskItem = {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  description: string | null
  status: string | null
  columnId: string
  subtaskId: string
  subtasks: Subtask[]
}

type Subtask = {
  id: string
  title: string
  isCompleted: boolean
  taskId: string
}