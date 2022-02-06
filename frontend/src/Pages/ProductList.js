import React, { useState, useEffect } from 'react';
import ProductBox from '../components/ProductBox';
import { useParams } from "react-router-dom";

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
    <CategoryFilter></CategoryFilter>
      <Container>
      {products.map((product) => (
        <ProductBox key={product.productId} product={product}></ProductBox>
          ))}
    </Container>
    </MainProductGrid>
    </>
  );
}

export default ProductList;