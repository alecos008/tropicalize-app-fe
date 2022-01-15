import { useState, useContext, useEffect } from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/NavbarComponent/NavbarSemantic";
import { Context } from "./ContextAPI/AppProvider";
//
import Products from "./components/ProductsComponents/Products";
import ShippingForm from "./components/ProductsComponents/ShippingForm";
import 'semantic-ui-css/semantic.min.css'
//
function App() {
  const { state, clearCart } = useContext(Context);
  //
  const [cart, setCart] = useState([]);
  //
  useEffect(() => {
    clearCart();
  }, []);
  //
  const addToCart = (item) => {
    cart.includes(item) ? console.log(item) : setCart([item, ...cart]);
  };
  // console.log(state)
  return (
    <div className="App">
      <Navbar
        cart={cart}
        AppContent={
          <Routes>
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
}

export default App;
