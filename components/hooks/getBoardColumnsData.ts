export default async function getBoardColumnsData(boardId: string) {
  const boardColumns = await fetch(`
    http://localhost:3001/api/v2/boardColumns/${boardId}
  `)
  const results = await boardColumns.json()

  type DataNeeded = {
    id: string,
    name: string,
    color: string
  }

  const dataNeeded = results.map((result: DataNeeded)=> {
    return {
        id: result.id,
        name: result.name,
        color: result.color
    }
  })

  return dataNeeded
}