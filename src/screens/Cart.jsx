import React, { useState, useContext, useEffect } from "react";
import { Context } from "../ContextAPI/AppProvider";
import { Image } from "semantic-ui-react";
import "./Cart.css";
//

function Cart() {
  const { state, generateCartFromStorage, editQuantity } = useContext(Context);

  //
  useEffect(() => {
    generateCartFromStorage();
  }, []);

  //

  //
  console.log("from cart", state.cart);
  if (state.cart !== undefined && state.cart !== null) {
    return (
      <div className="cart-div">
        {Object.values(state.cart).map((item) => {
          if (item !== null) {
            return (
              <div className="inner-cart" key={item.id}>
                <h4>{item.name}</h4>
                <div>
                  <Image src={item.image} size="tiny" />

                  <input
                    type="number"
                    placeholder="Enter Item Quantity"
                    name={item.type}
                    className="qty-input"
                  />
                </div>
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
