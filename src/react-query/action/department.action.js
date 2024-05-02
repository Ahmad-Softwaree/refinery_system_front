import { authApi } from "@/lib/config/api.config";
import { generateToast } from "@/lib/functions";
import { URLs } from "@/lib/url";

export const getDepartments = async (toast, pageParam) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_DEPARTMENTS}?pages=${pageParam}`);

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
export const getAllDepartments = async (toast) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_ALL_DEPARTMENTS}`);

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
export const getDepartment = async (toast, id) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_DEPARTMENT}/${id}`);

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

export const addDepartment = async (form) => {
  try {
    const {
      data: { data },
    } = await authApi.put(`${URLs.ADD_DEPARTMENT}`, form);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateDepartment = async (id, form) => {
  try {
    const {
      data: { data },
    } = await authApi.put(`${URLs.UPDATE_DEPARTMENT}/${id}`, form);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteDepartment = async (id) => {
  try {
    const {
      data: { data },
    } = await authApi.delete(`${URLs.DELETE_DEPARTMENT}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
