import React, { useEffect, useState } from 'react';
import { API_URL } from '../utils/urls';
import { useSelector, useDispatch } from 'react-redux';
import { cartReducer } from '../reducers/CartReducer';
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


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

const TrashButton = styled.button`
background-color: transparent;
  border-radius: 2px;
  max-width: 130px; 
  font-size: large;
  font-size: 1.2em;
  justify-content: center;
  border: none;
  color: white;
  font-family: 'Short Stack', cursive;
  cursor: pointer;
`


const CartItem = (props) => {
  const [product, setProduct] = useState(null)
  const cartId = useSelector(store => store.cartReducer.cartId)

  const itemId = props.itemId;

  const dispatch = useDispatch()

  useEffect(() => {
    fetch(API_URL('product/' + itemId)) //option is needed otherwise is going to be getMetod
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [setProduct, itemId]);

  const handleRemoveItem = (event) => {
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
            <TrashButton
            onClick={() => handleRemoveItem(product)}>
              <FontAwesomeIcon icon={faTrash} color="#b3975d"/>
          </TrashButton>       
          </>
        )}
    </>
  );
}

export default CartItem;