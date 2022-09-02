export default async function getBoardData() {
  const res = await fetch('http://localhost:3001/api/v2/boards', {
    method: "GET"
  })
  let result = await res.json()
  return result
}