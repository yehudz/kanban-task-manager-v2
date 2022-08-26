import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../db'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({message: "Method not allowed"})
  }

  const columns = await prisma.column.findMany({
    orderBy: {
      order: 'asc'
    }
  })
  res.status(200).json({columns: columns})
}