import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"

import "./App.css"

import {v4 as uuidv4 } from 'uuid'

import Signup from './components/Signup'
import Signin from './components/Signin'
import ResponsiveAppBar from "./components/Navbar"
import Footer from "./components/Footer"

import user from "./reducers/user"
import profile from "./reducers/profile"
import StartPage from "./pages/StartPage"
import ProductList from './components/ProductList';

const reducer = combineReducers({
	user: user.reducer,
	profile: profile.reducer,
})

const store = configureStore({ reducer })

useEffect(() => {
  if (localStorage.getItem("cartId"))
  return
  localStorage.setItem("cartId", uuidv4());
  }, []);

export const App = () => {
  return (
    <Provider store={store}> 
      <BrowserRouter>
      <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            {/* <Route path="/my-profile" element={<MyProfile />} /> */}
            <Route path="/products" element={<ProductList />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  )
}

export default App;
