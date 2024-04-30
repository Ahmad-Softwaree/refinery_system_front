import { QUERY_KEYS } from "../keys/query.key";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  deleteEmployee,
  getEmployee,
  getEmployees,
  makeManager,
  updateEmployee,
} from "../action/employee.action";
import { generateToast } from "@/lib/functions";
import { useToast } from "@/components/ui/use-toast";

export function useGetEmployees() {
  const { toast } = useToast();
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.EMPLOYEES],
    queryFn: ({ pageParam = 1 }) => getEmployees(toast, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    retry: 0,
  });
}

export function useGetEmployee(id) {
  const { toast } = useToast();
  return useQuery({
    queryKey: [QUERY_KEYS.EMPLOYEE],
    queryFn: () => getEmployee(toast, id),
    retry: 0,
  });
}

export function useMakeManager(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => makeManager(id),
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.EMPLOYEES]);
      return toast({
        title: "Success",
        description: "Employee Update Successfully",
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

export function useUpdateEmployee(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => updateEmployee(id, form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.EMPLOYEES]);
      return toast({
        title: "Success",
        description: "Employee Update Successfully",
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

export function useDeleteEmployee(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteEmployee(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.EMPLOYEES]);
      return toast({
        title: "Success",
        description: "Employee Deleted Successfully",
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
