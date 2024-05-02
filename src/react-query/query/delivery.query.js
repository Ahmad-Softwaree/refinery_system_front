import { QUERY_KEYS } from "../keys/query.key";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  addDelivery,
  deleteDelivery,
  getDelivery,
  getDeliveries,
  updateDelivery,
} from "../action/delivery.action";
import { generateToast } from "@/lib/functions";
import { useToast } from "@/components/ui/use-toast";

export function useGetDeliveries() {
  const { toast } = useToast();
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.DELIVERIES],
    queryFn: ({ pageParam = 1 }) => getDeliveries(toast, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    retry: 0,
  });
}

export function useGetDelivery(id) {
  const { toast } = useToast();
  return useQuery({
    queryKey: [QUERY_KEYS.DELIVERY],
    queryFn: () => getDelivery(toast, id),
    retry: 0,
  });
}

export function useAddDelivery() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => addDelivery(form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.DELIVERIES]);
      return toast({
        title: "Success",
        description: "Delivery Added Successfully",
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

export function useUpdateDelivery(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => updateDelivery(id, form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.DELIVERIES]);
      return toast({
        title: "Success",
        description: "Delivery Update Successfully",
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

export function useDeleteDelivery(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteDelivery(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.DELIVERIES]);
      return toast({
        title: "Success",
        description: "Delivery Deleted Successfully",
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
