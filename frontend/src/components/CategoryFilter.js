import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const CategoryWrapper = styled.section`
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-column: span 12;
grid-gap: 10px;
@media (min-width: 767px) {
  grid-column-start: 2;
  grid-column-end: 12;
  }
`

const StyledLink = styled(Link)`
text-align: center;
text-decoration: none;
font-weight: 700;
align-items: center;
background-color: white;
padding: 10px 2px 10px 2px;
border-radius: 2px;
margin-bottom: 20px;
grid-column: span 2;
max-width: 200px; 
font-size: 1em;
border: none;
color: #b3975d;
font-family: 'Short Stack', cursive;
  &:hover {
    background-color: #DFE0DF;
  }
  &:focus {
    background-color: #DFE0DF;
  }
  @media (min-width: 471px) {
    font-size: 0.8em;
    padding-top: 8px;
  }

  @media (max-width: 470px) {
    grid-column: span 6;
    margin-bottom: 0px;
    color:#b3975d;
  }
`

const CategoryFilter = () => {
  return (
    <CategoryWrapper>
      <StyledLink to={'/products'}>ALL</StyledLink>
       <StyledLink component={StyledLink} to={'/products/Bottoms'}>BOTTOMS</StyledLink>
      <StyledLink component={StyledLink} to={'/products/Tops'}>TOPS</StyledLink>
      <StyledLink component={StyledLink} to={'/products/One piece'}>ONE PIECE</StyledLink>
      <StyledLink component={StyledLink} to={'/products/Outerwear'}>OUTERWEAR</StyledLink>
      <StyledLink component={StyledLink} to={'/products/Footwear'}>FOOTWEAR</StyledLink>
    </CategoryWrapper>
  )
}

export default CategoryFilter