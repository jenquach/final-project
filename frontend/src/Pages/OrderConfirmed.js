import React from 'react';
import { useParams } from "react-router-dom"

const OrderConfirmed = () => {

    const { orderId } = useParams()
    return (
        <>
        <br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            Order Confirmed {orderId}
        </>
    );
}

export default OrderConfirmed;