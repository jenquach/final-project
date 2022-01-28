import React from "react"
import { BrowserRouter, Routes, } from "react-router-dom"
import "./App.css"

import Footer from "./components/Footer"
import ResponsiveAppBar from "./components/Navbar"
import StartPage from "./pages/StartPage"

function App() {
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
