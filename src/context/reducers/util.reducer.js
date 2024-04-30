import { CONTEXT_TYPEs } from "..";

export const utilState = {
  operation: false,
  method: null,
  id: null,
  type: null,
  image: "",
  data: null,
};

export const utilReducer = (state = utilState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONTEXT_TYPEs.REFRESH_UTIL:
      return {
        ...state,
        operation: false,
        method: null,
        id: null,
        type: null,
        image: "",
      };
    case CONTEXT_TYPEs.OPERATION:
      return {
        ...state,
        operation: !state.operation,
        method: payload?.method,
        id: payload?.id,
        image: payload?.image,
        type: payload?.type,
        data: payload?.data,
      };

    default:
      return state;
  }
};
