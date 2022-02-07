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
const BackButton = styled.button`
  max-width: "240px"; 
  padding: "40px";
  border: 1px solid;
  border-radius: "5px";
  color: grey;
  cursor: "pointer";
  font-size: "small";
`

const NotFound = () => {
  const navigate = useNavigate();

  const BackToAllProducts = () => {
    navigate('/products')
  }

return (
    <Wrapper404>
    <h2 className="404-text">404 - Not Found!</h2>
    <BackButton className="back-btn-404" onClick={BackToAllProducts}> 
      Go back to all products
    </BackButton>  
    </Wrapper404>
)
}

export default NotFound