import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"

import Signup from './components/Signup'
import SignInSide from './components/SignInSide'
import ResponsiveAppBar from "./components/Navbar"
import Footer from "./components/Footer"

import user from "./reducers/user"
import profile from "./reducers/profile"

const reducer = combineReducers({
	user: user.reducer,
	profile: profile.reducer,
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}> 
      <BrowserRouter>
      <ResponsiveAppBar />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  )
}