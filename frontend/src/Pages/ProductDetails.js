import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Typography, Button } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import styled from "styled-components"
import { API_URL } from '../utils/urls'

const ProductDetailsWrapper = styled.div`
  background: #f0f0f0;
  margin: 50px auto 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 667px) {
  flex-direction: column;
}
`
const Image = styled.img`
  width: 60%;
  margin: 30px 60px 40px 40px;
  max-width: 380px;
  min-width: 280px;
  border: 1px solid #ddd;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: 667px) {
    max-width: 280px;
}
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;

  @media (max-width: 667px) {
    max-width: 280px;
    padding-top: 40px;
}
`
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const ThumbImage = styled.img`
  width: 60px;
  height: auto;
  margin: 7px 5px 20px 0;
  cursor: pointer;
  border: 1px solid #ddd;
  object-fit: cover;
  border-radius: 5px;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledButton = styled(Button)`
  background-color: #A9CDCE;
  border-radius: 2px;
  margin-bottom: 20px;
  max-width: 130px; 
  font-size: large;
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
const BackButton = styled(Button)`
  max-width: "240px"; 
  padding: "40px";
  border: 1px solid;
  border-radius: "5px";
  color: grey;
  cursor: "pointer";
  font-size: "small";
`

const ProductDetails = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    fetch(API_URL(`product/${productId}`))
      .then((res) => res.json())
      .then((json) => {
        setProduct(json)
      })
  }, [setProduct])

  const BackToAllProducts = () => {
    navigate('/products')
  }

  return (
    <>
      {product && (
        <ProductDetailsWrapper>
          <Image src={product.img1} alt={product.productName} />
          <Details>
            <Typography variant="h6" color="text.secondary" component="div">
              {product.category}
            </Typography>
            <Typography component="div" variant="h5" color="#A9CDCE" textTransform="uppercase">
              {product.productName}
            </Typography>
            <Typography variant="h6" color="#A9CDCE" component="div" marginBottom={2} fontWeight="bold">
              £{product.price}.00
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {product.desc}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {product.condition}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Size: {product.size}
            </Typography>
            <FlexContainer>
              <ThumbImage src={product.img1} alt={product.productName} />
              <ThumbImage src={product.img2} alt={product.productName} />
            </FlexContainer>
            <ButtonContainer>
              <StyledButton variant="contained" sx={{ maxWidth: "130px", fontSize: "large" }}>
                BUY
              </StyledButton>
              <BackButton className="back-btn" variant="text" size="small" onClick={BackToAllProducts}>
                <ArrowBackIcon fontSize="small" sx={{ marginRight: "7px" }}></ArrowBackIcon>
                ALL PRODUCTS
              </BackButton>
            </ButtonContainer>
          </Details>
        </ProductDetailsWrapper>
      )}
    </>
  )
}

export default ProductDetails
