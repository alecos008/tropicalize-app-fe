import React, { useState, useContext, useEffect } from "react";
import "./Cart.css";
import { Context } from "../ContextAPI/AppProvider";
//

function Cart() {
  //
  const { state, generateCartFromStorage } = useContext(Context);
  const [isQtySelected, setIsQtySelected] = useState(false);

  //
  useEffect(() => {
    generateCartFromStorage();
  }, []);
  //

  const handleChange = ({ target: { name, value } }) => {
    if (name.includes("White")) {
      // setWhiteUnits(value);
    } else if (name.includes("Black")) {
      // setBlackUnits(value);
    } else if (name.includes("Piney")) {
      // setPineyUnits(value);
    } else if (name.includes("Tropi")) {
      // setTropiUnits(value);
    }

    state.cart.white || state.cart.black || state.cart.piney || state.cart.tropi
      ? setIsQtySelected(true)
      : setIsQtySelected(false);
  };
  //

  //
  console.log(" from cart", state);
  if (state.cart !== undefined && state.cart.hasProducts) {
    return (
      <div className="cart-div">
        <div className="item-card"></div>

        <a className="btn-link" href="/checkout">
          Go To Checkout
        </a>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>You have no items in your shit</h1>
      </div>
    );
  }
}

export default Cart;
