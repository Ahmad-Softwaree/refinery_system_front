import { CONTEXT_TYPEs } from "..";

export const uiState = {
  type: "",
  id: "",
  data: null,
  profile: false,
  employee: false,
  department: false,
  machine: false,
  oil: false,
  storage: false,
  order: false,
  delivery: false,
};

export const uiReducer = (state = uiState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONTEXT_TYPEs.REFRESH_UI:
      return {
        ...state,
        type: "",
        id: "",
        data: null,
        profile: false,
        employee: false,
        department: false,
        machine: false,
        oil: false,
        storage: false,
        order: false,
        delivery: false,
      };

    case CONTEXT_TYPEs.PROFILE_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        profile: !state.profile,
      };

    case CONTEXT_TYPEs.DEPARTMENT_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        department: !state.department,
      };
    case CONTEXT_TYPEs.EMPLOYEE_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        employee: !state.employee,
      };
    case CONTEXT_TYPEs.MACHINE_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        machine: !state.machine,
      };
    case CONTEXT_TYPEs.OIL_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        oil: !state.oil,
      };
    case CONTEXT_TYPEs.STORAGE_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        storage: !state.storage,
      };
    case CONTEXT_TYPEs.ORDER_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        order: !state.order,
      };
    case CONTEXT_TYPEs.DELIVERY_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        delivery: !state.delivery,
      };

    default:
      return state;
  }
};
