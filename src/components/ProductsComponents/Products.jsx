import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../ContextAPI/AppProvider";
import { Image } from "semantic-ui-react";
import axios from "axios";
import "./Products.css";

function Products({ addToCart, cart }) {
  const { state, addOne } = useContext(Context);
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
    <div className="products-container">
      <div className="products-div">
        {/* {showingCart && <CheckoutForm items={cart} />} */}
        <div
          className="products-container"
          style={{
            minWidth: 0,
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Image
            src="https://res.cloudinary.com/alecos008/image/upload/v1642285227/pina_sin_titulo_vector_qs6klb.png"
            size="huge"
          />
        </div>
        <div
          className="products-container scroller"
          style={{ minWidth: 0, flexDirection: "column" }}
        >
          {products.map((product) => {
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
      </div>
    </div>
  );
}

export default Products;
