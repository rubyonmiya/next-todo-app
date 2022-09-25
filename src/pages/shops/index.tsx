import Layout from '@/components/layouts'
import type Shop from '@/types/Shop'
import type WebServer from '@/types/WebServer'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import axios from 'axios'
import Link from 'next/link'
import useSWR from 'swr'

const ShopsIndexPage = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)
  const { data: shops } = useSWR('/api/v1/shops', fetcher)
  const { data: member } = useSWR('/api/v1/member', fetcher)

  return (
    <Layout>
      <Typography variant='h2' component='h2'>
        ショップ一覧
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>プロジェクトID</TableCell>
              <TableCell>MPプロジェクトID</TableCell>
              <TableCell>Webサーバ</TableCell>
              <TableCell>Batchサーバ</TableCell>
              <TableCell>リンク</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shops?.map((shop: Shop) => (
              <TableRow key={shop.id}>
                <TableCell>
                  <a href={shop.site_admin_url} target='_blank'>
                    {shop.number}
                  </a>
                </TableCell>
                <TableCell>{shop.mp_number}</TableCell>
                <TableCell>
                  {shop.web_servers.map((web_server: WebServer) => (
                    <div>
                      <a href={web_server.dns_name}>{web_server.name}</a>
                    </div>
                  ))}
                </TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Link href={`/shops/${shop.number}`}>詳細</Link>
                  <Link href={`/shops/${shop.number}/edit`}>編集</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  )
}

export default ShopsIndexPage
