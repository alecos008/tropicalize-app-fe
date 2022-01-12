import React, { useState } from "react";
import Cart from "../CartComponent/Cart";
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
        <a href="/">
          <img
            className="logo-img"
            src="https://res.cloudinary.com/alecos008/image/upload/v1641843490/tropi-letters_fwyntk.png"
            alt="Tropicalize Logo"
          />
        </a>
        <a href="/animations">Animations</a>
        <a href="/products">Shop</a>
        <a href="/map">Map</a>
        <span>
          <AiOutlineShoppingCart onClick={handleShowCart} />
          {cart.length}
        </span>
      </nav>

      {showingCart && (
        <Cart
          cart={cart}
          showingCart={showingCart}
          handleShowCart={handleShowCart}
        />
      )}
    </div>
  );
}

export default Navbar;
