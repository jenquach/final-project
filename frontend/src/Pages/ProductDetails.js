import React, { useEffect, useState } from "react"
import { /* useHistory */ } from "react-router-dom"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { API_URL } from "../utils/urls"
/* import styled from "styled-components" */

/* const ProductDetailsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2%;
    padding-top: 40px;
    padding-bottom: 60px;
    justify-content: space-evenly;
    justify-items: center; 
    color: blue;
    margin-top: 200px;
` */

const ProductDetails = () => {
  const [products, setProducts] = useState([])

  
   useEffect(() => {
     fetch ( API_URL('products'))
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])
  
  /* let content = null

  if (products.error){
    content = <p>
      There was an error. Please refresh or try again later.
    </p>
  } */

  /* if(products.data){
    content = 
    products.data.map((product, key) =>
    <div>{ product.productName }</div>)
    
  } */

  return(
    <>
    {products.map((product) => (
      <Card sx={{ display: 'flex' }}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={ product.img1 }
        alt="Live from space album cover"
      />
      <Box key={product.productId} sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
        { product.productName }
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          { product.desc }
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          { product.condition }
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          Price: £{ product.price }
          </Typography>
          </CardContent>
          </Box>
      </Card>
    ))}
    </>
    )}
    

    /* return( 
    <ProductDetailsWrapper>
    Product Details page:
    {content}
    </ProductDetailsWrapper>
  ) */


export default ProductDetails
