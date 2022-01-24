import React, { useState, useContext, useEffect } from "react";
import ShippingForm from "../components/PaymentComponents/ShippingForm";
import "./Cart.css";
import { AiOutlineDelete } from "react-icons/ai";
import { Context } from "../ContextAPI/AppProvider";

function Cart() {
  //
  const { state, generateCartFromStorage } = useContext(Context);
  const [isQtySelected, setIsQtySelected] = useState(false);
  const [isShowingShippingForm, setShowShippingForm] = useState(false);

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

  const handleShippingForm = () => {
    setShowShippingForm(!isShowingShippingForm);
  };
  //
  console.log(" from cart", state);
  if (state.cart !== undefined && state.cart.hasProducts) {
    return (
      <div className="cart-div">
        <div className="item-card">
          {Object.keys(state.cart).map((item) => {
            if (item !== "fail" && item !== "hasProducts") {
              return (
                <>
                  <div key={item} className="item-qty-dlt">
                    <h3
                      style={{ textAlign: "center", margin: 0, color: "white" }}
                    >
                      {item}
                    </h3>
                    <h3
                      style={{ textAlign: "center", margin: 0, color: "white" }}
                    >
                      {state.cart[`${item}`]}
                    </h3>
                  </div>
                </>
              );
            }
            return null;
          })}
        </div>

        <a href="/checkout">Go To Checkout</a>
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
