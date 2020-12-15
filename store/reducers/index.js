const INITIAL_STATE = {
  homeProductList: ["deneme"],
  fetchErr:""
};
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "HOME_PRODUCTS":
      return {
        ...state,
        homeProductList: action.payload,
      };
    case "HOME_PRODUCTS_ERR":
      return { ...state, fetchErr: action.payload };
    default:
      return state;
  }
};
