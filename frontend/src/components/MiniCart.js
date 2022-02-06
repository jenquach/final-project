import React from "react";
import { cartReducer } from "../reducers/CartReducer";
import { useDispatch, useSelector } from 'react-redux';
import { ListItem, List, Box } from "@mui/material";
import CartItem from "./CartItem";
import DeleteIcon from '@mui/icons-material/Delete';
import { API_URL } from '../utils/urls';
import { Button } from '@mui/material';
import styled from "styled-components"
import { Link } from "react-router-dom";


const EmptyCartText = styled.h3`
  font-size: 1.5em;
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
`;

const StyledRemoveAllButton = styled(Button)`
  margin-left: 45px;
  background-color: #A9CDCE;
  border-radius: 2px;
  margin-top: 30px;
  max-width: 300px; 
  font-size: 1em;
  justify-content: center;
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

const StyledGoToCheckoutButton = styled(Button)`
  margin-left: 45px;
  background-color: #A9CDCE;
  border-radius: 2px;
  margin-top: 60px;
  max-width: 300px; 
  font-size: 1em;
  justify-content: center;
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
           <StyledRemoveAllButton 
           variant="contained" 
           sx={{ maxWidth: "300px" }} 
           endIcon={<DeleteIcon />} 
           onClick={() => handleClearCart()}>
           Remove all items
         </StyledRemoveAllButton>
         <StyledGoToCheckoutButton 
           variant="contained" 
           sx={{ maxWidth: "300px" }} 
           component={Link} to="/checkout">
           Go to checkout
         </StyledGoToCheckoutButton>
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