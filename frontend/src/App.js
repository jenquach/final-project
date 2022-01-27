import React, { useEffect } from 'react';

import Footer from "./components/Footer"
import ResponsiveAppBar from "./components/Navbar"
import ProductList from './components/ProductList';

import {v4 as uuidv4 } from 'uuid'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DummyStartPage from './components/DummyStartPage';



function App() {

  useEffect(() => {
    if (localStorage.getItem("cartId"))
    return
    localStorage.setItem("cartId", uuidv4());
    }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<DummyStartPage />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
