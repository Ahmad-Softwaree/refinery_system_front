import Cookies from "js-cookie";

export const setCookie = (name, token) => {
  return Cookies.set(name, token, {
    expires: 8640000,
    secure: true,
  });
};

export const removeCookie = (name) => {
  return Cookies.remove(name);
};

export const getCookie = (name) => {
  return Cookies.get(name);
};
