import React, { useState, useEffect } from "react"
import { useSelector, useDispatch, batch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { API_URL } from "../utils/urls"
import user from "../reducers/user"

import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import styled from "styled-components"

const ErrorMessageSignUp = styled.div`
color:red;
`

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://anewfit.com/">
        A New Fit
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#202124',
      dark: '#37373D',
      contrastText: '#fff',
    },
    secondary: {
      main: '#37373D',
    }
  }
})

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode] = useState('signup')

  const accessToken = useSelector((store) => store.user.accessToken)
  let [errorMessage, setErrorMessage] = useState('') 

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (accessToken) {
      navigate('/my-profile')
    }
  }, [accessToken, navigate])

  const onFormSubmit = (event) => {
    event.preventDefault();

    setErrorMessage('')

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    }
  
  fetch(API_URL(mode), options)
  .then((res) => res.json())
  .then((data) => {

    if (data.success) {
      batch(() => { //instead of updating store for each dispatch it will only update ones for all with batch
        dispatch(user.actions.setUserId(data.response.userId))
        dispatch(user.actions.setName(data.response.name))
        dispatch(user.actions.setEmail(data.response.email))
        dispatch(user.actions.setAccessToken(data.response.accessToken))
        setErrorMessage('')
      })
    } else {
      batch(() => {
        dispatch(user.actions.setUserId(null))
        dispatch(user.actions.setName(null))
        dispatch(user.actions.setEmail(null))
        dispatch(user.actions.setAccessToken(null))
        setErrorMessage(data.response)
      })
    }
  })
}

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh', marginTop: '30px' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://res.cloudinary.com/denrrpqab/image/upload/v1644065894/kids_playing_kl1evn.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid 
          item 
          xs={12} 
          sm={8} 
          md={5} 
          component={Paper} 
          elevation={0} 
          square
          sx={{
          }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" fontFamily="nunito">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={onFormSubmit} sx={{ mt: 1 }}>
              <TextField
              fontFamily="nunito"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
              fontFamily="nunito"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
              fontFamily="nunito"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
                <ErrorMessageSignUp fontFamily="nunito">
                 {errorMessage }
                 </ErrorMessageSignUp>
              <Button
              fontFamily="nunito"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Link href="/signin" variant="body2" fontFamily="nunito">
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Signup