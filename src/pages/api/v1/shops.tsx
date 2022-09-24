import type Shop from '@/types/shop'
import type { NextApiRequest, NextApiResponse } from 'next'

const shops: Shop[] = [
  { id: 1, number: 'sample' },
  { id: 2, number: 'sample_zeus' },
  { id: 3, number: 'sample_paygent' },
]

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(shops)
}
