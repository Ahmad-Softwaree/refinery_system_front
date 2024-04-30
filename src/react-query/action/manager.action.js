import { authApi } from "@/lib/config/api.config";
import { generateToast } from "@/lib/functions";
import { URLs } from "@/lib/url";

export const getManagers = async (toast, pageParam) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_MANAGERS}?pages=${pageParam}`);
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

export const getManager = async (toast, id) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_MANAGER}/${id}`);

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

export const makeEmployee = async (id) => {
  try {
    const {
      data: { data },
    } = await authApi.put(`${URLs.MAKE_EMPLOYEE}/${id}`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const makeHighManager = async (id) => {
  try {
    const {
      data: { data },
    } = await authApi.put(`${URLs.MAKE_HIGH_MANAGER}/${id}`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const updateManager = async (id, form) => {
  try {
    const {
      data: { data },
    } = await authApi.put(`${URLs.UPDATE_MANAGER}/${id}`, form);

    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteManager = async (id) => {
  try {
    const {
      data: { data },
    } = await authApi.delete(`${URLs.DELETE_MANAGER}/${id}`);

    return data;
  } catch (error) {
    throw error;
  }
};
