import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
import { useState, useContext, useEffect } from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/NavbarComponent/NavbarSemantic";
import { Context } from "./ContextAPI/AppProvider";
//
import Products from "./screens/Products";
import Cart from "./screens/Cart";
import HomeScreen from "./screens/home";
//
function App() {
  const { state, cleanCart } = useContext(Context);
  // 
  useEffect(() => {
    cleanCart()
  }, [])
  //
  const [activeSideBar, setActiveSideBar] = useState(false);
  function activeHelper(e){
    e.preventDefault()
    setActiveSideBar(!activeSideBar)
  }
  //
  if (state) {
    console.log('State from app js', state)
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
          <Icon name="bars" size="big" style={{ padding: "1rem" , marginRight:'3rem'}} onClick={activeHelper} />
        </div>
        <Navbar 
          activeHelper={activeHelper}
          activeSideBar={activeSideBar}
          AppContent={
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route
                path="/products"
                element={<Products  />}
              />
              
              <Route path="/cart" element={<Cart />} />
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
