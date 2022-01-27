import React from "react"
import { makeStyles } from "@mui/styles"
import CategoryCard from "../components/CategoryCard"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F9F9F9",
    color: "white",
    display: "flex",
    flexDirection: "column",
  },
  heroImage: {
    position: "relative",
    backgroundImage: `url(${require("../assets/toddler_choosing_clothes.jpg")})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "40em",
    /* height: "100vh", */
    /* maxWidth: "1440px", */
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  featuredCategories: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gridGap: "2%",
    paddingTop: "40px",
    paddingBottom: "60px",
    justifyContent: "space-evenly",
    justifyItems: "center",
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