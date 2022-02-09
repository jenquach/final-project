import React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import PersonIcon from "@mui/icons-material/Person"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { cartReducer } from "../reducers/CartReducer"
import Badge from "@mui/material/Badge"
import { styled } from "@mui/material/styles"
import logo from "../assets/A_New_Fit_gold.png"
import user from "../reducers/user"
import { useNavigate } from "react-router-dom"


const pages = [{ display: 'All Products', url: '/products' }, { display: 'About us', url: '/about-us' }, { display: 'FAQ', url: '/faq' }]

const settings = [<Link to="/signup">SIGN UP</Link>, <Link to="/signin">SIGN IN</Link>]



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

const ResponsiveAppBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const cartItems = useSelector(store => store.cartReducer.items)
  const cartIconBadgeText = cartItems.length === 0 ? '' : cartItems.length
  const cartIsEmpty = cartItems.length === 0

  const isLoggedIn = useSelector(store => store.user.accessToken) != null

  const handleLogout = (event) => {
    dispatch(user.actions.setUserId(null))
    dispatch(user.actions.setName(null))
    dispatch(user.actions.setEmail(null))
    dispatch(user.actions.setAccessToken(null))
    navigate('/')
  }
  const loggedInSettings = [<Link to="/my-profile">MY PROFILE</Link>, <Link to="/" onClick={handleLogout}>LOG OUT</Link>]

  const toggleCartDrawer = () => {
    dispatch(cartReducer.actions.setMiniCartDrawerVisible(true))
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }


  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ background: 'white' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'Nunito' }}
          >
            <Link to="/">
              <img src={logo} alt="A New Fit" width="200px" height="auto" />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, fontFamily: 'Nunito' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: '#b3975d' }} />
            </IconButton>
            <Menu
             fontFamily= "Nunito"
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },fontFamily: 'Nunito'}}
            >
              {pages.map((page) => (
                <MenuItem key={page.url} onClick={handleCloseNavMenu} component={Link} to={page.url}>
                  <Typography textAlign="center" fontFamily="Nunito" >{page.display }</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', fontFamily: 'Nunito' } }}
          >
            <Link to="/"><img src={logo} alt="A New Fit" width="200px" height="auto" /></Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
            {pages.map((page) => (
              <Button
                key={page.url}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page.url}
                sx={{ my: 2, color: '#b3975d', display: 'block', fontFamily: 'Nunito', fontSize: '17px', fontWeight: 'bold'}}
              >
                {page.display}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, fontFamily: 'Nunito' }}>
                <PersonIcon sx={{ color: '#b3975d' }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!isLoggedIn && settings.map((setting) => (
                <MenuItem key={setting.props.to ?? ''} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              {isLoggedIn && loggedInSettings.map((setting) => (
                <MenuItem key={setting.props.to} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {!cartIsEmpty && (
              <IconButton
                aria-label="cart"
                onClick={toggleCartDrawer}>
                <StyledBadge badgeContent={cartIconBadgeText}>
                  <ShoppingBagIcon sx={{ color: '#b3975d' }} />
                </StyledBadge>
              </IconButton>
            )}
            {cartIsEmpty && (
              <IconButton
                aria-label="cart"
                onClick={toggleCartDrawer}>
                <ShoppingBagIcon sx={{ color: '#b3975d' }} />
              </IconButton>
            )}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar