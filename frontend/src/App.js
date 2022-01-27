import React from "react"
import "./App.css"

import Footer from "./components/Footer"
import ResponsiveAppBar from "./components/Navbar"
import StartPage from "./pages/StartPage"

function App() {
  return (
    <>
    <ResponsiveAppBar />
    <StartPage />
    <Footer />
    </>
  )
}

export default App;
