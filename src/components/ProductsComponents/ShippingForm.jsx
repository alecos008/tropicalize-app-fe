import React, { useState } from "react";
import axios from "axios";
import Payment from "./Payment";

function ShippingForm({ cart, whiteUnits, blackUnits }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [isShowingPaymentForm, setShowPaymentForm] = useState(false);
  const [isReadyToBuy, setIsReadyToBuy] = useState(false);
  const [isShowingShippingForm, setShowShippingForm] = useState(true);
  const [isShowingSuccesMessage, setShowSuccessMessage] = useState(false);
  const [isReadyToSubmitShippingInfo, setReadyToSubmitShippingInfo] =
    useState(false);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "streetAddress":
        setStreetAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "state":
        setState(value);
        break;
      case "zipcode":
        setZipcode(value);
        break;
      case "telephone":
        setTelephone(value);
        break;
    }

    name && email && telephone && streetAddress && city && state && zipcode
      ? setReadyToSubmitShippingInfo(true)
      : setReadyToSubmitShippingInfo(false);
  };

  const handleCheckout = (items, blackQty, whiteQty) => {
    let whiteUnits = Number(whiteQty);
    let blackUnits = Number(blackQty);

    axios
      .post(
        `${process.env.REACT_APP_API_HOST}/payments/create-payment-intent`,
        { items, blackUnits, whiteUnits }
      )
      .then((result) => {
        setShowPaymentForm(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleShippingInfo = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_HOST}/shipping/collect-address`, {
        name,
        email,
        telephone,
        streetAddress,
        city,
        state,
        zipcode,
      })
      .then((newOrder) => {
        console.log(newOrder);
      })
      .catch((err) => {
        console.log(err);
      });

    setShowShippingForm(false);
    setIsReadyToBuy(true);
    setName("");
    setEmail("");
    setTelephone("");
    setStreetAddress("");
    setCity("");
    setState("");
    setZipcode("");
    setShowSuccessMessage(true);
  };

  const handleSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  return (
    <div>
      {isShowingShippingForm && (
        <form onSubmit={handleShippingInfo}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="email@address"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="+1 xxx xxx xxxx"
            name="telephone"
            value={telephone}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Street Address"
            name="streetAddress"
            value={streetAddress}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            value={city}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            value={state}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Zip-code"
            name="zipcode"
            value={zipcode}
            onChange={handleChange}
          />
          <button disabled={!isReadyToSubmitShippingInfo} type="submit">
            Submit Shipping Information
          </button>
        </form>
      )}

      {isShowingSuccesMessage && (
        <div>
          <p>
            You have successfully submited your shipping information. Please
            proceed to checkout below.
          </p>
          <button onClick={handleSuccessMessage}>Hide Message</button>
        </div>
      )}

      <button
        onClick={() => handleCheckout(cart, blackUnits, whiteUnits)}
        disabled={!isReadyToBuy}
      >
        Proceed to Checkout
      </button>

      {isShowingPaymentForm && (
        <Payment cart={cart} whiteUnits={whiteUnits} blackUnits={blackUnits} />
      )}
    </div>
  );
}

export default ShippingForm;
