import React, { useState, useContext, useEffect } from "react";
import "./Cart.css";
import { Context } from "../ContextAPI/AppProvider";
import { Image } from "semantic-ui-react";
//

function Cart() {
  //
  const { state, generateCartFromStorage } = useContext(Context);

  //
  useEffect(() => {
    generateCartFromStorage();
  }, []);

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
  };
  //

  //

  if (state.cart !== undefined) {
    return (
      <div className="cart-div">
        {Object.values(state.cart).map((item) => {
          return (
            <div>
              <h4>{item.name}</h4>
              <Image src={item.image} size="tiny" />
              <input type="number" min={0} value={item.quantity} />
            </div>
          );
        })}

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
