import BatchServer from '@/types/BatchServer'
import WebServer from '@/types/WebServer'

type Shop = {
  id: number
  number: string
  mp_number: string
  site_admin_url: string
  web_servers: WebServer[]
  batch_servers: BatchServer[]
}

export default Shop
