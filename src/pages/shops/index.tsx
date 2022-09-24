import Layout from '@/components/layouts'
import axios from 'axios'
import useSWR from 'swr'

const ShopsIndexPage = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data)
  const { data, error } = useSWR('/api/v1/shops', fetcher)

  console.log(data)

  return (
    <Layout>
      Shop Index
      {error}
    </Layout>
  )
}

export default ShopsIndexPage
