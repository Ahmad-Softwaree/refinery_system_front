import { CONFIGs } from "../enum";

const WEB = CONFIGs.BACKEND_HOST;
const API = `${CONFIGs.BACKEND_HOST}/api`;

export const URLs = {
  //AUTH
  GET_AUTH: `${API}/auth/auth`,
  LOGIN: `${API}/auth/login`,
  REGISTER: `${API}/auth/register`,

  UPDATE_PROFILE: `${API}/auth/profile`,

  //EMPLOYEE

  GET_EMPLOYEES: `${API}/employee`,
  GET_ALL_EMPLOYEES: `${API}/employee/all`,
  GET_EMPLOYEE: `${API}/employee`,
  UPDATE_EMPLOYEE: `${API}/employee`,
  DELETE_EMPLOYEE: `${API}/employee`,

  //DEPARTMENT

  GET_DEPARTMENTS: `${API}/department`,
  GET_ALL_DEPARTMENTS: `${API}/department/all`,
  GET_DEPARTMENT: `${API}/department`,
  ADD_DEPARTMENT: `${API}/department`,
  UPDATE_DEPARTMENT: `${API}/department`,
  DELETE_DEPARTMENT: `${API}/department`,

  //MACHINE

  GET_MACHINES: `${API}/machine`,
  GET_MACHINE: `${API}/machine`,
  ADD_MACHINE: `${API}/machine`,
  UPDATE_MACHINE: `${API}/machine`,
  DELETE_MACHINE: `${API}/machine`,

  //OIL

  GET_OILS: `${API}/oil`,
  GET_ALL_OILS: `${API}/oil/all`,
  GET_OIL: `${API}/oil`,
  ADD_OIL: `${API}/oil`,
  UPDATE_OIL: `${API}/oil`,
  DELETE_OIL: `${API}/oil`,

  //STORAGE

  GET_STORAGES: `${API}/storage`,
  GET_STORAGE: `${API}/storage`,
  ADD_STORAGE: `${API}/storage`,
  UPDATE_STORAGE: `${API}/storage`,
  DELETE_STORAGE: `${API}/storage`,

  //ORDER

  GET_ORDERS: `${API}/order`,
  GET_ORDER: `${API}/order`,
  ADD_ORDER: `${API}/order`,
  UPDATE_ORDER: `${API}/order`,
  DELETE_ORDER: `${API}/order`,

  //DELIVERY

  GET_DELIVERIES: `${API}/delivery`,
  GET_DELIVERY: `${API}/delivery`,
  ADD_DELIVERY: `${API}/delivery`,
  UPDATE_DELIVERY: `${API}/delivery`,
  DELETE_DELIVERY: `${API}/delivery`,

  //CONFIG

  GET_CONFIG: `${API}/config/config`,
  GET_PETS_RECEIPT: `${API}/config/pet_receipt`,
  GET_PRODUCTS_RECEIPT: `${API}/config/product_receipt`,
};
