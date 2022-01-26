import React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import { makeStyles } from "@mui/styles"

import ImageCard from "./components/ImageCard"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '90vh',
    backgroundColor: '#F9F9F9',
    color: 'white',
  },
  heroImage: {
    backgroundImage: `url(${require("../assets/toddler_choosing_clothes.jpg")})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '65px',
  }
}))

const Startpage = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.heroImage}>
        <h1 className={classes.imgText}>
          Pre-loved clothes for the little ones
        </h1>
      </div>
      <div className={classes.featuredCategories}>
        <ImageCard />
      </div>
    </div>
  )
}



export default Startpage