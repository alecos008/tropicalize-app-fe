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
    state.cart[name].quantity = value;
  };
  //

  //
  console.log(state.cart);
  if (state.cart !== undefined && state.cart !== null) {
    return (
      <div className="cart-div">
        {Object.values(state.cart).map((item) => {
          if (item !== null) {
            return (
              <div key={item.id}>
                <h4>{item.name}</h4>
                <Image src={item.image} size="tiny" />
              </div>
            );
          } else {
            return "";
          }
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
