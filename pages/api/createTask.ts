import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({message: "Method not allowed"})
  }
  const {columnId, title, order, description, subtasks, status} = JSON.parse(req.body)
  await prisma.task.create({
   data: {
    columnId: columnId,
    title: title,
    order: order,
    description: description,
    subtasks: {
      createMany: {
        data: subtasks
      }
    },
    status: status
   }
  })
  res.status(200).json({message: 'Task Created'})
  
}