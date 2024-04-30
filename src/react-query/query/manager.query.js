import { QUERY_KEYS } from "../keys/query.key";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  deleteManager,
  getManager,
  getManagers,
  makeEmployee,
  makeHighManager,
  updateManager,
} from "../action/manager.action";
import { generateToast } from "@/lib/functions";
import { useToast } from "@/components/ui/use-toast";
import { useContext } from "react";
import { UtilContext } from "@/context/UtilContext";
import { CONTEXT_TYPEs } from "@/context";

export function useGetManagers() {
  const { toast } = useToast();
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.MANAGERS],
    queryFn: ({ pageParam = 1 }) => getManagers(toast, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    retry: 0,
  });
}

export function useGetManager(id) {
  const { toast } = useToast();
  return useQuery({
    queryKey: [QUERY_KEYS.MANAGER],
    queryFn: () => getManager(toast, id),
    retry: 0,
  });
}

export function useMakeEmployee(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => makeEmployee(id),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.MANAGERS]);
      return toast({
        title: "Success",
        description: "Manager Update Successfully",
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
}

export function useMakeHighManager(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => makeHighManager(id),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.MANAGERS]);
      return toast({
        title: "Success",
        description: "Manager Update Successfully",
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
}

export function useUpdateManager(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => updateManager(id, form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.MANAGERS]);
      return toast({
        title: "Success",
        description: "Manager Update Successfully",
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
}

export function useDeleteManager(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteManager(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.MANAGERS]);
      return toast({
        title: "Success",
        description: "Manager Deleted Successfully",
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
}
