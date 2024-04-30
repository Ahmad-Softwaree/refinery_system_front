import { CONTEXT_TYPEs } from "..";

export const uiState = {
  type: "",
  id: "",
  data: null,
  profile: false,
  manager: false,
  employee: false,
  customer: false,
  pet: false,
  product: false,
  veterinary: false,
  clinic: false,
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
        manager: false,
        employee: false,
        customer: false,
        pet: false,
        veterinary: false,
        product: false,
        clinic: false,
      };
    case CONTEXT_TYPEs.CLINIC_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        clinic: !state.clinic,
      };
    case CONTEXT_TYPEs.PROFILE_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        profile: !state.profile,
      };
    case CONTEXT_TYPEs.VETERINARY_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        veterinary: !state.veterinary,
      };
    case CONTEXT_TYPEs.MANAGER_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        manager: !state.manager,
      };
    case CONTEXT_TYPEs.EMPLOYEE_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        employee: !state.employee,
      };
    case CONTEXT_TYPEs.PET_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        pet: !state.pet,
      };

    case CONTEXT_TYPEs.CUSTOMER_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        customer: !state.customer,
      };
    case CONTEXT_TYPEs.PRODUCT_FORM:
      return {
        ...state,
        type: payload?.type,
        id: payload?.id,
        data: payload?.data,
        product: !state.product,
      };

    default:
      return state;
  }
};
