import { authApi } from "@/lib/config/api.config";
import { URLs } from "@/lib/url";

export const adopt = async (pet_id, customer_id) => {
  try {
    const {
      data: { data },
    } = await authApi.post(`${URLs.ADOPT}/${pet_id}/${customer_id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const buy = async (product_id, customer_id, quantity) => {
  try {
    const {
      data: { data },
    } = await authApi.post(`${URLs.BUY}/${product_id}/${customer_id}`, {
      quantity,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
