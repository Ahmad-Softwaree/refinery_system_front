import { authApi } from "@/lib/config/api.config";
import { generateToast } from "@/lib/functions";
import { URLs } from "@/lib/url";

export const getDeliveries = async (toast, pageParam) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_DELIVERIES}?pages=${pageParam}`);

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

export const getDelivery = async (toast, id) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_DELIVERY}/${id}`);

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

export const addDelivery = async (form) => {
  try {
    const {
      data: { data },
    } = await authApi.post(`${URLs.ADD_DELIVERY}`, form);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateDelivery = async (id, form) => {
  try {
    const {
      data: { data },
    } = await authApi.put(`${URLs.UPDATE_DELIVERY}/${id}`, form);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteDelivery = async (id) => {
  try {
    const {
      data: { data },
    } = await authApi.delete(`${URLs.DELETE_DELIVERY}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
