import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adopt, buy } from "../action/shop.action";
import { QUERY_KEYS } from "../keys/query.key";
import { generateToast } from "@/lib/functions";

export const useAdopt = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ pet_id, customer_id }) => adopt(pet_id, customer_id),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.PETS]);
      return toast({
        title: "Success",
        description: "Adopt Success",
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
};

export const useBuy = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ pet_id, customer_id, quantity }) =>
      buy(pet_id, customer_id, quantity),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.PRODUCTS]);
      return toast({
        title: "Success",
        description: "Buy Success",
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
};
