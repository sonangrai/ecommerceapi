import * as types from "../actions/types";

const initialstate = {
  products: [],
  isFetchingProduct: true,
};

export default function product(state = initialstate, action) {
  const { type, payload } = action;
  switch (type) {
    case types.ALL_PRODUCT_LOADED:
      return { ...state, products: payload, isFetchingProduct: false };
    case types.ALL_PRODUCT_LOADED_FAIL:
      return state;
    case types.PRODUCT_ADDED:
      return { ...state, products: [payload, ...state.products] };
    default:
      return state;
  }
}
