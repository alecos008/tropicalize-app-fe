import React, { useState, useEffect, useContext } from "react";
import { Context } from "../ContextAPI/AppProvider";
import { Image } from "semantic-ui-react";
import axios from "axios";
import "./Products.css";

function Products() {
  const { state, addOne } = useContext(Context);
  //
  useEffect(() => {}, []); //
  //https://res.cloudinary.com/alecos008/image/upload/c_crop,h_305,w_343/v1642285227/pina_sin_titulo_vector_qs6klb.png

  /*   console.log("state from products", state); */

  if (state.products !== undefined && state.cart !== undefined) {
    return (
      <div className="product-screen">
        <div className="figure-container mobile-hidden">
          <Image
            src="https://res.cloudinary.com/alecos008/image/upload/v1642968688/Logo_copy_tc63hp.png"
            size="big"
          />
        </div>

        <div className="products-container desktop-scrollable">
          {state.products.map((product) => {
            return (
              <div className="product-card" key={product._id}>
                <h2>{product.name}</h2>
                <div>
                  <img
                    src={product.image1}
                    className="product-img"
                    alt="Grinder"
                  />
                </div>
                <button
                  onClick={() => addOne(state.cart, product.type)}
                  className="product-btn"
                >
                  {console.log(state)}
                  {state.cart[product.type].quantity > 0
                    ? "Item added - Select Quantity in Cart"
                    : "Add Item "}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h1
          style={{
            minHeight: "90vh",
            minWidth: "90vw",
            textAlign: "center",
            textAlignVertical: "center",
          }}
        >
          Loading ...{" "}
        </h1>
      </>
    );
  }
}

export default Products;
