import React, { useEffect, useState } from "react"
import { useParams /* useNavigate */ } from "react-router-dom"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import styled from "styled-components"

import { API_URL } from '../utils/urls'

const ProductDetailsWrapper = styled.div`
  margin: 100px 10px 50px 10px;
`

const ProductDetails = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState({})
 
  /* const navigate = useNavigate() */

  useEffect(() => {
    fetch (API_URL(`product/${productId}`))
      .then((res) => res.json())
      .then((json) => {
        setProduct(json)
      })
}, )

/* const BackToAllProducts = () => {
    navigate('/products')
  } */

  return(
  <ProductDetailsWrapper>
    <Card sx={{ display: "flex", minHeight: "300px"}} >
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
        {/* <Typography sx={{ fontWeight: 'bold' }}>
              Condition
            </Typography> */}
        <Typography variant="subtitle1" color="text.secondary" component="div">
          { product.condition }
        </Typography>
        </CardContent>
          <button>
            BUY
          </button>
          <button className="back-btn" /* onClick={BackToAllProducts} */>
            Back To All Products
          </button>
        </Box>
    </Card>
  </ProductDetailsWrapper>
  )
}

export default ProductDetails
