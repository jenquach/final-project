import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../reducers/CartReducer";
import styled from "styled-components"
import HoverImage from "react-hover-image";

const ProductContainer = styled.div`
margin-bottom: 25px;
background-color: white;
grid-column: span 1;
text-align: center;
  @media (min-width: 767px) {
  grid-column: span 1;
}
`

const ProductText = styled.span`
font-size: 1.1em;
font-family: 'Nunito Sans', sans-serif;
text-align: center;
`

const ProductPrice = styled.span`
padding-left: 10px;
color: #b3975d;
font-size: 1em;
font-weight:700;
`

const BuyButton = styled.button`
  background-color: #b3975d;
  height: 40px;
  border-radius: 2px;
  margin-top: 15px;
  margin-bottom: 20px;
  width: 80%; 
  font-size: large;
  border: none;
  color: white;
  font-family: 'Short Stack', cursive;
  cursor: pointer;
  &:hover {
    background-color: #90763E;
  }
  &:focus {
    background-color: #90763E;
  }
  @media (max-width: 667px) {
    max-width: 100%;
    margin-top: 20px;
}
`


const ProductBox = ({ product }) => {

  const dispatch = useDispatch();
  const cartId = useSelector(store => store.cartReducer.cartId)
  const handleAddToCartClick = (product) => addToCart(dispatch, cartId, product);

  return (
    <>
      <ProductContainer>
        <Link to={`/product/${product.productId}`}>
          <HoverImage src={product.img1} hoverSrc={product.img2} style={{ width: '100%' }} alt="product" />
        </Link>
        <ProductText>
          {product.productName}
        </ProductText>
        <ProductPrice>
          £{product.price}
        </ProductPrice>
        <BuyButton
          variant="contained"
          onClick={() => handleAddToCartClick(product)}
        >
          BUY
        </BuyButton>
      </ProductContainer>
    </>
  );
};

export default ProductBox;