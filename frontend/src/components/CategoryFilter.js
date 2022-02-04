import React from "react"
import { Button } from "@mui/material"
import styled from "styled-components"
import { Link } from "react-router-dom"


const CategoryWrapper = styled.section`
padding-bottom: 16px;
`

const Link = styled(Link)`
color: grey;
text-decoration: none;
font-family: 'Nunito Sans', sans-serif;
font-weight: 700;
text-transform: capitalize; 
`

const CategoryFilterButton = styled(Button)`
  align-items: center;
  background-color: #CFE8E0;
  border-radius: 2px;
  margin-bottom: 20px;
  margin-left:100px; 
  max-width: 200px; 
  font-size: 1em;
  font-family: 'Nunito Sans', sans-serif;
  &:hover {
    background-color: #A9CDCE;
  }
  &:focus {
    background-color: #CFE8E0;
  }
  @media (max-width: 667px) {
    max-width: 280px;
}
`

const CategoryFilter = () => {
  return (
    <CategoryWrapper>
      <CategoryFilterButton component={Link} to={'/products'}>All products</CategoryFilterButton>
      <CategoryFilterButton component={Link} to={'/products/Bottoms'}>Bottoms</CategoryFilterButton>
      <CategoryFilterButton component={Link} to={'/products/Tops'}>Tops</CategoryFilterButton>
      <CategoryFilterButton component={Link} to={'/products/One piece'}>One piece</CategoryFilterButton>
      <CategoryFilterButton component={Link} to={'/products/Outerwear'}>Outerwear</CategoryFilterButton>
      <CategoryFilterButton component={Link} to={'/products/Footwear'}>Footwear</CategoryFilterButton>
    </CategoryWrapper>
  )
}

export default CategoryFilter