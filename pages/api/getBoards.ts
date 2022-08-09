import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({message: "Method not allowed"})
  }

  const boards = await prisma.board.findMany({
    include: {
      columns: {
        include: {
          tasks: true
        }
      }
    }
  })
  res.status(200).json({boards: boards})
}