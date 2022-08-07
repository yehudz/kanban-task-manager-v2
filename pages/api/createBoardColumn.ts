import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({message: "Method not allowed"})
  }

  const {boardId, columnName, columnColor} = JSON.parse(req.body)
  const boards = await prisma.column.create({
    data: {
      boardId: boardId,
      name: columnName,
      color: columnColor,
      tasks: {
        createMany: {
          data: []
        }
      }
    }
    
  })
  res.status(200).json({boards: boards})
}