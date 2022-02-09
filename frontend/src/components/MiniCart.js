import React from "react";
import { cartReducer } from "../reducers/CartReducer";
import { useDispatch, useSelector } from 'react-redux';
import { ListItem, List, Box } from "@mui/material";
import CartItem from "./CartItem";
import { API_URL } from '../utils/urls';
import styled from "styled-components"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const EmptyCartText = styled.h3`
  font-size: 1.5em;
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
`;

const RemoveAllButton = styled.button`
  border: none;
  color: #00838f;
  margin-left: 45px;
  background-color: #CFE8E0;
  border-radius: 2px;
  padding: 10px;
  margin-top: 30px;
  max-width: 400px; 
  font-weight: 700;
  font-size: 1em;
  justify-content: center;
  font-family: 'Short Stack', cursive;
  cursor: pointer;
  @media (max-width: 667px) {
    max-width: 280px;
}
`

const GoToCheckoutButton = styled(Link)`
display: block;
text-align: center;
text-decoration: none;
font-weight: 700;
justify-content: center;
margin-left: auto;
margin-right: auto;
margin-top: 30px;
background-color: #CFE8E0;
padding: 10px;
border-radius: 2px;
margin-bottom: 20px;
max-width: 200px; 
font-size: 1em;
border: none;
color: #00838f;
cursor: pointer;
font-family: 'Short Stack', cursive;
`


const MiniCart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(store => store.cartReducer.items)
  const cartIsEmpty = cartItems.length === 0
  const cartId = useSelector(store => store.cartReducer.cartId)


  const handleClearCart = () => {
    //TODO: move to cartReducer.js
    const options = {
      method: 'POST',
      headers: {
        cartId: cartId,
      },
    };

    fetch(API_URL('cart/remove-all-items'), options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(cartReducer.actions.setItems(data.items))
      });
  }

  return (
    <Box
    height="30%"
    width={300}
            >
      <List>
        {!cartIsEmpty && cartItems.map((item) =>
        (
          <ListItem key={item.itemId}>
            <CartItem itemId={item.itemId}></CartItem>
          </ListItem>
        ))
        }
        {!cartIsEmpty && (
          <>
          <RemoveAllButton 
          onClick={() => handleClearCart()}>
          REMOVE ALL ITEMS&nbsp;
          <FontAwesomeIcon icon={faTrash} color="#00838f"/>
          </RemoveAllButton> 
          <br></br>
         <GoToCheckoutButton 
           variant="contained" 
           component={Link} to="/checkout">
           GO TO CHECKOUT
         </GoToCheckoutButton>
         </>
        )}
        
        {cartIsEmpty && (
          <EmptyCartText>Your cart is empty</EmptyCartText>
        )}
      </List>

    </Box>
  )
}

export default MiniCart