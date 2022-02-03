import React, { useState, useEffect } from 'react';
import ProductBox from '../components/ProductBox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useParams } from "react-router-dom";

import FixedContainer from '../components/FixedContainer';
import CategoryFilter from '../components/CategoryFilter';

import { API_URL } from '../utils/urls'
import styled from "styled-components"

const ProductListWrapper = styled.div`
padding-top: 100px;
`


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  let categoryId = params.category

  useEffect(() => {
    fetch(categoryId === undefined ? API_URL('products') : API_URL('products/' + categoryId)) //option is needed otherwise is going to be getMetod
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [categoryId]);


  return (
    <>
    <ProductListWrapper>
    <CategoryFilter>hejhjehej</CategoryFilter>
      <FixedContainer>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 4 }}>
            {products.map((product) => (
              <Grid item xs={1} sm={1} md={1} key={product.productId} paddingTop={0}>
                <ProductBox key={product.productId} product={product}></ProductBox>

              </Grid>
            ))}
          </Grid>
        </Box>
      </FixedContainer>
      </ProductListWrapper>
    </>
  );
}

export default ProductList;