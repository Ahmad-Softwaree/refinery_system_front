import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../keys/query.key";
import {
  getCurrentUser,
  login,
  logout,
  register,
  updateProfile,
} from "../action/auth.action";
import { useToast } from "@/components/ui/use-toast";
import { getCookie, removeCookie, setCookie } from "@/lib/config/cookie.config";
import { CONFIGs } from "@/lib/enum";
import { setAxiosConfig } from "@/lib/config/axios.config";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { CONTEXT_TYPEs } from "@/context";
import { generateToast } from "@/lib/functions";
import { useNavigate } from "react-router-dom";

export const useGetCurrentUser = () => {
  const { toast } = useToast();
  const { dispatch } = useContext(AuthContext);

  return useQuery({
    queryKey: [QUERY_KEYS.AUTH],
    queryFn: () => getCurrentUser(toast, dispatch),
    retry: 0,
  });
};

export const useLogin = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { dispatch } = useContext(AuthContext);
  return useMutation({
    mutationFn: (form) => login(form),
    onSuccess: ({ data, token }) => {
      queryClient.setQueryData([QUERY_KEYS.AUTH], data);
      dispatch({
        type: CONTEXT_TYPEs.SET_USER,
        payload: {
          user: data,
          token,
        },
      });
      setCookie(CONFIGs.COOKIE_NAME, token);
      setAxiosConfig(token);
    },
    onError: (error) => {
      dispatch({
        type: CONTEXT_TYPEs.REMOVE_USER,
      });
      removeCookie(CONFIGs.COOKIE_NAME);
      setAxiosConfig(null);
      const errors = generateToast(error);
      return errors.forEach((err) => {
        toast({
          title: err.title,
          description: err.description,
        });
      });
    },
  });
};

export const useUpdateProfile = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { dispatch } = useContext(AuthContext);
  return useMutation({
    mutationFn: (form) => updateProfile(form),
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEYS.AUTH], data);
      dispatch({
        type: CONTEXT_TYPEs.SET_USER,
        payload: {
          user: data,
          token: `Bearer ${getCookie(CONFIGs.COOKIE_NAME)}`,
        },
      });
    },
    onError: (error) => {
      const errors = generateToast(error);
      return errors.forEach((err) => {
        toast({
          title: err.title,
          description: err.description,
        });
      });
    },
  });
};
export const useRegister = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => register(form),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.MANAGERS]);
      return toast({
        title: "Success",
        description: "Manager Added",
      });
    },
    onError: (error) => {
      const errors = generateToast(error);
      return errors.forEach((err) => {
        toast({
          title: err.title,
          description: err.description,
        });
      });
    },
  });
};

export const useLogout = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      queryClient.setQueryData([QUERY_KEYS.AUTH], null);
      dispatch({
        type: CONTEXT_TYPEs.REMOVE_USER,
      });
      navigate("/login");
    },
    onError: (error) => {
      const errors = generateToast(error);
      return errors.forEach((err) => {
        toast({
          title: err.title,
          description: err.description,
        });
      });
    },
  });
};
