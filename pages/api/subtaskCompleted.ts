import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({message: "Method not allowed"})
  }
  const {subtaskId, isCompleted} = JSON.parse(req.body)
  await prisma.subtask.update({
    where: {
      id: subtaskId
    },
    data: {
      isCompleted: isCompleted
    }
  })
  res.status(200).json({message: 'Task Created'})
  
}