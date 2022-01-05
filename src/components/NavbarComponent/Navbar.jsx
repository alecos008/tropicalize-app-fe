import React, { useState } from "react";
import Cart from "../ProductsComponents/Cart";

function Navbar({ cart }) {
  const [showingCart, setShowingCart] = useState(false);

  const handleShowCart = () => {
    setShowingCart(!showingCart);
  };
  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/animations">Animations</a>
        <a href="/products">Shop</a>
        <a href="/map">Map</a>
        <button onClick={handleShowCart}>
          {cart.length > 0 ? `${cart.length}items in cart` : ""}
        </button>
      </nav>

      {showingCart && <Cart cart={cart} />}
    </div>
  );
}

export default Navbar;
