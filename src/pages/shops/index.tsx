import Layout from '@/components/layouts'
import type Shop from '@/types/shop'
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
import useSWR from 'swr'

const ShopsIndexPage = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data)
  const { data } = useSWR('/api/v1/shops', fetcher)

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
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row: Shop) => (
              <TableRow key={row.id}>
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.number}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  )
}

export default ShopsIndexPage
