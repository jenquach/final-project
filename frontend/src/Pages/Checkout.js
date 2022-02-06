import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import CheckoutCart from "../components/CheckoutCart";
import CheckoutForm from "../components/CheckoutForm";
import { cartReducer, fetchCart } from "../reducers/CartReducer";
import { useEffect } from "react";


const CheckoutPageGrid = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
background: #f0f0f0;
min-height:100vh;
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
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCart())
    dispatch(cartReducer.actions.setMiniCartDrawerVisible(false))
  }, []);

  const cartItems = useSelector(store => store.cartReducer.items)
  const cartId = useSelector(store => store.cartReducer.cartId)


  return (
    <CheckoutPageGrid>
      <CheckoutContainer>
        <CheckoutCart cartItems={cartItems}></CheckoutCart>
        <CheckoutForm cartId={cartId}></CheckoutForm>
      </CheckoutContainer>
    </CheckoutPageGrid>
  )
}

export default Checkout
