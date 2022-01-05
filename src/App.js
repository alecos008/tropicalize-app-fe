import { Component, useState } from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/NavbarComponent/Navbar";

import Products from "./components/ProductsComponents/Products";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    cart.includes(item) ? console.log(item) : setCart([item, ...cart]);
  };

  return (
    <div className="App">
      <Navbar cart={cart} />
      <Routes>
        <Route path="/products" element={<Products addToCart={addToCart} />} />
      </Routes>
    </div>
  );
}

export default App;
