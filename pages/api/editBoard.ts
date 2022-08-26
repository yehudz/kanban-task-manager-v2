import type { NextApiRequest, NextApiResponse } from 'next';
import { BoardColumn } from '../../typings/common.types';
import prisma from '../../db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({message: "Method not allowed"})
  }

  const {id, name, columns} = JSON.parse(req.body)

  await prisma.board.update({
    where: {
      id: id
    },
    data: {
      name: name
    }
  })
  
  columns.forEach(async (column: BoardColumn)=> {
    await prisma.column.update({
      where:{
        id: column.id
      },
      data: {
        name: column.name
      }
    })
  })
  res.status(200).json({message: 'Task Created'})
  
}