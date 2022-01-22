import createDataContext from "./CreateDataContext";
//
const appReducer = (state, action) => {
  switch (action.type) {
    case "clear_cart":
      return {
        cart: action.payload,
      };
    case "get_products":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
//
const cleanCart = (dispatch) => {
  return async () => {
    //
    //  Delete Local Storage cart
    //
    let res = {
      fail: false,
      hasProducts: false,
      white: 0,
      black: 0,
      tropi: 0,
      piney: 0,
    };
    if (localStorage.getItem("cart") !== null) {
      res = localStorage.getItem("cart");
    } else {
      localStorage.removeItem("cart");
    }
    //
    dispatch({
      type: "clear_cart",
      payload: res,
    });
  };
};
//
const addOne = (dispatch) => {
  return async (fullobject, grinderType) => {
    //
    fullobject[`${grinderType}`] += 1;
    fullobject.hasProducts = true;
    //
    //  Set Local Storage cart
    //
    localStorage.setItem("cart", fullobject);
    let data = fullobject;
    try {
      dispatch({
        type: "get_products",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "get_products",
        payload: { fail: true, hasProducts: false },
      });
    }
  };
};
//
export const { Context, Provider } = createDataContext(
  appReducer,
  {
    cleanCart,
    addOne,
  },
  {
    cart: localStorage.getItem("cart"),
  }
);
