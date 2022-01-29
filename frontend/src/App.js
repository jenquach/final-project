import React, { useEffect } from 'react';
import { BrowserRouter, Routes, } from "react-router-dom"
import "./App.css"

import {v4 as uuidv4 } from 'uuid'

import Footer from "./components/Footer"
import ResponsiveAppBar from "./components/Navbar"
import StartPage from "./pages/StartPage"

function App() {

  useEffect(() => {
    if (localStorage.getItem("cartId"))
    return
    localStorage.setItem("cartId", uuidv4());
    }, []);

  return (
    <>
    <BrowserRouter>
      <ResponsiveAppBar />
        <Routes>
        </Routes>
    </BrowserRouter>
    <StartPage />
    <Footer />
    </>
  )
}

export default App;
