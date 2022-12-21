import { createTheme, CssBaseline, ThemeProvider, Container, Box, AppBar, Toolbar, IconButton, Menu, MenuItem, Divider } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu'
import { useState, useEffect } from 'react'
import { hotjar } from 'react-hotjar'

import TitleChanger from './titleChanger'

import logo from './Imgs/logo.webp'

const theme = createTheme({
    palette: {
        mode: 'dark'
    }
})

const Layout = ({ HOTJAR_ID, cookiesAccepted }) => {
    return (
        <ThemeProvider theme={theme}>

            { cookiesAccepted && HOTJAR_ID ? <InitHotjar HOTJAR_ID={HOTJAR_ID} /> : null }

            <CssBaseline />
            <Navbar />

            <Container>
                <Outlet />
            </Container>
        </ThemeProvider>
    )
}

const Navbar = () => {
    const [anchor, setAnchor] = useState(null)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <TitleChanger />

            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 1 }}
                        onClick={(e) => setAnchor(e.currentTarget)}
                        aria-controls="menu"
                        aria-haspopup="true"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu"
                        anchorEl={anchor}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        open={Boolean(anchor)}
                        onClose={() => setAnchor(null)}
                    >
                        <MenuItem sx={{ color: 'inherit' }} as={Link} to='/'>Etusivu</MenuItem>
                        <MenuItem sx={{ color: 'inherit' }} as={Link} to='/tekoaly'>Tekoäly-chat</MenuItem>
                        <Divider />

                        <MenuItem sx={{ color: 'inherit' }} as={Link} to='/kielet'>Kielten essee</MenuItem>
                        <MenuItem sx={{ color: 'inherit' }} as={Link} to='/fysiikka'>Fysiikka</MenuItem>
                        <Divider />
                        <MenuItem sx={{ color: 'inherit' }} as={Link} to='/lunttilappu'>Lunttilappu</MenuItem>

                        <MenuItem sx={{ color: 'inherit' }} as={Link} to='/info'>Tietoa</MenuItem>

                        

                    </Menu>
                    <Box sx={{ flexGrow: 1 }} as={Link} to='/'>
                        <img style={{ width: '200px', marginLeft: '-10px', marginTop: '5px' }} src={logo} alt='Essee.tk:n logo.' />
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

const InitHotjar = ({ HOTJAR_ID }) => {
    const location = useLocation()
    console.log('initing hotjar..')
  
    useEffect(() => {
      hotjar.stateChange(location.path)
      console.log(location.path)
    }, [location.path])
  
    hotjar.initialize(HOTJAR_ID)
    hotjar.identify('USER_ID', { userProperty: 'value' })
    hotjar.event('button-click')
    hotjar.stateChange('/')
    if (hotjar.initialized()) {
      hotjar.identify('USER_ID', { userProperty: 'value' })
    }
  }

export default Layout