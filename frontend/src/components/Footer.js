import React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Typography } from "@mui/material"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"


const FooterWrapper = styled.section`
background: white;
font-weight: bold;
`
const NavLink = styled(Link)`
color: black;
text-decoration: none;
cursor: pointer;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Box
        sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        height: "60px",
        paddingTop: "40px",
        paddingBottom: "20px",
        justifyContent: "space-evenly",
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "normal",
        padding: "10px, 0",
        fontFamily: "Nunito",
        }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={10}>
              <Box>
                <NavLink to="/about-us" color="inherit" underline="none">About us</NavLink>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={10}>
              <Box>
                <NavLink to="/faq" color="inherit" underline="none">FAQ</NavLink>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={10}>
              <Box>
                <NavLink to="/about-us" color="inherit" underline="none">Contact</NavLink>
                <Box sx={{
                      padding: "10px",
                    }}>
                  <MailOutlineIcon sx={{ fontSize: 25 }}/>
                  <FacebookIcon sx={{ fontSize: 25 }}/>
                  <InstagramIcon sx={{ fontSize: 25 }}/>
                </Box>
              </Box>
            </Grid>
          </Grid>
      </Box>
      <Box
        sx={{
        backgroundColor: "white",
        borderTop: "1px solid lightgrey",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "10px, 0",
        fontFamily: "Nunito",
        }}>
          <Typography variant="subtitle1" >
            This is a fictional webshop made by students at Technigo Bootcamp
          </Typography>
      </Box>
    </FooterWrapper>
  )
}

export default Footer