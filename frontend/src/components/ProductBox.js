import React from "react"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import { useDispatch, useSelector } from 'react-redux';
import { cartReducer } from "../reducers/CartReducer";

import { API_URL } from "../utils/urls"

const ProductBox = ({ product }) => {

  const dispatch = useDispatch();
  const cartId = useSelector(store => store.cartReducer.cartId)

  const handleAddToCartClick = (event) => {
    //TODO: move to cartReducer.js

    const options = {
      method: 'POST',
      headers: {
        cartId: cartId
      },
    };

    fetch(API_URL('cart/add-item?itemId=' + product.productId), options) //option is needed otherwise is going to be getMetod
      .then((res) => res.json())
      .then((data) => {
        dispatch(cartReducer.actions.setItems(data.items))
      });
}

    return (<>
        <Link to={`/product/${product.productId}`}><img src={product.img1} height={300} alt="product"></img></Link>
        <br />
        {product.productName} £{product.price}
        <br></br>
        <Button 
        variant="outlined" 
        color="primary" 
        endIcon={<AddShoppingCartIcon />}
        onClick={()=> handleAddToCartClick(product)}
        >
        Buy
      </Button>
    </>);

};

export default ProductBox;