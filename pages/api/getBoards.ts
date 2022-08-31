const getBoards = async ()=> {
  const res = await fetch('https://kanbantaskmanagerbackendapi.herokuapp.com/api/v2/boards', {
    method: "GET"
  })
  const result = await res.json()
  return result
}