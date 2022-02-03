import React from "react"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"
import { useDispatch, useSelector } from 'react-redux';
import { cartReducer } from "../reducers/CartReducer";
import styled from "styled-components"

import { API_URL } from "../utils/urls"


const StyledBuyButton = styled(Button)`
  background-color: #A9CDCE;
  border-radius: 2px;
  margin-bottom: 20px;
  max-width: 130px; 
  font-size: large;
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
        <Link to={`/product/${product.productId}`}><img src={product.img1} height={250} alt="product"></img></Link>
        <br />
        {product.productName} £{product.price}
        <br></br>
        <StyledBuyButton 
       variant="contained" sx={{ maxWidth: "130px", fontSize:"large" }}
        onClick={()=> handleAddToCartClick(product)}
        >
        Buy
      </StyledBuyButton>
      </>
    );
};

export default ProductBox;