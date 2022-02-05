import React from 'react';
import styled from 'styled-components';

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

const FormHeader = styled.text`
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



const CheckoutForm = () => {
  return (
    <>
      <FormWrapper>
        <Form>
          <Label>
          <FormHeader> Add shipping information below</FormHeader>
            <Input type="text" 
            name="name" 
            placeholder="Name*" 
            required/>
            <Input type="email" 
            placeholder="Email*" 
            name="email" 
            required/>
            <Input 
            type="text" 
            placeholder="Street*" 
            name="street" 
            required/>
            <Input 
            type="text" 
            placeholder="Zip*" 
            name="zip" 
            required/>
            <Input 
            type="text" 
            placeholder="City*" 
            name="city" 
            required/>
            <Input 
            type="number" 
            placeholder="Phone" 
            name="phone"/>
          </Label>
        </Form>
      </FormWrapper>
    </>

  )
}

export default CheckoutForm