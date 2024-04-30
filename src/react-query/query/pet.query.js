import { QUERY_KEYS } from "../keys/query.key";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  addPet,
  deletePet,
  getPet,
  getPets,
  updatePet,
} from "../action/pet.action";
import { generateToast } from "@/lib/functions";
import { useToast } from "@/components/ui/use-toast";
import { deleteImage, insertImage } from "@/lib/firebase/firebase.action";
import { CONFIGs } from "@/lib/enum";

export function useGetPets() {
  const { toast } = useToast();
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.PETS],
    queryFn: ({ pageParam = 1 }) => getPets(toast, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    retry: 0,
  });
}

export function useGetPet(id) {
  const { toast } = useToast();
  return useQuery({
    queryKey: [QUERY_KEYS.PET],
    queryFn: () => getPet(toast, id),
    retry: 0,
  });
}

export function useAddPet() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ state, image }) => {
      let form = state;
      if (image) {
        let { image_url, image_name } = await insertImage(
          image,
          CONFIGs.PET_BUCKET,
          toast
        );
        form.image_name = image_name;
        form.image_url = image_url;
      }
      return await addPet(form);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.PETS]);
      return toast({
        title: "Success",
        description: "Pet Added Successfully",
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

export function useUpdatePet(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ state, oldImg, oldURL, image }) => {
      let form = state;
      if (image) {
        //new image uploaded
        //insert image
        let { image_url, image_name } = await insertImage(
          image,
          CONFIGs.PET_BUCKET,
          toast
        );
        form.image_name = image_name;
        form.image_url = image_url;
        //delete old image
        if (oldImg) await deleteImage(oldImg, CONFIGs.PET_BUCKET, toast);
      } else {
        form.image_name = oldImg;
        form.image_url = oldURL;
      }
      return await updatePet(id, form);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.PETS]);
      return toast({
        title: "Success",
        description: "Pet Update Successfully",
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

export function useDeletePet(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ image }) => {
      await deleteImage(image, CONFIGs.PET_BUCKET, toast);
      return await deletePet(id);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.PETS]);
      return toast({
        title: "Success",
        description: "Pet Deleted Successfully",
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
