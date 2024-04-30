import axios from "axios";
import { authApi, api } from "./api.config";

export const setAxiosConfig = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    authApi.defaults.headers.common.Authorization = `Bearer ${token}`;
    authApi.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
    delete api.defaults.headers.Authorization;
    delete authApi.defaults.headers.common.Authorization;
    delete authApi.defaults.headers.Authorization;
  }
};
