import React, { useState } from "react";
import Cart from "../CartComponent/Cart";
import "./Navbar.css";
import { AiOutlineShoppingCart, AiFillAppstore } from "react-icons/ai";
import NavbarMenu from "./NavbarMenu";

function Navbar({ cart }) {
  const [showingCart, setShowingCart] = useState(false);
  const [showingMenu, setShowingMenu] = useState(false);

  const handleShowCart = () => {
    setShowingCart(!showingCart);
  };

  const handleMenu = () => {
    setShowingMenu(!showingMenu);
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
        <a href="/animations" className="nav-link">
          Animations
        </a>
        <a href="/products" className="nav-link">
          Shop
        </a>
        <a href="/map" className="nav-link">
          Map
        </a>
        {cart.length > 0 && (
          <span className="cart">
            <AiOutlineShoppingCart onClick={handleShowCart} size={25} />
            {cart.length}
          </span>
        )}

        <AiFillAppstore size={25} onClick={handleMenu} />

        {showingMenu && <NavbarMenu />}
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
