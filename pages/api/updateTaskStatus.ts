import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({message: "Method not allowed"})
  }

  const {id, columnId, status} = JSON.parse(req.body)
  await prisma.task.update({
    where: {
      id: id
    },
    data: {
      columnId: columnId,
      status: status
    }
  })
  res.status(200).json({message: 'Board Created'})
  
}