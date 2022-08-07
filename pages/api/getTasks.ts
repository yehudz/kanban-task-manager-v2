import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({message: "Method not allowed"})
  }

  const {columnId} = JSON.parse(req.body);
  const tasks = await prisma.task.findMany({
    where: {
      columnId: columnId
    },
    include: {
      subtasks: true
    }
  })
  res.status(200).json({tasks: tasks})
}