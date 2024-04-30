import { authApi } from "@/lib/config/api.config";
import { generateToast } from "@/lib/functions";
import { URLs } from "@/lib/url";

export const getPets = async (toast, pageParam) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_PETS}?pages=${pageParam}`);
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

export const getPet = async (toast, id) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_PET}/${id}`);

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

export const addPet = async (form) => {
  try {
    const {
      data: { data },
    } = await authApi.post(`${URLs.ADD_PET}`, form);
    return data;
  } catch (error) {
    throw error;
  }
};
export const updatePet = async (id, form) => {
  try {
    const {
      data: { data },
    } = await authApi.put(`${URLs.UPDATE_PET}/${id}`, form);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deletePet = async (id) => {
  try {
    const {
      data: { data },
    } = await authApi.delete(`${URLs.DELETE_PET}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
