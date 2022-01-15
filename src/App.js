import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
import { useState, useContext, useEffect } from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/NavbarComponent/NavbarSemantic";
import { Context } from "./ContextAPI/AppProvider";
//
import Products from "./components/ProductsComponents/Products";
import ShippingForm from "./components/ProductsComponents/ShippingForm";
import HomeScreen from "./screens/home";
//
function App() {
  const { state, clearCart } = useContext(Context);
  //
  const [cart, setCart] = useState([]);
  const [activeSideBar, setActiveSideBar] = useState(false);
  function activeHelper(){
    setActiveSideBar(!activeSideBar)
  }
  //
  useEffect(() => {
    clearCart();
  }, []);
  //
  const addToCart = (item) => {
    cart.includes(item) ? console.log(item) : setCart([item, ...cart]);
  };
  // console.log(state)
  if (state) {
    return (
      <div className="App">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            minWidth: "100%",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            margin: "0 1rem",
            padding: "0 1rem",
          }}
        >
          <Icon name="bars" size="big" style={{ padding: "1rem" }} onClick={activeHelper} />
        </div>
        <Navbar
          cart={cart}
          activeHelper={activeHelper}
          activeSideBar={activeSideBar}
          AppContent={
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route
                path="/products"
                element={<Products addToCart={addToCart} cart={cart} />}
              />
              <Route path="/shipping-form" element={<ShippingForm />} />
            </Routes>
          }
        />
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
        <h1>Loading...</h1>
      </div>
    );
  }
}

export default App;
