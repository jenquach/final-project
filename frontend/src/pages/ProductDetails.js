import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Typography } from "@mui/material"
import styled from "styled-components"
import { API_URL } from "../utils/urls"
import { addToCart } from "../reducers/CartReducer"
import { useDispatch, useSelector } from "react-redux"
import Loader from "../components/Loader"

const ProductDetailsWrapper = styled.div`
  background: #f0f0f0;
  min-height: 100vh;
  margin: 50px auto 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 667px) {
  flex-direction: column;
}
`
const Image = styled.img`
  width: 60%;
  margin: 30px 60px 40px 40px;
  max-width: 380px;
  min-width: 280px;
  border: 1px solid #ddd;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: 667px) {
    max-width: 280px;
}
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 300px;

  @media (max-width: 667px) {
    max-width: 280px;
}
`
const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const ThumbImage = styled.img`
  width: 60px;
  height: auto;
  margin: 7px 5px 20px 0;
  cursor: pointer;
  border: 1px solid #ddd;
  object-fit: cover;
  border-radius: 5px;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const BuyButton = styled.button`
  background-color: #b3975d;
  height: 40px;
  border-radius: 2px;
  margin-bottom: 20px;
  max-width: 130px; 
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
    max-width: 280px;
}
`
const BackButton = styled.button`
  max-width: 280px; 
  height: 30px;
  color: grey;
  border: 1px solid;
  border-radius: 5px;
  color: grey;
  cursor: pointer;
  font-size: small;
  justify-content: center;
  align-items: center;
  font-family: 'Nunito';
  &:hover {
    background-color: #e0e0e0;
  }
  &:focus {
    background-color: #e0e0e0;
  }
`

const ProductDetails = () => {
  const dispatch = useDispatch()
  const cartId = useSelector(store => store.cartReducer.cartId)

  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const [productImage, setProductImage] = useState({})
	const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    fetch(API_URL(`product/${productId}`))
      .then((res) => res.json())
      .then((json) => {
          setProduct(json)
          setProductImage(json.img1)
        })
      .finally(() => setLoading(false))
  }, [setProduct, setProductImage, productId])


  const BackToAllProducts = () => {
    navigate('/products')
  }

  const handleAddToCartClick = (product) => addToCart(dispatch, cartId, product)

  const setImage = (imageUrl) => setProductImage(imageUrl)


  return (
    <>
    {loading && <Loader />}
      {product && (
        <ProductDetailsWrapper>
          <Image src={productImage} alt={product.productName} />
          <Details>
            <Typography variant="h5" color="text.secondary" component="div" fontFamily="nunito">
              {product.category}
            </Typography>
            <Typography component="div" variant="h5" color="#b3975d" textTransform="uppercase" fontWeight="bold" fontFamily="nunito">
              {product.productName}
            </Typography>
            <Typography variant="h6" color="#b3975d" component="div" marginBottom={2} fontWeight="bold" fontFamily="nunito">
              £{product.price}.00
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" fontFamily="nunito">
              {product.desc}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" fontFamily="nunito">
              {product.condition}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" fontFamily="nunito">
              Size: {product.size}
            </Typography>
            <FlexContainer>
              <ThumbImage onClick={() => setImage(product.img1)} src={product.img1} alt={product.productName} />
              <ThumbImage onClick={() => setImage(product.img2)} src={product.img2} alt={product.productName} />
            </FlexContainer>
            <ButtonContainer>
              <BuyButton onClick={() => handleAddToCartClick(product)} variant="contained" sx={{ maxWidth: "130px", fontSize: "large" }}>
                BUY
              </BuyButton>
              <BackButton className="back-btn" variant="text" size="small" onClick={BackToAllProducts}>
                BACK TO ALL PRODUCTS
              </BackButton>
            </ButtonContainer>
          </Details>
        </ProductDetailsWrapper>
      )}
    </>
  )
}

export default ProductDetails
