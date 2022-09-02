export default async function getSubtasks(id: string) {
  const res = await fetch(`http://localhost:3001/api/v2/subtasks/${id}`)
  const result = await res.json()
  return result
}