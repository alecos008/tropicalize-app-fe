import React, { useState, useEffect, useContext } from "react";
import { Context } from "../ContextAPI/AppProvider";
import { Image } from "semantic-ui-react";
import axios from "axios";
import "./Products.css";

function Products() {
  const { state, addOne, getProducts } = useContext(Context);
  //
  useEffect(() => {
    getProducts();
  }, []); //
  //
  if (state.cart !== undefined && state.products !== undefined) {
    return (
      <div className="product-screen">
        <div className="figure-container mobile-hidden">
          <Image
            src="https://res.cloudinary.com/alecos008/image/upload/v1642285227/pina_sin_titulo_vector_qs6klb.png"
            size="big"
          />
        </div>

        <div className="products-container desktop-scrollable">
          {state.cart !== null &&
            state.products.map((product) => {
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
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("Clicked ", state.cart[`${product.type}`]);
                      addOne(state.cart, product.type);
                    }}
                  >
                    {state.cart.hasProducts === true &&
                    state.cart[`${product.type}`] > 0
                      ? `Item Added ${state.cart[`${product.type}`]}`
                      : "Add item to cart"}
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
