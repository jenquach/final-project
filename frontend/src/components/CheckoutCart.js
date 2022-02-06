import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { API_URL } from '../utils/urls';

const ProductOrder = styled.div`
justify-content: center;
display:grid;
grid-template-columns: repeat(12,1fr);
grid-column:span 12;
`

const CheckoutCartImage = styled.img`
grid-column: span 2/4;
@media (max-width: 767px) {
  grid-column-start: 2;
  grid-column-end: 3;
  }
`

const CheckoutCartProductName = styled.span`
font-family: 'Nunito', sans-serif;
grid-column: span 2;
@media (max-width: 767px) {
  grid-column-start: 3;
  grid-column-end: 4;
  }
  `

const CheckoutCartProductSize = styled.span`
font-family: 'Nunito', sans-serif;
grid-column: span 2;
@media (max-width: 767px) {
  grid-column-start: 5;
  grid-column-end: 8;
  }
  `

const CheckoutCartProductPrice = styled.span`
font-family: 'Nunito', sans-serif;
font-weight: 700;
grid-column: span 2;
@media (max-width: 767px) {
  grid-column-start: 8;
  grid-column-end: 9;
  }
  `

const CartWrapper = styled.div`
padding-top: 50px;
border-radius: 0px 0px 10px 10px;
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-column: span 12;
background: white;
margin-bottom: 10px;
@media (min-width: 767px) {
  grid-column-start: 2;
  grid-column-end: 12;
  }
`
const CheckoutCartItem = (props) => {
  const [product, setProduct] = useState(null)
  useEffect(() => {
    fetch(API_URL('product/' + props.itemId)) //option is needed otherwise is going to be getMetod
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <>
      {product && (
        <ProductOrder>
          <CheckoutCartImage src={product.img1} height={'130px'} alt="product" />
          <CheckoutCartProductName>{product.productName}</CheckoutCartProductName>
          <CheckoutCartProductSize>{product.size}</CheckoutCartProductSize>
          <CheckoutCartProductPrice>£{product.price}</CheckoutCartProductPrice>
        </ProductOrder>
      )}
    </>
  )
}


const CheckoutCart = (props) => {

  return (
    <>
      <CartWrapper>
        {props.cartItems && props.cartItems.map(
          (item) => (<CheckoutCartItem key={item.itemId} itemId={item.itemId}></CheckoutCartItem>)
        )}
      </CartWrapper>
    </>
  )
}









export default CheckoutCart