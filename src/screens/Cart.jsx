import React, { useState, useContext } from "react";
import ShippingForm from "../components/ProductsComponents/ShippingForm";
import "./Cart.css";
import { AiOutlineDelete } from "react-icons/ai";
import { Context } from "../ContextAPI/AppProvider";

function Cart() {
  //
  const { state } = useContext(Context);
  const [isQtySelected, setIsQtySelected] = useState(false);
  const [isShowingShippingForm, setShowShippingForm] = useState(false);

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

  const handleShippingForm = () => {
    setShowShippingForm(!isShowingShippingForm);
    /*  handleShowCart(!isShowingCart); We use this to hide the cart, but hides the form as well */
  };
  //
  console.log("State from carts   ",state)
  //
  if (state.cart !== undefined && state.cart.hasProducts) {
    return (
      <div className="cart-div"> 

        {Object.keys(state.cart).map((item) => {
          if (item !== "fail" && item !== "hasProducts") {
            return (
              <div key={item} className="item-card">
                <h4>{item}</h4>
                <div className="item-qty-dlt">
                  {/* <input
                    className="qty-input"
                    type="number"
                    name={item}
                    onChange={handleChange}
                    min={0}
                    placeholder="Enter Desired Quantity"
                  /> */}
                  {/* <AiOutlineDelete /> */}
                  <p>{state.cart[`${state.cart[`${item}`]}`]}</p>
                </div>
              </div>
            );
          }
          return null;
        })}

        {/* {!isQtySelected &&
        "Please select the desired order quantity before proceeding"} */}
        {!isShowingShippingForm && (
          <button disabled={!isQtySelected} onClick={handleShippingForm}>
            Go to Shipping Form
          </button>
        )}

        {isShowingShippingForm && (
          <ShippingForm
            cart={state.cart}
            whiteUnits={state.cart.white}
            blackUnits={state.cart.black}
            tropiUnits={state.cart.tropi}
            pineyUnits={state.cart.piney}
          />
        )}
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
