import createDataContext from "./CreateDataContext";
import axios from "axios";
//
const appReducer = (state, action) => {
  switch (action.type) {
    case "get_cart":
      return {
        ...state,
        cart: action.payload,
      };
    case "get_products":
      return {
        ...state,
        products: action.payload,
      };
    case "clear_cart":
      return {
        cart: action.payload,
      };
    default:
      return state;
  }
};
//
const cleanCart = (dispatch) => {
  return async (fullObj, type) => {
    //
    //  Delete Local Storage cart
    //
    let res = {
      fail: false,
      [type]: {
        fullObj,
        quantity: 0,
      },
    };
    //
    localStorage.setItem("hasProducts", 0);
    localStorage.setItem("white", 0);
    localStorage.setItem("black", 0);
    localStorage.setItem("tropi", 0);
    localStorage.setItem("piney", 0);
    //
    dispatch({
      type: "clear_cart",
      payload: res,
    });
  };
};
//
const getProducts = (dispatch) => {
  return async () => {
    //
    //  Delete Local Storage cart
    //
    const data = await axios
      .get(`${process.env.REACT_APP_API_HOST}/products/all`, {
        withCredentials: true,
      })
      .then((response) => {
        return [...response.data.products];
      })
      .catch((err) => {
        console.log(err);
      });
    //
    try {
      dispatch({
        type: "get_products",
        payload: data,
      });
    } catch (err) {
      console.log("Error heree ", err);
    }
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
        type: "get_cart",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "get_cart",
        payload: { fail: true, hasProducts: false },
      });
    }
  };
};
//
const addOne = (dispatch) => {
  return async (fullObj, grinderType) => {
    //

    fullObj[grinderType].quantity += 1;

    let data = fullObj;
    console.log("data:", data, "grinderType:", grinderType);
    try {
      dispatch({
        type: "get_cart",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "get_cart",
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
    getProducts,
    addOne,
  },
  {
    cart: {
      white: {
        quantity: 0,
      },
      black: {
        quantity: 0,
      },
      piney: {
        quantity: 0,
      },
      tropi: {
        quantity: 0,
      },
    },
  }
);
