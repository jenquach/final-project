import React from "react"
/* import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card" */
import { makeStyles } from "@mui/styles"

import CategoryCard from "../components/CategoryCard"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '90vh',
    backgroundColor: '#F9F9F9',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    
   /*  [theme.breakpoints.down("md")]:{
      flexDirection: 'row',
    }, */
  },
  heroImage: {
    position: "relative",
    backgroundImage: `url(${require("../assets/toddler_choosing_clothes.jpg")})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: "center center",
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  /* featuredCategories: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-evenly',
    paddingTop: '40px',
    paddingBottom: '60px',
  } */
  featuredCategories: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gridGap: '2%',
    paddingTop: '40px',
    paddingBottom: '60px',
    justifyContent: 'space-evenly',
    justifyItems: 'center',
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
        <CategoryCard />
      </div>
    </div>
  )
}



export default Startpage