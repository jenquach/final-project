import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(Link)`
color: black;
text-decoration: none;
font-family: 'Nunito Sans', sans-serif;
font-weight: 700;
text-transform: capitalize; 
`

const CategoryCard = () => {
  return (
    <>
    <Card sx={{ maxWidth: 250, textAlign: "center" }}>
      <StyledLink to={'/products/Tops'} color="inherit" underline="none">
        <CardMedia
          component="img"
          height="300"
          image={require("../assets/tops.jpg")}
          alt="girl with dotted top"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            TOPS
          </Typography>
        </CardContent>
      </StyledLink>
    </Card>
    <Card sx={{ maxWidth: 250, textAlign: "center" }}>
      <StyledLink to={'/products/Bottoms'} color="inherit" underline="none">
      <CardMedia
        component="img"
        height="300"
        image={require("../assets/bottoms.jpg")}
        alt="trousers with playful pattern"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          BOTTOMS
        </Typography>
      </CardContent>
     </StyledLink>
    </Card>
    <Card sx={{ maxWidth: 250, textAlign: "center" }}>
      <StyledLink to={'/products/Outerwear'} color="inherit" underline="none">
        <CardMedia
          component="img"
          height="300"
          image={require("../assets/outerwear.jpg")}
          alt="toddler in the forest"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            OUTERWEAR
          </Typography>
        </CardContent>
      </StyledLink>
    </Card>
    </>
  )
}

export default CategoryCard