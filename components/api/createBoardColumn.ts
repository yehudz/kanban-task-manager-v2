import { BoardColumn } from "../../typings/common.types";

export default async function(params: BoardColumn) {
  const res = await fetch(`http://localhost:3001/api/v2/boardColumns/`, {
    method: "POST",
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(params)
  })
  return await res.json()
}