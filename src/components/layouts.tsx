import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import axios from 'axios'
import type { ReactNode } from 'react'
import useSWR from 'swr'
type Props = {
  children: ReactNode
}

const Layout = ({ children, ...props }: Props) => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data)
  const { data: current_member } = useSWR('/api/v1/member', fetcher)

  return (
    <div {...props}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              shop manager
            </Typography>
            <Typography sx={{ flexGrow: 0 }}>{current_member?.name}</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </div>
  )
}

export default Layout
