import React from 'react';

import Footer from "./components/Footer"
import ResponsiveAppBar from "./components/Navbar"
import ProductList from './components/ProductList';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DummyStartPage from './components/DummyStartPage';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <BrowserRouter>
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
