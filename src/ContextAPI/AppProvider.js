import createDataContext from "./CreateDataContext";
//
const appReducer = (state, action) => {
  switch (action.type) {
    case "get_products":
      return {
        products: action.payload,
      };
    case "clear_cart":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
//  
const getProductQuantity = (dispatch) => {
  return async (fullobject) => {
    try {
      // console.log(resJson);
      //   let data = JSON.parse(resJson.trim());
      let data = [];
      dispatch({
        type: "get_products",
        payload: data,
      });
    } catch (err) {
      // console.log(err);
      dispatch({
        type: "get_products",
        payload: { fail: true, created: false },
      });
    }
  };
};
//
const clearCart = (dispatch) => {
  return async () => {
    dispatch({
      type: "clear_cart",
      payload: { fail: true, white: 0, black: 0, tropi: 0, piney: 0 },
    });
  };
};
//
export const { Context, Provider } = createDataContext(
  appReducer,
  {
    getProductQuantity,
    clearCart,
  },
  []
);
