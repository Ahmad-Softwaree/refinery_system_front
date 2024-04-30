import { CONTEXT_TYPEs } from "@/context";
import { api, authApi } from "@/lib/config/api.config";
import { setAxiosConfig } from "@/lib/config/axios.config";
import { removeCookie, setCookie } from "@/lib/config/cookie.config";
import { CONFIGs } from "@/lib/enum";
import { generateToast } from "@/lib/functions";
import { URLs } from "@/lib/url";

export const getCurrentUser = async (toast, dispatch) => {
  try {
    const {
      data: { data },
    } = await authApi.get(URLs.GET_AUTH);
    dispatch({
      type: CONTEXT_TYPEs.SET_USER,
      payload: {
        user: data,
      },
    });
    return data;
  } catch (error) {
    removeCookie(CONFIGs.COOKIE_NAME);
    setAxiosConfig(null);
    dispatch({
      type: CONTEXT_TYPEs.REMOVE_USER,
    });
    const errors = generateToast(error);
    return errors.forEach((err) => {
      toast({
        title: err.title,
        description: err.description,
      });
    });
  }
};

export const login = async (form) => {
  try {
    const { data } = await api.post(URLs.LOGIN, form);
    return data;
  } catch (error) {
    throw error;
  }
};
export const register = async (form) => {
  try {
    const { data } = await authApi.post(URLs.REGISTER, form);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (form) => {
  try {
    const {
      data: { data },
    } = await authApi.put(URLs.UPDATE_PROFILE, form);
    return data;
  } catch (error) {
    throw error;
  }
};
export const logout = async () => {
  try {
    removeCookie(CONFIGs.COOKIE_NAME);
    setAxiosConfig(null);
    return;
  } catch (error) {
    throw error;
  }
};
