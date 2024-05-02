import { authApi } from "@/lib/config/api.config";
import { generateToast } from "@/lib/functions";
import { URLs } from "@/lib/url";

export const getOrders = async (toast, pageParam) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_ORDERS}?pages=${pageParam}`);

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

export const getOrder = async (toast, id) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_ORDER}/${id}`);

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

export const addOrder = async (form) => {
  try {
    const {
      data: { data },
    } = await authApi.post(`${URLs.ADD_ORDER}`, form);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateOrder = async (id, form) => {
  try {
    const {
      data: { data },
    } = await authApi.put(`${URLs.UPDATE_ORDER}/${id}`, form);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteOrder = async (id) => {
  try {
    const {
      data: { data },
    } = await authApi.delete(`${URLs.DELETE_ORDER}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
