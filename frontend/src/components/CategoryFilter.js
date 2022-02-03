import React from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import styled from "styled-components"

const CategoryWrapper = styled.section`
padding-bottom: 16px;
`

const CategoryFilterButton = styled(Button)`
  background-color: #A9CDCE;
  border-radius: 2px;
  margin-bottom: 20px;
  margin-left:5px; 
  max-width: 200px; 
  font-size: large;
  font-family: 'Nunito Sans', sans-serif;
  &:hover {
    background-color: #CFE8E0;
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