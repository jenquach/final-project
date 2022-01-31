import { createSlice } from '@reduxjs/toolkit';

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