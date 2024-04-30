import axios from "axios";
import { getCookie } from "./cookie.config";
import { CONFIGs } from "../enum";
export const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const authApi = axios.create({
  baseURL: "/api",
  headers: {
    common: {
      Authorization: `Bearer ${getCookie(CONFIGs.COOKIE_NAME)}`,
    },
    "Content-Type": "application/json",
    Authorization: `Bearer ${getCookie(CONFIGs.COOKIE_NAME)}`,
  },
});
