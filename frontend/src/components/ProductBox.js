import React from "react"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"
import { useDispatch, useSelector } from 'react-redux';
import { cartReducer } from "../reducers/CartReducer";
import styled from "styled-components"
import { Grid } from "@mui/material";
import HoverImage from "react-hover-image";

import { API_URL } from "../utils/urls"



const ProduxtText = styled.text`
font-size: 1.2em;
font-family: 'Nunito Sans', sans-serif;
span {
  color: #A9CDCE;
  font-size: 1em;
  font-weight:700;
}
`

const ProductTextWrapper = styled.div`
position: absolute;
bottom:0;
text-align: center;
`

const StyledBuyButton = styled(Button)`
  background-color: #A9CDCE;
  border-radius: 2px;
  margin-bottom: 20px;
  width: 270px; 
  font-size: large;
  font-family: 'Nunito Sans', sans-serif;
  &:hover {
    background-color: #CFE8E0;
  }
  &:focus {
    background-color: #CFE8E0;
  }
  @media (max-width: 667px) {
    max-width: 280px;
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
       <Grid item xs={1} sm={1} md={1} key={product.productId} paddingTop={0} height='450px' style={{ position: 'relative'}}>
        <Link to={`/product/${product.productId}`}> <HoverImage src={product.img1} hoverSrc={product.img2} style={{ width: '100%', maxHeight: '320px' }} alt="product"/></Link>
        <ProductTextWrapper>
        <ProduxtText>{product.productName} <span>£{product.price}</span></ProduxtText>
       
        <StyledBuyButton 
       variant="contained" sx={{ maxWidth: "270px", fontSize:"large" }}
        onClick={()=> handleAddToCartClick(product)}
        >
        Buy
      </StyledBuyButton>
      </ProductTextWrapper>
      </Grid>
      </>
    );
};

export default ProductBox;