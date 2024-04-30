import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkPet } from "../action/clinic.action";
import { QUERY_KEYS } from "../keys/query.key";
import { generateToast } from "@/lib/functions";

export const useCheckPet = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (form) => checkPet(form),
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.PETS]);
      return toast({
        title: "Success",
        description: "Pet Checked",
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
