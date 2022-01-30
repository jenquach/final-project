import React, { useEffect, useState } from "react"
import { /* useParams */ /* useHistory */ } from "react-router-dom"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import styled from "styled-components"

const ProductDetailsWrapper = styled.div`
    margin: 100px 10px 50px 10px;
`

const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const PRODUCT_URL = `https://final-project--api.herokuapp.com/product/1`
  
  /* const { productId } = useParams()
  const PRODUCT_URL = `https://final-project--api.herokuapp.com/products/${productId}` */
  

  
   useEffect(() => {
     fetch ( PRODUCT_URL )
      .then((res) => res.json())
      .then((json) => {
        setProduct(json)
      })
  }, [PRODUCT_URL])

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
            <button>
              Go back
            </button>
        </Box>
      </Card>
    </ProductDetailsWrapper>
  )
}

export default ProductDetails
