import React, { useEffect, useState } from 'react';
import { API_URL } from '../utils/urls';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { cartReducer } from '../reducers/CartReducer';

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
            <img src={product.img1} height={80} alt="product"></img>
            {product.productName}
            £{product.price}
            <Button
              variant="filled"
              color="primary"
              endIcon={<RemoveCircleIcon />}
              onClick={() => handleRemoveItem(product)}
            >
              Remove
            </Button>
          </>
        )}
    </>
  );
}

export default CartItem;