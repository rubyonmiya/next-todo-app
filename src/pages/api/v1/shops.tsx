import type Shop from '@/types/Shop'
import type { NextApiRequest, NextApiResponse } from 'next'

const shops: Shop[] = [
  {
    id: 1,
    number: 'sample',
    mp_number: 'sample',
    site_admin_url: 'https://sample.example.com/admin',
    web_servers: [
      { id: 1, name: 'websample.ec', number: 'i-xxxxxxxx', dns_name: '10-0-0-0.amazonaws.com' },
      { id: 2, name: 'websample.ec', number: 'i-xxxxxxxx', dns_name: '10-0-0-1.amazonaws.com' },
      { id: 3, name: 'websample.ec', number: 'i-xxxxxxxx', dns_name: '10-0-0-2.amazonaws.com' },
    ],
    batch_servers: [
      { id: 1, name: 'batchdeb001.ec', number: 'i-xxxxxxxx', dns_name: '10-0-0-3.amazonaws.com' },
    ],
  },
  {
    id: 2,
    number: 'sample_zeus',
    mp_number: 'sample_zeus',
    site_admin_url: 'https://sample-zeus.example.com/admin',
    web_servers: [],
    batch_servers: [],
  },
  {
    id: 3,
    number: 'sample_paygent',
    mp_number: 'sample_paygent',
    site_admin_url: 'https://sample-paygent.example.com/admin',
    web_servers: [],
    batch_servers: [],
  },
]

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(shops)
}
