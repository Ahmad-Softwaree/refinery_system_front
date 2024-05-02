import { QUERY_KEYS } from "../keys/query.key";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  addDepartment,
  deleteDepartment,
  getAllDepartments,
  getDepartment,
  getDepartments,
  updateDepartment,
} from "../action/department.action";
import { generateToast } from "@/lib/functions";
import { useToast } from "@/components/ui/use-toast";

export function useGetAllDepartments() {
  const { toast } = useToast();
  return useQuery({
    queryKey: [QUERY_KEYS.ALL_DEPARTMENTS],
    queryFn: () => getAllDepartments(toast),
    retry: 0,
  });
}
export function useGetDepartments() {
  const { toast } = useToast();
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.DEPARTMENTS],
    queryFn: ({ pageParam = 1 }) => getDepartments(toast, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    retry: 0,
  });
}

export function useGetDepartment(id) {
  const { toast } = useToast();
  return useQuery({
    queryKey: [QUERY_KEYS.DEPARTMENT],
    queryFn: () => getDepartment(toast, id),
    retry: 0,
  });
}

export function useAddDepartment() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => addDepartment(form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.DEPARTMENTS]);
      return toast({
        title: "Success",
        description: "Department Added Successfully",
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

export function useUpdateDepartment(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => updateDepartment(id, form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.DEPARTMENTS]);
      return toast({
        title: "Success",
        description: "Department Update Successfully",
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

export function useDeleteDepartment(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteDepartment(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.DEPARTMENTS]);
      return toast({
        title: "Success",
        description: "Department Deleted Successfully",
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
