import { CONTEXT_TYPEs } from "..";

export const authState = {
  user: null,
  token: null,
};

export const authReducer = (state = authState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONTEXT_TYPEs.SET_USER:
      return {
        ...state,
        user: payload?.user,
        token: payload?.user,
      };

    case CONTEXT_TYPEs.REMOVE_USER:
      return {
        ...state,
        user: null,
        token: null,
        profile: null,
      };
    default:
      return state;
  }
};
