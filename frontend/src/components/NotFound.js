import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"

const Wrapper404 = styled.div`
height: 100vh;
background: #f0f0f0;
display: flex;
text-align: center;
justify-content: center;
font-family: "nunito";
`

const NotFound = () => {
  const navigate = useNavigate();

  const BackToAllProducts = () => {
    navigate('/products')
  }

return (
  <>
    <Wrapper404>
    <h2 className="404-text">404 - Not Found!</h2>
    <button className="back-btn-404" onClick={BackToAllProducts}> 
      Go back to all products
    </button>  
    </Wrapper404>
  </>
)
}

export default NotFound