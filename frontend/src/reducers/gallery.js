import * as types from "../actions/types";

const initialState = {
  galleries: [],
  gallery: null,
  loading: true,
};

export default function gallery(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.ALL_GALLERY_LOADED:
      return {
        ...state,
        galleries: payload,
        loading: false,
      };
    case types.GALLERY_LOADED_FAIL:
    case types.ALL_GALLERY_LOADED_FAIL:
      return state;
    default:
      return state;
  }
}
