import React from "react"
import { BrowserRouter, Routes, } from "react-router-dom"
import "./App.css"

import Footer from "./components/Footer"
import ResponsiveAppBar from "./components/Navbar"
/* import StartPage from "./pages/StartPage" */

import ProductDetails from "./pages/ProductDetails"

function App() {
  return (
    <>
    <BrowserRouter>
      <ResponsiveAppBar />
        <Routes>
        </Routes>
    </BrowserRouter>
    {/* <StartPage /> */}
   <ProductDetails />
    <Footer />
    </>
  )
}

export default App;
