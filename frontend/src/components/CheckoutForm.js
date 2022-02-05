import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-column: span 12;
background: grey;
@media (min-width: 767px) {
  grid-column-start: 2;
  grid-column-end: 12;
  }
`

const CheckoutForm = () => {
  return (
    <>
      <FormWrapper>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
            Email:
            <input type="text" name="email" />
            Street:
            <input type="text" name="street" />
            Zip:
            <input type="text" name="zip" />
            City:
            <input type="text" name="city" />
          </label>
        </form>
      </FormWrapper>
    </>

  )
}

export default CheckoutForm