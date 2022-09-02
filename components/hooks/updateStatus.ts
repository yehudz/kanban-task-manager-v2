import { useEffect, useState } from "react";
import type { TaskDetails } from "../../typings/common.types";

export default async function useUpdatesStatus(taskDetails: TaskDetails) {
  const res = await fetch(`http://localhost:3001/api/v2/tasks/${taskDetails.id}`, {
      method: "PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(taskDetails)
    })
   return await res.json()
}