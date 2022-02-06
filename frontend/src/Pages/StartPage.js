import React from "react"
import CategoryCard from "../components/CategoryCard"
import styled from "styled-components"
import img from "../assets/toddler_choosing_clothes.jpg"
import Ticker from "../components/Ticker"

const StartPageWrapper = styled.section`
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
`
const HeroImg = styled.div`
  position: relative;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeroImgText = styled.h1`
  font-size: 1.25rem;
  color: #F9F9F9;
  border: solid 2px #F9F9F9;
  border-radius: 8px;
  padding: 15px;  
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  font-family: 'Nunito', sans-serif;

@media (min-width: 1440px) {
  font-size: 2rem;
}
`
const CategoryCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2%;
    padding-top: 40px;
    padding-bottom: 60px;
    justify-content: space-evenly;
    justify-items: center;
`

const StartPage = () => {
  return (
    <StartPageWrapper>
      <HeroImg>
        <HeroImgText>
          Pre-loved clothes for the little ones
        </HeroImgText>
      </HeroImg>
      <CategoryCardWrapper>
        <CategoryCard />
      </CategoryCardWrapper>
      <Ticker end={100} wrapperClass="MoneyTicker"></Ticker>
    </StartPageWrapper>
  )
}

export default StartPage