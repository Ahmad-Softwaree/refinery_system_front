import { authApi } from "@/lib/config/api.config";
import { generateToast } from "@/lib/functions";
import { URLs } from "@/lib/url";

export const getVeterinaries = async (toast, pageParam) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_VETERINARIES}?pages=${pageParam}`);

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

export const getVeterinary = async (toast, id) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_VETERINARY}/${id}`);

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

export const updateVeterinary = async (id, form) => {
  try {
    const {
      data: { data },
    } = await authApi.put(`${URLs.UPDATE_VETERINARY}/${id}`, form);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteVeterinary = async (id) => {
  try {
    const {
      data: { data },
    } = await authApi.delete(`${URLs.DELETE_VETERINARY}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
