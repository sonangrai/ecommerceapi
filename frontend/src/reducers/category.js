import * as types from "../actions/types";

const initialState = {
  categories: [],
  categoryfetching: true,
};

export default function category(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.ALL_CATEGORY_LOADED:
      return {
        ...state,
        categories: payload.data,
        categoryfetching: false,
      };
    case types.ALL_CATEGORY_LOADED_FAIL:
      return state;
    default:
      return state;
  }
}
