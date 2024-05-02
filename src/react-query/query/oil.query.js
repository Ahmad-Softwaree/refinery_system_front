import { QUERY_KEYS } from "../keys/query.key";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  addOil,
  deleteOil,
  getAllOils,
  getOil,
  getOils,
  updateOil,
} from "../action/oil.action";
import { generateToast } from "@/lib/functions";
import { useToast } from "@/components/ui/use-toast";

export function useGetOils() {
  const { toast } = useToast();
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.OILS],
    queryFn: ({ pageParam = 1 }) => getOils(toast, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    retry: 0,
  });
}
export function useGetAllOils() {
  const { toast } = useToast();
  return useQuery({
    queryKey: [QUERY_KEYS.ALL_OILS],
    queryFn: () => getAllOils(toast),
    retry: 0,
  });
}

export function useGetOil(id) {
  const { toast } = useToast();
  return useQuery({
    queryKey: [QUERY_KEYS.OIL],
    queryFn: () => getOil(toast, id),
    retry: 0,
  });
}

export function useAddOil() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => addOil(form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.OILS]);
      return toast({
        title: "Success",
        description: "Oil Added Successfully",
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

export function useUpdateOil(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => updateOil(id, form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.OILS]);
      return toast({
        title: "Success",
        description: "Oil Update Successfully",
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

export function useDeleteOil(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteOil(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.OILS]);
      return toast({
        title: "Success",
        description: "Oil Deleted Successfully",
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
