import React, { useState, useEffect } from 'react';
import ProductBox from '../components/ProductBox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useParams } from "react-router-dom";

import FixedContainer from '../components/FixedContainer';
import CategoryFilter from '../components/CategoryFilter';

import { API_URL } from '../utils/urls'
import styled from "styled-components"

const MainProductGrid = styled.div`
padding-top: 100px;
display: grid;
grid-template-columns: repeat(12, 1fr);
background: #f0f0f0;
`
const Container = styled.div`
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
grid-column: span 12;
gap: 15px;
padding-top: 15px;
display: grid;
  @media (min-width: 767px) {
  grid-column-start: 2;
  grid-column-end: 12;
  }
`


const ProductListWrapper = styled.div`
padding-top: 100px;
background: #f0f0f0;
height: 1000px;
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
    <MainProductGrid>
      <Container>
      {products.map((product) => (
        <ProductBox key={product.productId} product={product}></ProductBox>
          ))}
    </Container>
    </MainProductGrid>
      {/* <ProductListWrapper>
        <CategoryFilter></CategoryFilter>
        <FixedContainer>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 4 }}>
             
            </Grid>
          </Box>
        </FixedContainer>
      </ProductListWrapper> */}
    </>
  );
}

export default ProductList;