import React, { useState, useEffect } from 'react';
import ProductBox from './ProductBox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import FixedContainer from './FixedContainer';

const ProductList = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('http://localhost:8080/products/') //option is needed otherwise is going to be getMetod
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);


  return (
    <>
    <FixedContainer>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 4 }}>
          {products.map((product) => (
            <Grid item xs={1} sm={1} md={1} key={product.productId}>
              <ProductBox key={product.productId} product={product}></ProductBox>
            </Grid>
          ))}
        </Grid>
      </Box>
      </FixedContainer>
    </>
  );
}

export default ProductList;