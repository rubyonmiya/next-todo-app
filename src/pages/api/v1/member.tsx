import type Member from '@/types/Member'
import type { NextApiRequest, NextApiResponse } from 'next'

const member: Member = {
  id: 1,
  name: 'test name',
  email: 'test@example.com',
  shop_index_table_cells: [],
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(member)
}
