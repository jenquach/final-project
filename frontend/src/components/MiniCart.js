import React from "react";
import { cartReducer } from "../reducers/CartReducer";
import { useSelector } from 'react-redux';
import { ListItem, List, Box } from "@mui/material";
import CartItem from "./CartItem";


const MiniCart = () => {
  const cartItems = useSelector(store => store.cartReducer.items);
  return (
    <Box>
      <List>
      {cartItems.map((item) =>
        (
        <ListItem key={item.itemId}>
          <CartItem itemId={item.itemId}></CartItem>
        </ListItem>
        )
      )}
      </List>

    </Box>
  )
}

export default MiniCart