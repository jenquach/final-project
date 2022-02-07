import React from "react";
import CountUp from 'react-countup';
import styled from "styled-components";

const TickerWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 20px;
    padding-top: 20px;
    padding-bottom: 60px;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-evenly;
    justify-items: center;
    max-width: 1000px;
    margin: 0 auto;
.tick {
  font-family: 'Short Stack', cursive;
  border-radius: 5px;
  padding-top: 50px;
  padding-bottom: 40px;
  font-size: 2em;
  grid-column: span 1;
  width: 100%;
  text-align: center;
  align-items: initial;
  background-color: #C3CBC3;
  h4 {
  padding: 0px 15px 0px 15px;
  font-size: 16px;
  text-align: center;  }
  @media (max-width: 767px) {
  grid-column: span 2;
  }
}
`
const TickerContainer = styled.section`
align-items: center;
`
const Banner = styled.div`
border-radius: 5px;
background-color: #EED0CA;
padding-top: 30px;
padding-bottom: 40px;
grid-column: span 1;
width: 100%;
align-items: initial;
h3 {
  padding: 0px 10px 0px 10px;
  font-family: 'Short Stack', cursive;
  font-size: 1.5em;
  text-align: center;
}
h4 {
  padding: 0px 15px 0px 15px;
  font-family: 'Short Stack', cursive;
  font-size: 1em;
  text-align: center;
}
@media (max-width: 767px) {
  grid-column: span 2;
}
`

const Ticker = (props) => {

  return (
    <TickerContainer>
      <TickerWrapper>
        <div className="tick">
          <CountUp
            suffix="£"
            duration={2.75}
            separator=" "
            start={props.start}
            end={props.end}>
          </CountUp>
          <h4>
            So far you have helped raised this amount to local women's shelters
          </h4>
        </div>
        <Banner><h3>A NEW FIT </h3><h4>Let your pre-loved baby and children’s clothes find a new fit and love. We let your used clothes find new friends.</h4></Banner>
      </TickerWrapper>
    </TickerContainer>
  )
}

export default Ticker