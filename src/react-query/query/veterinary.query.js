import { QUERY_KEYS } from "../keys/query.key";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  deleteVeterinary,
  getVeterinary,
  getVeterinaries,
  updateVeterinary,
} from "../action/veterinary.action";
import { generateToast } from "@/lib/functions";
import { useToast } from "@/components/ui/use-toast";

export function useGetVeterinaries() {
  const { toast } = useToast();
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.VETERINARIES],
    queryFn: ({ pageParam = 1 }) => getVeterinaries(toast, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    retry: 0,
  });
}

export function useGetVeterinary(id) {
  const { toast } = useToast();
  return useQuery({
    queryKey: [QUERY_KEYS.VETERINARY],
    queryFn: () => getVeterinary(toast, id),
    retry: 0,
  });
}

export function useUpdateVeterinary(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => updateVeterinary(id, form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.VETERINARIES]);
      return toast({
        title: "Success",
        description: "Veterinary Update Successfully",
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

export function useDeleteVeterinary(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteVeterinary(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.VETERINARIES]);
      return toast({
        title: "Success",
        description: "Veterinary Deleted Successfully",
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
