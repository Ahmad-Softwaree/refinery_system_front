import { authApi } from "@/lib/config/api.config";
import { generateToast } from "@/lib/functions";
import { URLs } from "@/lib/url";

export const getCustomers = async (toast, pageParam) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_CUSTOMERS}?pages=${pageParam}`);

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

export const getCustomer = async (toast, id) => {
  try {
    const {
      data: { data },
    } = await authApi.get(`${URLs.GET_CUSTOMER}/${id}`);

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

export const addCustomer = async (form) => {
  try {
    const {
      data: { data },
    } = await authApi.post(`${URLs.ADD_CUSTOMER}`, form);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateCustomer = async (id, form) => {
  try {
    const {
      data: { data },
    } = await authApi.put(`${URLs.UPDATE_CUSTOMER}/${id}`, form);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteCustomer = async (id) => {
  try {
    const {
      data: { data },
    } = await authApi.delete(`${URLs.DELETE_CUSTOMER}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
