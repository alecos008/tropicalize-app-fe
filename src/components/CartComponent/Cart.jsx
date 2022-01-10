import React, { useState } from "react";
import ShippingForm from "../ProductsComponents/ShippingForm";
import "./Cart.css";
import { AiOutlineDelete } from "react-icons/ai";

function Cart({ cart, isShowingCart, setShowingCart }) {
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

  const handleShippingForm = () => {
    setShowShippingForm(!isShowingShippingForm);
    setShowingCart(!isShowingCart);
  };

  return (
    <div className="cart-div">
      {cart.length <= 0 && "Your Cart is Empty"}

      {cart.map((item) => {
        return (
          <div key={item._id} className="item-card">
            <h4>{item.name}</h4>
            <div className="item-qty-dlt">
              <input
                className="qty-input"
                type="number"
                name={[item.name]}
                onChange={handleChange}
                min={0}
                placeholder="Enter Desired Quantity"
              />
              <AiOutlineDelete />
            </div>
          </div>
        );
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
          cart={cart}
          whiteUnits={whiteUnits}
          blackUnits={blackUnits}
        />
      )}
    </div>
  );
}

export default Cart;
