import React, { useEffect, useState } from "react"
/* import { useHistory } from "react-router-dom" */
import axios from "axios"

/* import { API_URL } from "../utils/urls" */
import styled from "styled-components"

const ProductDetailsWrapper = styled.div`
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2%;
    padding-top: 40px;
    padding-bottom: 60px;
    justify-content: space-evenly;
    justify-items: center; */
    color: blue;
    margin-top: 200px;
`

const ProductDetails = () => {
  const url =`https://final-project--api.herokuapp.com/product/:productId`
  const [details, setDetails] = useState({
    data: null,
    error: false,
  })
  
   useEffect(() => {
    setDetails({
      data: null,
      error: false
    })
    /* axios.get(API_URL${/product/:productId}) */
    axios.get(url) 
    .then(res => {
      setDetails({
        data: res.data,
        error: false
      })
    })
    .catch(() => {
      setDetails({
        data: null,
      error: true
      })
    })
  }, [url])
  
  let content = null

  if (details.error){
    content = <p>
      There was an error. Please refresh or try again later.
    </p>
  }

  if(details.data){
    content = <p>
      There are some product details data
    </p>
  }

    return( 
    <ProductDetailsWrapper>
    Product Details page
    {content}
    </ProductDetailsWrapper>
  )
}

export default ProductDetails
