import React, { useState } from "react";
import ShippingForm from "./ShippingForm";

function Cart({ cart }) {
  const [whiteUnits, setWhiteUnits] = useState(0);
  const [blackUnits, setBlackUnits] = useState(0);
  const [isQtySelected, setIsQtySelected] = useState(false);
  const [isShowingShippingForm, setShowShippingForm] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    if (name.includes("White")) {
      setWhiteUnits(value);
    } else if (name.includes("Black")) {
      setBlackUnits(value);
    }

    whiteUnits || blackUnits ? setIsQtySelected(true) : setIsQtySelected(false);
  };

  return (
    <div>
      <h2>Here is your cart</h2>
      {cart.map((item) => {
        return (
          <div key={item._id}>
            <h5>{item.name}</h5>
            <input
              type="number"
              name={[item.name]}
              onChange={handleChange}
              min={0}
              placeholder="Enter Desired Quantity"
            />
          </div>
        );
      })}

      {!isQtySelected &&
        "Please select the desired order quantity before proceeding"}
      {!isShowingShippingForm && (
        <button
          disabled={!isQtySelected}
          onClick={() => setShowShippingForm(!isShowingShippingForm)}
        >
          Go to Shipping Form
        </button>
      )}

      {isShowingShippingForm && (
        <ShippingForm
          cart={cart}
          whiteUnits={whiteUnits}
          blackUnits={blackUnits}
        />
      )}
    </div>
  );
}

export default Cart;
