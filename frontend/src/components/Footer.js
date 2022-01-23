import React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import styled from "styled-components"
import { Container, Typography } from "@mui/material"


const FooterWrapper = styled.section`
background: #A9CDCE;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Box
        sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        height: '100px',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Box>
                <Link href="/" color="inherit" underline="none">About us</Link>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Box>
                <Link href="/" color="inherit" underline="none">Terms and conditions</Link>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Box>
                <Link href="/" color="inherit" underline="none">Customer Service</Link>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Box>
                <Link href="/" color="inherit" underline="none">Contact</Link>
              </Box>
            </Grid>
          </Grid>
      </Box>
      <Box
        sx={{
        backgroundColor: '#CFE8E0',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
          <Typography>
            This is a ficional webshop ...
          </Typography>
      </Box>
    </FooterWrapper>
  )
}

export default Footer