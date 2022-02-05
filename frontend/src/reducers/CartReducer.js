import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../utils/urls';

const initialState = {
    items: [],
    cartId: null,
    cartIsOpen: false,
};

export const cartReducer = createSlice({
    name: 'cartReducer',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setCartId: (state, action) => {
            state.cartId = action.payload
        },
        setMiniCartDrawerVisible: (state, action) => {
            state.cartIsOpen = action.payload
        }
    }
});

export const fetchCart = () => {
    return (dispatch, getState) => {
        const cartId = getState().cartReducer.cartId

        const options = {
            method: 'GET',
            headers: {
                cartId: cartId,
            },
        };

        fetch(API_URL('cart'), options) //option is needed otherwise is going to be getMetod
            .then((res) => res.json())
            .then((data) => {
                dispatch(cartReducer.actions.setItems(data.items))
            })
    }
}

export const addToCart = (dispatch, cartId, product) => {
    const options = {
        method: 'POST',
        headers: {
            cartId: cartId
        },
    };

    fetch(API_URL('cart/add-item?itemId=' + product.productId), options) //option is needed otherwise is going to be getMetod
        .then((res) => res.json())
        .then((data) => {
            dispatch(cartReducer.actions.setItems(data.items))
        });
}

