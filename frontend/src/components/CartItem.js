import React, { useEffect, useState } from 'react';
import { API_URL } from '../utils/urls';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { cartReducer } from '../reducers/CartReducer';
import styled from "styled-components"
import ProductBox from './ProductBox';

const ProductImageCart = styled.div`
justify-content: center;
left: 50%;
  `
const ProductTextCart = styled.span`
font-size: 0.85em;
font-family: 'Nunito Sans', sans-serif;
justify-content: center;
span {
  font-weight:700;
}
`

const StyledRemoveButton = styled(Button)`
  color: #A9CDCE;
  font-size: 1.2em;
  justify-content: center;
  font-family: 'Nunito Sans', sans-serif;
  &:hover {
    background-color: transparent;
  }
`

const CartItem = (props) => {
  const [product, setProduct] = useState(null)
  const cartId = useSelector(store => store.cartReducer.cartId)

  const dispatch = useDispatch()

  useEffect(() => {
    fetch(API_URL('product/' + props.itemId)) //option is needed otherwise is going to be getMetod
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const handleRemoveItem = (event) => {
    //TODO: move to cartReducer.js
    const options = {
      method: 'POST',
      headers: {
        cartId: cartId,
      },
    };

    fetch(API_URL('cart/remove-item?itemId=' + product.productId), options) //option is needed otherwise is going to be getMetod
      .then((res) => res.json())
      .then((data) => {
        dispatch(cartReducer.actions.setItems(data.items))
      });
  }

  return (
    <>
      {product &&
        (
          <>
          <ProductImageCart>
            <img src={product.img1} height={100} alt="product"></img>
            </ProductImageCart>
            <ProductTextCart>
            {product.productName} <span>£{product.price}</span>
            </ProductTextCart>
            <div>
            </div>
            <StyledRemoveButton
              endIcon={<DeleteIcon />}
              onClick={() => handleRemoveItem(product)}
              size="large"
            >
            </StyledRemoveButton>
         
          </>
        )}
    </>
  );
}

export default CartItem;