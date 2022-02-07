import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { API_URL } from '../utils/urls';
import { useState } from 'react';

const OrderConfirmedWrapper = styled.section`
  background: #f0f0f0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

`
const OrderTextThankYou = styled.div`
  max-width: 700px;
  padding: 100px 10px 30px 10px;
  font-size: 2em;
  font-family: 'Nunito', sans-serif;
span {
    font-weight: 700;
  }
@media (max-width: 667px) {
  padding: 80px 10px 30px 10px;
}
@media (min-width: 1440px) {
  padding: 0 80px 30px 80px;
}
`
const OrderParagraph = styled.div`
max-width: 700px;
font-weight: 500;
padding: 30px 10px 30px 10px;
font-family: 'Nunito', sans-serif;
@media (max-width: 667px) {
padding: 10px 10px 0px 10px;
}
@media (min-width: 1440px) {
padding: 0 80px 30px 80px;
}
`

const OrderTextID = styled.div`
  max-width: 700px;
  font-weight: 700;
  padding: 30px 10px 30px 10px;
  font-family: 'Nunito', sans-serif;
@media (max-width: 667px) {
  padding: 80px 10px 30px 10px;
}
@media (min-width: 1440px) {
  padding: 0 80px 30px 80px;
}
`

const OrderConfirmed = () => {

const [order, setOrder] = useState(null)
const { orderId } = useParams()

    useEffect(() => {
        fetch(API_URL(`order/${orderId}`))
          .then((res) => res.json())
          .then((json) => {
            setOrder(json)
          })
      }, [setOrder])
    

    return (
        <>
        {order && (
        <OrderConfirmedWrapper>
            <OrderTextThankYou>
            Thank your <span>{order.customer.name}</span> for letting pre-loved clothes find a new fit and love.
            </OrderTextThankYou>
            <OrderParagraph>We will send you a confirmation regarding your shipping to your 
              email shortly.</OrderParagraph>
            <OrderTextID> Your order id is: {order.orderId}</OrderTextID>
            </OrderConfirmedWrapper>
            )}
        </>
    );
}

export default OrderConfirmed;