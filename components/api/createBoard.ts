import { Board } from "../../typings/common.types"

// Makes API call to save the form to DB
export default async function (params: Board) {
  const res = await fetch('http://localhost:3001/api/v2/boards', {
    method: 'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(params)
  })  
  return await res.json()
}