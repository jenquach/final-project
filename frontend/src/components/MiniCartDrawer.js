import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useDispatch, useSelector } from 'react-redux';
import MiniCart from "./MiniCart";
import { cartReducer } from "../reducers/CartReducer";

const MiniCartDrawer = () => {
  const dispatch = useDispatch()
  const ShowCartDrawer = useSelector(store => store.cartReducer.cartIsOpen);
    const toggle = (open) => (event) =>  { 
      console.log(open)

      if (open === false) {
        dispatch(cartReducer.actions.setMiniCartDrawerVisible(false))
      }
    }
return(
<SwipeableDrawer
open={ShowCartDrawer}
anchor={'right'}
onClose={toggle(false)}
onOpen={toggle(true)}
>
  Your cart
<MiniCart>

</MiniCart>
</SwipeableDrawer>

)
}


export default MiniCartDrawer