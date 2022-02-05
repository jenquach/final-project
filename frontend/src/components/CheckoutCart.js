import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { API_URL } from '../utils/urls';

const CartWrapper = styled.div`
padding-top: 30px;
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-column: span 12;
background: white;
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
return(
  <>
  {product && (<span>{product.productName}</span>)}
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