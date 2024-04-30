import { QUERY_KEYS } from "../keys/query.key";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  addCustomer,
  deleteCustomer,
  getCustomer,
  getCustomers,
  updateCustomer,
} from "../action/customer.action";
import { generateToast } from "@/lib/functions";
import { useToast } from "@/components/ui/use-toast";

export function useGetCustomers() {
  const { toast } = useToast();
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.CUSTOMERS],
    queryFn: ({ pageParam = 1 }) => getCustomers(toast, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    retry: 0,
  });
}

export function useGetCustomer(id) {
  const { toast } = useToast();
  return useQuery({
    queryKey: [QUERY_KEYS.CUSTOMER],
    queryFn: () => getCustomer(toast, id),
    retry: 0,
  });
}
export function useAddCustomer() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => addCustomer(form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.CUSTOMERS]);
      return toast({
        title: "Success",
        description: "Customer Added Successfully",
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
export function useUpdateCustomer(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => updateCustomer(id, form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.CUSTOMERS]);
      return toast({
        title: "Success",
        description: "Customer Update Successfully",
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

export function useDeleteCustomer(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteCustomer(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.CUSTOMERS]);
      return toast({
        title: "Success",
        description: "Customer Deleted Successfully",
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
