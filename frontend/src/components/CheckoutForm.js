import React, { useState } from 'react';
import styled from 'styled-components';
import { API_URL } from '../utils/urls';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { cartReducer } from '../reducers/CartReducer';

const FormWrapper = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-column: span 12;
@media (min-width: 767px) {
  grid-column-start: 2;
  grid-column-end: 12;
  }
`
const Form = styled.div`
display: grid;
grid-column: span 12;
text-align: center;
@media (min-width: 767px) {
  grid-column-start: 4;
  grid-column-end: 10;
  }
`
const FormHeader = styled.span`
margin-top: 30px;
text-align: center;
max-width: 100%;
font-size: large;
font-family: 'Nunito', sans-serif;
`
const Label = styled.label`
display: grid;
grid-column: span 12;
text-align: center;
@media (min-width: 767px) {
  grid-column-start: 2;
  grid-column-end: 8;
  }
`
const Input = styled.input`
  max-width: 100%;
  margin: 20px 0 0 0;
  padding: 7px;
  background-color: white;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 16px;
  font-family: 'Nunito', sans-serif;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
    ::placeholder {
      font-size: 16px;
      color: grey;
}
`;

const CheckoutButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #A9CDCE;
  border-radius: 2px;
  margin-bottom: 30px;
  margin-top: 30px;
  max-width: 100%; 
  margin-right: auto;
  margin-left: auto;
  font-size: large;
  cursor: pointer;
  grid-column: 2/3;
  font-size: 1em;
  font-family: 'Nunito Sans', sans-serif;
  &:hover {
    background-color: #CFE8E0;
  }
  &:focus {
    background-color: #CFE8E0;
  }
  @media (max-width: 667px) {
    max-width: 100%;
    margin-top: 20px;
}
`
const Row = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column: span 12;
align-items: center;
`

const CheckoutForm = (props) => {

let navigate = useNavigate();

const dispatch = useDispatch()
  const cartId = props.cartId;
  const [isPosting, setIsPosting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');


  const onHandleConfirmCheckout = () => {
    setIsPosting(true);

    let data = {
      cartId,
      name,
      email,
      street,
      city,
      phone
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch(API_URL('order'), options)
      .then((res) => res.text())
      .then((data) => {
        setIsPosting(false);
        dispatch(cartReducer.actions.setItems([]))
        navigate('/orders/' + data);
      });
  }
  return (
    <>
      <FormWrapper>
        <Form>
          <Label>
            <FormHeader> Add shipping information below</FormHeader>
            <Input type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name*"
              required />
            <Input type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email*"
              name="email"
              required />
            <Input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Street*"
              name="street"
              required />
            <Input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="Zip*"
              name="zip"
              required />
            <Input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City*"
              name="city"
              required />
            <Input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              name="phone" />
          </Label>
        </Form>
      </FormWrapper>

      <Row>
        <CheckoutButton disabled={isPosting} onClick={onHandleConfirmCheckout} >Confirm order</CheckoutButton>
      </Row>
    </>
  )
}

export default CheckoutForm