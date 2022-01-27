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
    case "edit_cart":
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
      white: JSON.parse(localStorage.getItem("white")),
      black: JSON.parse(localStorage.getItem("black")),
      tropi: JSON.parse(localStorage.getItem("tropi")),
      piney: JSON.parse(localStorage.getItem("piney")),
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
    //
    localStorage.setItem(
      `${grinderType}`,
      JSON.stringify(fullObj[grinderType])
    );
    //
    let data = fullObj;
    //
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
const editQuantity = (dispatch) => {
  return async (fullObj, grinderType) => {
    console.log("fullObj:", fullObj, "grinderType: ", grinderType);
    let data = fullObj;
    console.log("data:", data);
    try {
      dispatch({
        type: "edit_cart",
        payload: "data",
      });
    } catch {
      dispatch({
        type: "edit_cart",
        payload: { fail: true, hasProducts: false },
      });
    }
  };
};
export const { Context, Provider } = createDataContext(
  appReducer,
  {
    cleanCart,
    generateCartFromStorage,
    getProducts,
    addOne,
    editQuantity,
  },
  {
    cart: {
      white: {
        _id: "61aba1622e2b3c45099951e9",
        name: "Tropicalize Silicone-Coated White Grinder",
        image:
          "https://res.cloudinary.com/alecos008/image/upload/v1635680349/White_Grinder_cm7vca.jpg",
        quantity: 0,
        type: "white",
      },
      black: {
        _id: "61aba0e02e2b3c45099951e8",
        name: "Tropicalize Silicone-Coated Black Grinder",
        image:
          "https://res.cloudinary.com/alecos008/image/upload/v1635680327/Black_Grinder_gyyzr5.jpg",
        quantity: 0,
        type: "black",
      },
      piney: {
        _id: "61dd6e6de8e6c9ece63c93ec",
        name: "Tropicalize Small Piney Bio-Grinder",
        image:
          "https://res.cloudinary.com/alecos008/image/upload/v1641850646/ALL_yklipo.png",
        quantity: 0,
        type: "piney",
      },
      tropi: {
        _id: "61dd6eeae8e6c9ece63c93ed",
        name: "Tropicalize Small Tropi Bio-Grinder",
        image:
          "https://res.cloudinary.com/alecos008/image/upload/v1641850720/All_sk8uml.png",
        quantity: 0,
        type: "tropi",
      },
    },
  }
);
