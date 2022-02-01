import React from "react";
import { cartReducer } from "../reducers/CartReducer";
import { useDispatch, useSelector } from 'react-redux';
import { ListItem, List, Box } from "@mui/material";
import CartItem from "./CartItem";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { API_URL } from '../utils/urls';
import { Button } from '@mui/material';


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
    <Box>
      <List>
        {!cartIsEmpty && cartItems.map((item) =>
        (
          <ListItem key={item.itemId}>
            <CartItem itemId={item.itemId}></CartItem>
          </ListItem>
        ))
        }
        {!cartIsEmpty && (
          <Button
            variant="filled"
            color="primary"
            endIcon={<RemoveCircleIcon />}
            onClick={() => handleClearCart()}
          >
            Remove all items
          </Button>
        )}
        {cartIsEmpty && (
          <span>Your cart is empty</span>
        )}
      </List>

    </Box>
  )
}

export default MiniCart