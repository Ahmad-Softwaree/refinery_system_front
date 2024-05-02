import { authApi } from "@/lib/config/api.config";
import { generateToast } from "@/lib/functions";
import { URLs } from "@/lib/url";

export const getMachines = async (toast, pageParam) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_MACHINES}?pages=${pageParam}`);

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

export const getMachine = async (toast, id) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_MACHINE}/${id}`);

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

export const addMachine = async (form) => {
  try {
    const {
      data: { data },
    } = await authApi.put(`${URLs.ADD_MACHINE}`, form);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateMachine = async (id, form) => {
  try {
    const {
      data: { data },
    } = await authApi.put(`${URLs.UPDATE_MACHINE}/${id}`, form);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteMachine = async (id) => {
  try {
    const {
      data: { data },
    } = await authApi.delete(`${URLs.DELETE_MACHINE}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
