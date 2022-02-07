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
import { useDispatch, useSelector } from 'react-redux';
import { cartReducer } from "../reducers/CartReducer"
import Badge from "@mui/material/Badge"
import { styled } from "@mui/material/styles"
import logo from "../assets/A_New_Fit_2.png"


const pages = [{ display: 'All Products', url: '/products' }, { display: 'About us', url: '/about-us' }, { display: 'FAQ', url: '/faq' }]

const settings = [<Link to="/signin">LOG IN</Link>, <Link to="/signup">SIGN UP</Link>]

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const ResponsiveAppBar = () => {
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const cartItems = useSelector(store => store.cartReducer.items)
  const cartIconBadgeText = cartItems.length === 0 ? '' : cartItems.length
  const cartIsEmpty = cartItems.length === 0

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
      sx={{ background: '#A9CDCE' }}
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.url} onClick={handleCloseNavMenu} component={Link} to={page.url}>
                  <Typography textAlign="center">{page.display}</Typography>
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.url}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page.url}
                sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Nunito', fontSize:'18px', fontWeight:'bold' }}
              >
                {page.display}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, fontFamily: 'Nunito' }}>
                <PersonIcon sx={{ color: '#F9F9F9' }} />
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
              {settings.map((setting) => (
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
                  <ShoppingBagIcon sx={{ color: '#F9F9F9' }} />
                </StyledBadge>
              </IconButton>
            )}
            {cartIsEmpty && (
              <IconButton
                aria-label="cart"
                onClick={toggleCartDrawer}>
                <ShoppingBagIcon sx={{ color: '#F9F9F9' }} />
              </IconButton>
            )}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar