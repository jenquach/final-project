import React from "react";
import { cartReducer } from "../reducers/CartReducer";
import { useDispatch, useSelector } from 'react-redux';


const MiniCart = () => {
  const cartItems = useSelector(store => store.cartReducer.items);
  return (
    <>
      {cartItems.map((item) =>
        (<span key={item.itemId}>{item.itemId}</span>)

      )}
    </>
  )
}

export default MiniCart