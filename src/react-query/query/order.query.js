import { QUERY_KEYS } from "../keys/query.key";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  addOrder,
  deleteOrder,
  getOrder,
  getOrders,
  updateOrder,
} from "../action/order.action";
import { generateToast } from "@/lib/functions";
import { useToast } from "@/components/ui/use-toast";

export function useGetOrders() {
  const { toast } = useToast();
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.ORDERS],
    queryFn: ({ pageParam = 1 }) => getOrders(toast, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    retry: 0,
  });
}

export function useGetOrder(id) {
  const { toast } = useToast();
  return useQuery({
    queryKey: [QUERY_KEYS.ORDER],
    queryFn: () => getOrder(toast, id),
    retry: 0,
  });
}

export function useAddOrder() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => addOrder(form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.ORDERS]);
      return toast({
        title: "Success",
        description: "Order Added Successfully",
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

export function useUpdateOrder(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => updateOrder(id, form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.ORDERS]);
      return toast({
        title: "Success",
        description: "Order Update Successfully",
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

export function useDeleteOrder(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteOrder(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.ORDERS]);
      return toast({
        title: "Success",
        description: "Order Deleted Successfully",
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
