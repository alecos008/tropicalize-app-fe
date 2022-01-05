import React, { useState } from "react";
import axios from "axios";
import Payment from "./Payment";

function Cart({ cart }) {
  const [whiteUnits, setWhiteUnits] = useState(null);
  const [blackUnits, setBlackUnits] = useState(null);
  const [isReadyToBuy, setIsReadyToBuy] = useState(false);
  const [isShowingPaymentForm, setShowPaymentForm] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    if (name.includes("White")) {
      setWhiteUnits(value);
    } else if (name.includes("Black")) {
      setBlackUnits(value);
    }

    whiteUnits || blackUnits ? setIsReadyToBuy(true) : setIsReadyToBuy(false);
  };

  const handleCheckout = (items, blackQty, whiteQty) => {
    axios
      .post(
        `${process.env.REACT_APP_API_HOST}/payments/create-payment-intent`,
        { items, blackQty, whiteQty }
      )
      .then((result) => {
        console.log(result);
        setShowPaymentForm(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Here is your cart</h2>
      {cart.map((item) => {
        return (
          <div key={item._id}>
            <h5>{item.name} - Enter Amount Below</h5>
            <input
              type="number"
              name={[item.name]}
              onChange={handleChange}
              min={0}
            />
          </div>
        );
      })}
      <button
        onClick={() => handleCheckout(cart, blackUnits, whiteUnits)}
        disabled={!isReadyToBuy}
      >
        Proceed to Checkout
      </button>
      {!isReadyToBuy
        ? "Please select a quantity to proceed with your order"
        : ""}

      {isShowingPaymentForm && (
        <Payment cart={cart} whiteUnits={whiteUnits} blackUnits={blackUnits} />
      )}
    </div>
  );
}

export default Cart;
