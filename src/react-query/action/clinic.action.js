import { authApi } from "@/lib/config/api.config";
import { URLs } from "@/lib/url";

export const checkPet = async (form) => {
  try {
    const { data } = await authApi.post(URLs.CHECK_PET, form);
    return data;
  } catch (error) {
    throw error;
  }
};
