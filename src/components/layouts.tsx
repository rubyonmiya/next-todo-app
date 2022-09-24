import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <div {...props}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              ecforce shop manager
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </div>
  )
}

export default Layout
