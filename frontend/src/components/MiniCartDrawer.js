import React, { useEffect } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useDispatch, useSelector } from 'react-redux';
import MiniCart from "./MiniCart";
import { cartReducer, fetchCart } from "../reducers/CartReducer";
import { v4 as uuidv4 } from "uuid"


const MiniCartDrawer = () => {
  const dispatch = useDispatch()
  useEffect(() => { //here we generate a unique cartID if it doesn't already exist - save to localStorage

    const cartId = localStorage.getItem("cartId")
    if (!cartId) {
      cartId = uuidv4()
      localStorage.setItem("cartId", cartId);
    }
    dispatch(cartReducer.actions.setCartId(cartId))
  }, []);

  const ShowCartDrawer = useSelector(store => store.cartReducer.cartIsOpen);

  const toggle = (open) => (event) => {

    if (open === false) {
      dispatch(cartReducer.actions.setMiniCartDrawerVisible(false))
    }
  }

  useEffect(() => {
    if (ShowCartDrawer === true) {
      dispatch(fetchCart())
    }
  }, [ShowCartDrawer]);

  return (
    <SwipeableDrawer
      open={ShowCartDrawer}
      anchor={'right'}
      onClose={toggle(false)}
      onOpen={toggle(true)}
    >
      <MiniCart>

      </MiniCart>
    </SwipeableDrawer>

  )
}


export default MiniCartDrawer