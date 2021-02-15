import * as types from "../actions/types";

const initialState = {
  galleries: [],
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
    case types.IMAGE_UPLOADED:
      return {
        ...state,
        galleries: [payload, ...state.galleries],
      };
    case types.IMAGE_DELETED:
      console.log(payload);
      return {
        ...state,
        galleries: state.galleries.filter(
          (gallery) => gallery._id !== payload._id
        ),
      };
    case types.ALL_GALLERY_LOADED_FAIL:
    case types.IMAGE_UPLOAD_FAIL:
    case types.IMAGE_DEL_FAIL:
      return state;
    default:
      return state;
  }
}
