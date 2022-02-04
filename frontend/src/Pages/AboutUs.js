import React from "react"
import styled from "styled-components"

const AboutUsWrapper = styled.section`
  background: #f0f0f0;
  min-height: 300px;
  padding: 80px 100px 30px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

.highlight {
  font-weight: bold;
}
`

const AboutUs = () => {
return(
  <AboutUsWrapper>
  <h1>ABOUT US</h1>
  <p>
  A NEW FIT is a fictional marketplace for pre-loved children's clothes.
  The project was made by <span class="highlight">Jenny Quach, Rosanna Dahlberg</span> and <span class="highlight">Karoline Mann,</span> all students at Technigo Frontend Developer Bootcamp, class HT21.
  By building an e-commerce website as our final project we got to use most of the skills that we had learnt during the Bootcamp. We decided that our e-commerce would be a type of website that the three of us would love to use ourselves - a marketplace for pre-loved children's clothes. We hope you enjoyed trying it out!
  </p>
  <h3>TECH USED</h3>
  <p>
  For this project we used the following tech stack: Node.js, MongoDB, JavaScript, React, Redux, CSS Styled-components and Material UI.
  </p>
  </AboutUsWrapper>
  )
}

export default AboutUs
