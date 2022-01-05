import React, { useState, useEffect } from "react";
import axios from "axios";

function Products({ addToCart }) {
  //* Defining State
  /* const [isLoading, setIsLoading] = useState(false); */
  const [products, setProducts] = useState([]);

  /*   const [showingCart, setShowingCart] = useState(false); */

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

  /*  const showCart = () => {
    setShowingCart(!showingCart);
  }; */

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <div>
      {/* {showingCart && <CheckoutForm items={cart} />} */}

      {products.map((product) => {
        return (
          <div className="product-card" key={product._id}>
            <h2>{product.name}</h2>
            <img src={product.image} height="100px" alt="Grinder" />
            <h2>{product.price} $</h2>
            <button
              onClick={() => {
                addToCart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
