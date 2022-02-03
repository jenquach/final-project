import React from "react"
/* import { Link } from "react-router-dom" */
import { Typography} from "@mui/material"

const AboutUs = () => {
return(
  <section>
  <Typography>
  A NEW FIT is a fictional marketplace for pre-loved children's clothes.
  </Typography>
  <Typography>
  This project was made by <span class="highlight">Jenny Quach, Rosanna Dahlberg och Karoline Mann,</span> all students at Technigo Frontend Developer Bootcamp, class HT21.
  </Typography>
  <Typography>
  We thought it would be great to gain the experience of building an e-commerce as a final project for the Bootcamp. We would be able to use most things we learnt during the Bootcamp in such a project. We decided to build a site that we would love to us ourselves - a marketplace for pre-loved children's clothes.
  </Typography>
  <Typography>
Tech used: Node.js, MongoDB, JavaScript, React, Redux, CSS Styled-components, Material UI.
  </Typography>
  </section>
)
}

export default AboutUs
