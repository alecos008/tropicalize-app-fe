import createDataContext from "./CreateDataContext";
//
const appReducer = (state, action) => {
  switch (action.type) {
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
const clearCart = (dispatch) => {
  return async () => {
    //
    //  Get Local Storage cart
    //
    dispatch({
      type: "get_products",
      payload: { fail: true, white: 0, black: 0, tropi: 0, piney: 0 },
    });
  };
};
//
const addOne = (dispatch) => {
  return async (fullobject, grinderType) => {
    //
    //  Set Local Storage cart
    //
    fullobject[`${grinderType}`] += 1; 
    let data = fullobject;
    try {
      dispatch({
        type: "get_products",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "get_products",
        payload: { fail: true },
      });
    }
  };
};
//
export const { Context, Provider } = createDataContext(
  appReducer,
  {
    clearCart,
    addOne,
  },
  []
);
