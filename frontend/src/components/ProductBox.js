import React from "react"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"
import { useDispatch, useSelector } from 'react-redux';
import { cartReducer } from "../reducers/CartReducer";
import styled from "styled-components"
import { Grid } from "@mui/material";
import HoverImage from "react-hover-image";

import { API_URL } from "../utils/urls"

const ProductContainer = styled.div`
margin-bottom: 25px;
background-color: white;
grid-column: span 1;
text-align: center;
  @media (min-width: 767px) {
  grid-column: span 1;
}
`

const ProductText = styled.text`
font-size: 1.1em;
font-family: 'Nunito Sans', sans-serif;
text-align: center;
`

const ProductPrice = styled.text`
padding-left: 10px;
color: #A9CDCE;
font-size: 1em;
font-weight:700;
`

const StyledBuyButton = styled(Button)`
  background-color: #A9CDCE;
  border-radius: 2px;
  margin-bottom: 20px;
  width: 80%; 
  font-size: 1em;
  font-family: 'Nunito Sans', sans-serif;
  &:hover {
    background-color: #CFE8E0;
  }
  &:focus {
    background-color: #CFE8E0;
  }
  @media (max-width: 667px) {
    max-width: 100%;
    margin-top: 20px;
}
`

const ProductBox = ({ product }) => {

  const dispatch = useDispatch();
  const cartId = useSelector(store => store.cartReducer.cartId)

  const handleAddToCartClick = (event) => {
    //TODO: move to cartReducer.js

    const options = {
      method: 'POST',
      headers: {
        cartId: cartId
      },
    };

    fetch(API_URL('cart/add-item?itemId=' + product.productId), options) //option is needed otherwise is going to be getMetod
      .then((res) => res.json())
      .then((data) => {
        dispatch(cartReducer.actions.setItems(data.items))
      });
  }

  return (
    <>

      <ProductContainer>
        <Link to={`/product/${product.productId}`}>
          <HoverImage src={product.img1} hoverSrc={product.img2} style={{ width: '100%' }} alt="product" />
        </Link>
        <ProductText>
          {product.productName}
        </ProductText>
        <ProductPrice>
          £{product.price}
        </ProductPrice>
        <StyledBuyButton
          variant="contained" 
          onClick={() => handleAddToCartClick(product)}
        >
          Buy
        </StyledBuyButton>
      </ProductContainer>
    </>
  );
};

export default ProductBox;