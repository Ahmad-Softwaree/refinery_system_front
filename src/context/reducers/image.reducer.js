import { CONTEXT_TYPEs } from "..";

export const imageState = {
  petImg: "",
  productImg: "",
};

export const imageReducer = (state = imageState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONTEXT_TYPEs.PET_IMAGE:
      return {
        ...state,
        petImg: payload,
      };
    case CONTEXT_TYPEs.PRODUCT_IMAGE:
      return {
        ...state,
        productImg: payload,
      };

    default:
      return state;
  }
};
