import React from "react"
import styled from "styled-components"

const AboutUsWrapper = styled.section`
  background: #f0f0f0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const TextContainer = styled.div`
  max-width: 800px;
  padding: 100px 10px 30px 10px;
  font-family: 'Nunito', sans-serif;

.highlight {
  font-weight: bold;
}

@media (max-width: 667px) {
  padding: 80px 10px 30px 10px;
}
@media (min-width: 1440px) {
  padding: 0 80px 30px 80px;
}
`

const AboutUs = () => {
return(
  <AboutUsWrapper>
  <TextContainer>
  <h1>ABOUT US</h1>
  <p>
  A NEW FIT is a fictional marketplace for pre-loved children's clothes.
  The project was made by <span class="highlight">Jenny Quach, Rosanna Dahlberg</span> and <span class="highlight">Karoline Mann</span> - students at Technigo Frontend Developer Bootcamp, class HT21.
  By building an e-commerce website as our final project we got to use most of the skills that we had learnt during the Bootcamp. We decided that our e-commerce would be a type of website that the three of us would love to use ourselves - a marketplace for pre-loved children's clothes. We hope you enjoy trying it out!
  </p>
  <h3>TECH USED</h3>
  <p>
  For this project we used the following tech stack: Node.js, MongoDB, JavaScript, React, Redux, CSS Styled-components and Material UI.
  </p>
  </TextContainer>
  </AboutUsWrapper>
  )
}

export default AboutUs
