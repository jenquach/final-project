import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Typography from "@mui/material/Typography"
import styled from "styled-components"

import { API_URL } from '../utils/urls'

const ProductDetailsWrapper = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  align-items: center;
`
const Image = styled.img`
  width: 60%;
  max-width: 500px;
  min-width: 290px;
  padding: 40px;
  object-fit: cover;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;
`
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const ThumbImage = styled.img`
  width: 10%;
  padding: 5px;
`


const ProductDetails = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState({})
 
  const navigate = useNavigate()

  useEffect(() => {
    fetch (API_URL(`product/${productId}`))
      .then((res) => res.json())
      .then((json) => {
        setProduct(json)
      })
}, )

const BackToAllProducts = () => {
  navigate('/products')
}

  return(
  <ProductDetailsWrapper>
    <Image src={ product.img1 } alt={ product.productName } />
    <Details>
    <Typography variant="h6" color="text.secondary" component="div">
          { product.category }
        </Typography>
    <Typography component="div" variant="h4" color="#A9CDCE">
          { product.productName }
        </Typography>
        <Typography variant="h6" color="#A9CDCE" component="div" marginBottom={2}>
          £{ product.price }.00
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          { product.desc }
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          { product.condition }
        </Typography>
        <FlexContainer>
        <ThumbImage src={ product.img1 } alt={ product.productName } />
        <ThumbImage src={ product.img2 } alt={ product.productName } />
        </FlexContainer>
        <FlexContainer>
        <button>
            BUY
          </button>
          <button className="back-btn" onClick={BackToAllProducts}>
            Back To All Products
          </button>
          </FlexContainer>
    </Details>
  {/*   <Card sx={{ display: "flex", alignItems: "center", minHeight: "300px"}} >
      <CardMedia
        component="img"
        sx={{ width: 151, padding: "20px", margin: "0 40px" }}
        image={ product.img1 }
        alt={ product.productName }
      />
      <Box key={product.productId} sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="h4" color="#A9CDCE">
          { product.productName }
        </Typography>
        <Typography variant="h6" color="#A9CDCE" component="div" marginBottom={2}>
          £{ product.price }.00
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          { product.desc }
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          { product.condition }
        </Typography>
        </CardContent>
          <button>
            BUY
          </button>
          <button className="back-btn" onClick={BackToAllProducts}>
            Back To All Products
          </button>
        </Box>
    </Card> */}
  </ProductDetailsWrapper>
  )
}

export default ProductDetails
