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
    //
    // localStorage.removeItem("hasProducts");
    // localStorage.removeItem("white");
    // localStorage.removeItem("black");
    // localStorage.removeItem("tropi");
    // localStorage.removeItem("piney");
    //
    dispatch({
      type: "clear_cart",
      payload: res,
    });
  };
};
//

const generateCartFromStorage = (dispatch) => {
  return async () => {
    //
    //  Delete Local Storage cart
    //
    let data = {
      fail: false,
      hasProducts: Boolean(localStorage.getItem("hasProducts")),
      white: Number(localStorage.getItem("white")),
      black: Number(localStorage.getItem("black")),
      tropi: Number(localStorage.getItem("tropi")),
      piney: Number(localStorage.getItem("piney")),
    };
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
const addOne = (dispatch) => {
  return async (fullobject, grinderType) => {
    //
    fullobject[`${grinderType}`] += 1;
    fullobject.hasProducts = true;
    //
    //  Set Local Storage cart
    //
    localStorage.setItem(grinderType, fullobject[`${grinderType}`]);
    localStorage.setItem("hasProducts", true);
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
    generateCartFromStorage,
    addOne,
  },
  {
    cart: {
      fail: false,
      hasProducts: Boolean(localStorage.getItem("hasProducts")),
      white: Number(localStorage.getItem("white")),
      black: Number(localStorage.getItem("black")),
      tropi: Number(localStorage.getItem("tropi")),
      piney: Number(localStorage.getItem("piney")),
    },
  }
);
