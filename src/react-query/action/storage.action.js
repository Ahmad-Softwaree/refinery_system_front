import { authApi } from "@/lib/config/api.config";
import { generateToast } from "@/lib/functions";
import { URLs } from "@/lib/url";

export const getStorages = async (toast, pageParam) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_STORAGES}?pages=${pageParam}`);

    return data;
  } catch (error) {
    const errors = generateToast(error);
    return errors.forEach((err) => {
      toast({
        title: err.title,
        description: err.description,
      });
    });
  }
};

export const getStorage = async (toast, id) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_STORAGE}/${id}`);

    return data;
  } catch (error) {
    const errors = generateToast(error);
    return errors.forEach((err) => {
      toast({
        title: err.title,
        description: err.description,
      });
    });
  }
};

export const addStorage = async (form) => {
  try {
    const {
      data: { data },
    } = await authApi.post(`${URLs.ADD_STORAGE}`, form);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateStorage = async (id, form) => {
  try {
    const {
      data: { data },
    } = await authApi.put(`${URLs.UPDATE_STORAGE}/${id}`, form);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteStorage = async (id) => {
  try {
    const {
      data: { data },
    } = await authApi.delete(`${URLs.DELETE_STORAGE}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
