import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
import { useState, useContext, useEffect } from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/NavbarComponent/NavbarSemantic";
import { Context } from "./ContextAPI/AppProvider";
import { Image } from "semantic-ui-react";
//
import Products from "./screens/Products";
import Cart from "./screens/Cart";
import HomeScreen from "./screens/home";
import CheckoutScreen from "./screens/CheckoutScreen";
//
function App() {
  const { state, getProducts } = useContext(Context);
  //

  useEffect(() => {
    getProducts();
  }, []);

  const [activeSideBar, setActiveSideBar] = useState(false);
  function activeHelper(e) {
    e.preventDefault();
    setActiveSideBar(!activeSideBar);
  }

  /*   console.log("state from app", state); */
  //
  if (state) {
    return (
      <div className="App">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            minHeight: "10vh",
            background: "black",
          }}
        >
          <Image
            src="https://res.cloudinary.com/alecos008/image/upload/v1642968054/Titulo_Solo_jcdag0.png"
            className="logo-letters"
            size={"small"}
          />
          <Image
            src="https://res.cloudinary.com/alecos008/image/upload/c_crop,h_305,w_343/v1642285227/pina_sin_titulo_vector_qs6klb.png"
            className="logo-piney"
            size="small"
          />

          <Icon
            name="bars"
            size="big"
            style={{
              padding: "1rem",
              marginRight: "3rem",
              marginBottom: "2rem",
              color: "rgba(240, 46, 170, 1)",
            }}
            onClick={activeHelper}
          />
        </div>
        <Navbar
          activeHelper={activeHelper}
          activeSideBar={activeSideBar}
          AppContent={
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/products" element={<Products />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutScreen />} />
              {/* <Route path="/shipping-form" element={<ShippingForm />} /> */}
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
