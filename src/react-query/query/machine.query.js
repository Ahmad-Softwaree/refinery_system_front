import { QUERY_KEYS } from "../keys/query.key";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  addMachine,
  deleteMachine,
  getMachine,
  getMachines,
  updateMachine,
} from "../action/machine.action";
import { generateToast } from "@/lib/functions";
import { useToast } from "@/components/ui/use-toast";

export function useGetMachines() {
  const { toast } = useToast();
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.MACHINES],
    queryFn: ({ pageParam = 1 }) => getMachines(toast, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    retry: 0,
  });
}

export function useGetMachine(id) {
  const { toast } = useToast();
  return useQuery({
    queryKey: [QUERY_KEYS.MACHINE],
    queryFn: () => getMachine(toast, id),
    retry: 0,
  });
}

export function useAddMachine() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => addMachine(form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.MACHINES]);
      return toast({
        title: "Success",
        description: "Machine Added Successfully",
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

export function useUpdateMachine(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (form) => updateMachine(id, form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.MACHINES]);
      return toast({
        title: "Success",
        description: "Machine Update Successfully",
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

export function useDeleteMachine(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteMachine(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.MACHINES]);
      return toast({
        title: "Success",
        description: "Machine Deleted Successfully",
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
