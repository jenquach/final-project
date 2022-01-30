import React from "react"
import styled from "styled-components"

const ProductDetailsWrapper = styled.div`
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2%;
    padding-top: 40px;
    padding-bottom: 60px;
    justify-content: space-evenly;
    justify-items: center; */
    color: blue;
    margin-top: 200px;
`

const ProductDetails = () => {
  return (
    <ProductDetailsWrapper>Product Details page</ProductDetailsWrapper>
  )
}

export default ProductDetails
