import Link from 'next/link'
import Layout from '../components/layouts'

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
