import { authApi } from "@/lib/config/api.config";
import { generateToast } from "@/lib/functions";
import { URLs } from "@/lib/url";

export const getOils = async (toast, pageParam) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_OILS}?pages=${pageParam}`);

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
export const getAllOils = async (toast) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_ALL_OILS}`);

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
export const getOil = async (toast, id) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_OIL}/${id}`);

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

export const addOil = async (form) => {
  try {
    const {
      data: { data },
    } = await authApi.put(`${URLs.ADD_OIL}`, form);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateOil = async (id, form) => {
  try {
    const {
      data: { data },
    } = await authApi.put(`${URLs.UPDATE_OIL}/${id}`, form);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteOil = async (id) => {
  try {
    const {
      data: { data },
    } = await authApi.delete(`${URLs.DELETE_OIL}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
