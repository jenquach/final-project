import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"


const CategoryWrapper = styled.section`
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-column: span 12;
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
background-color: #CFE8E0;
padding: 10px;
border-radius: 2px;
margin-bottom: 20px;
grid-column: span 2;
max-width: 200px; 
font-size: 1em;
border: none;
color: #00838f;
font-family: 'Short Stack', cursive;
  &:hover {
    background-color: #CFE8E0;
  }
  &:focus {
    background-color: #A9CDCE;
  }
  @media (max-width: 667px) {
    max-width: 280px;
}
`



const CategoryFilter = () => {
  return (
    <CategoryWrapper>
      <StyledLink to={'/products'}>ALL PRODUCTS</StyledLink>
       <StyledLink component={StyledLink} to={'/products/Bottoms'}>BOTTOMS</StyledLink>
      <StyledLink component={StyledLink} to={'/products/Tops'}>TOPS</StyledLink>
      <StyledLink component={StyledLink} to={'/products/One piece'}>ONE PIECE</StyledLink>
      <StyledLink component={StyledLink} to={'/products/Outerwear'}>OUTERWEAR</StyledLink>
      <StyledLink component={StyledLink} to={'/products/Footwear'}>FOOTWEAR</StyledLink>
    </CategoryWrapper>
  )
}

export default CategoryFilter