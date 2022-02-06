import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { padding } from "@mui/system";
import styled from "styled-components"
import CheckoutCart from "../components/CheckoutCart";
import CheckoutForm from "../components/CheckoutForm";
import { cartReducer, fetchCart } from "../reducers/CartReducer";
import { useEffect } from "react";


const CheckoutPageGrid = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
background: #f0f0f0;
//height: 100vh;
`

const CheckoutContainer = styled.div`
padding-top: 50px;
grid-template-columns: repeat(12, 1fr);
grid-column: span 12;
display: grid;
  @media (min-width: 767px) {
  grid-column-start: 2;
  grid-column-end: 12;
  }
`


const Checkout = () => {
    const cartItems = useSelector(store => store.cartReducer.items)
    const cartIsEmpty = cartItems.length === 0
    const cartId = useSelector(store => store.cartReducer.cartId)
    const dispatch = useDispatch()

    let formValues = {};

    useEffect(() => {
        dispatch(fetchCart())
        dispatch(cartReducer.actions.setMiniCartDrawerVisible(false))
    }, []);


    return (
        <CheckoutPageGrid>
            <CheckoutContainer>
                <CheckoutCart cartItems={cartItems}></CheckoutCart>
                <CheckoutForm cartId={cartId}></CheckoutForm>
            </CheckoutContainer>
        </CheckoutPageGrid>

        //     <Box
        //     component="form"
        //     sx={{
        //       '& .MuiTextField-root': { m: 1, width: '25ch', padding: '100px'},
        //     }}
        //     noValidate
        //     autoComplete="off"
        //   >
        //     <div>
        //       <TextField
        //         required
        //         id="outlined-required"
        //         label="Required"
        //         defaultValue="Hello World"
        //       />
        //       </div>
        //       </Box>
    )
}

export default Checkout
