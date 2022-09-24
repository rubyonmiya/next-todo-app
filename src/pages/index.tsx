import Layout from '@/components/layouts'
import Link from 'next/link'

const TopIndexPage = () => {
  return (
    <Layout>
      <Link href='/shops'>
        <a>Shops Index</a>
      </Link>
    </Layout>
  )
}
export default TopIndexPage
