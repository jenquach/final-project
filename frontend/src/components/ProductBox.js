import React from "react"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"
import { useDispatch, useSelector } from 'react-redux';
import { cartReducer } from "../reducers/CartReducer";
import styled from "styled-components"
import { Grid } from "@mui/material";

import { API_URL } from "../utils/urls"

const ProductTextWrapper = styled.div`
position: absolute;
bottom:0;
span{
width: 100%;
}
`


const StyledBuyButton = styled(Button)`
  background-color: #A9CDCE;
  border-radius: 2px;
  margin-bottom: 20px;
  max-width: 130px; 
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
       <Grid item xs={1} sm={1} md={1} key={product.productId} paddingTop={0} height='400px' style={{ position: 'relative'}}>
        <Link to={`/product/${product.productId}`}><img src={product.img1} style={{ width: '100%', maxHeight: '400px' }} alt="product"></img></Link>
        <ProductTextWrapper>
        <span>{product.productName}</span> £{product.price}
        <StyledBuyButton 
       variant="contained" sx={{ maxWidth: "130px", fontSize:"large" }}
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