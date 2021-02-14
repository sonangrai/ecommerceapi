import * as types from "../actions/types";

const initialstate = {
  products: [],
  product: null,
  isFetchingProduct: true,
};

export default function product(state = initialstate, action) {
  const { type, payload } = action;
  switch (type) {
    case types.ALL_PRODUCT_LOADED:
      return { ...state, products: payload, isFetchingProduct: false };
    case types.PRODUCT_LOADED:
      return { ...state, product: payload };
    case types.ALL_PRODUCT_LOADED_FAIL:
    case types.PRODUCT_LOADED_FAIL:
      return state;
    case types.PRODUCT_ADDED:
      return { ...state, products: [payload, ...state.products] };
    case types.PRODUCT_UPDATED:
      return { ...state, product: payload };
    default:
      return state;
  }
}
