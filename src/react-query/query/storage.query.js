import { QUERY_KEYS } from "../keys/query.key";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  addStorage,
  deleteStorage,
  getStorage,
  getStorages,
  updateStorage,
} from "../action/storage.action";
import { generateToast } from "@/lib/functions";
import { useToast } from "@/components/ui/use-toast";

export function useGetStorages() {
  const { toast } = useToast();
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.STORAGES],
    queryFn: ({ pageParam = 1 }) => getStorages(toast, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    retry: 0,
  });
}

export function useGetStorage(id) {
  const { toast } = useToast();
  return useQuery({
    queryKey: [QUERY_KEYS.STORAGE],
    queryFn: () => getStorage(toast, id),
    retry: 0,
  });
}

export function useAddStorage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => addStorage(form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.STORAGES]);
      return toast({
        title: "Success",
        description: "Storage Added Successfully",
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

export function useUpdateStorage(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => updateStorage(id, form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.STORAGES]);
      return toast({
        title: "Success",
        description: "Storage Update Successfully",
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

export function useDeleteStorage(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteStorage(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.STORAGES]);
      return toast({
        title: "Success",
        description: "Storage Deleted Successfully",
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
