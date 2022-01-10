import React, { useState } from "react";
import Cart from "../ProductsComponents/Cart";
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar({ cart }) {
  const [showingCart, setShowingCart] = useState(false);

  const handleShowCart = () => {
    setShowingCart(!showingCart);
  };
  return (
    <div>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/animations">Animations</a>
        <a href="/products">Shop</a>
        <a href="/map">Map</a>
        <AiOutlineShoppingCart onClick={handleShowCart} />
      </nav>

      {showingCart && <Cart cart={cart} />}
    </div>
  );
}

export default Navbar;
