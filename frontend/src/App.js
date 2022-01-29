import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {v4 as uuidv4 } from 'uuid'

import Footer from "./components/Footer"
import ResponsiveAppBar from "./components/Navbar"
import StartPage from "./pages/StartPage"
import ProductList from './components/ProductList';
import { cartReducer } from './reducers/CartReducer';

const reducer = combineReducers({
  cartReducer: cartReducer.reducer,
});


// reducer: reducer; ES6 short syntas is reducer because the same name of variable and value. //reducer is the property that configuterStore expects from us
const store = configureStore({ reducer })


function App() {

  useEffect(() => {
    if (localStorage.getItem("cartId"))
    return
    localStorage.setItem("cartId", uuidv4());
    }, []);

  return (
    <>
      <Provider store={store}>
    <BrowserRouter>
      <ResponsiveAppBar />
        <Routes>
        <Route path="/" element={   <StartPage />} />
        <Route path="/products" element={<ProductList />} />
        </Routes>
    </BrowserRouter>
    <Footer />
    </Provider>
    </>
  )
}

export default App;
