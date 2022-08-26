import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({message: "Method not allowed"})
  }

  const {columns, name} = JSON.parse(req.body)
  await prisma.board.create({
    data: {
      name: name,
      columns: {
        createMany: {
          data: columns
        } 
      }
    }
  })
  res.status(200).json({message: 'Board Created'})
  
}