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
    case types.GALLERY_LOADED:
      return {
        ...state,
        gallery: payload,
        loading: false,
      };
    case types.IMAGE_UPLOADED:
      return {
        ...state,
        gallery: [payload, ...state.gallery],
      };
    case types.GALLERY_LOADED_FAIL:
    case types.ALL_GALLERY_LOADED_FAIL:
    case types.IMAGE_UPLOAD_FAIL:
      return state;
    default:
      return state;
  }
}
