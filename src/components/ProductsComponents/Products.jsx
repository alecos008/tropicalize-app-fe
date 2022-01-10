import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";

function Products({ addToCart, cart }) {
  //* Defining State
  const [products, setProducts] = useState([]);

  const handleProducts = () => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/products/all`, {
        withCredentials: true,
      })
      .then((response) => {
        setProducts([...response.data.products]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <div className="products-div">
      {/* {showingCart && <CheckoutForm items={cart} />} */}

      {products.map((product) => {
        return (
          <div className="product-card" key={product._id}>
            <h2>{product.name}</h2>
            <div>
              <img src={product.image} height="100px" alt="Grinder" />
              <p>
                10 to 30 units = 10$<br></br> 31 to 70 units = 9$
                <br></br> 71 to 100 units = 8$<br></br> 101 to 499 units = 7$
                <br></br> 500 units or more = 6$
              </p>
            </div>
            <button
              onClick={() => {
                addToCart(product);
              }}
            >
              {cart.includes(product) ? "Item added" : "Add Item To Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
