import { QUERY_KEYS } from "../keys/query.key";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../action/product.action";
import { generateToast } from "@/lib/functions";
import { useToast } from "@/components/ui/use-toast";
import { deleteImage, insertImage } from "@/lib/firebase/firebase.action";
import { CONFIGs } from "@/lib/enum";

export function useGetProducts() {
  const { toast } = useToast();
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.PRODUCTS],
    queryFn: ({ pageParam = 1 }) => getProducts(toast, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    retry: 0,
  });
}

export function useGetProduct(id) {
  const { toast } = useToast();
  return useQuery({
    queryKey: [QUERY_KEYS.PRODUCT],
    queryFn: () => getProduct(toast, id),
    retry: 0,
  });
}

export function useAddProduct() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ state, image }) => {
      let form = state;
      if (image) {
        let { image_url, image_name } = await insertImage(
          image,
          CONFIGs.PRODUCT_BUCKET,
          toast
        );
        form.image_name = image_name;
        form.image_url = image_url;
      }
      return await addProduct(form);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.PRODUCTS]);
      return toast({
        title: "Success",
        description: "Product Added Successfully",
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

export function useUpdateProduct(id) {
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
          CONFIGs.PRODUCT_BUCKET,
          toast
        );
        form.image_name = image_name;
        form.image_url = image_url;
        //delete old image
        if (oldImg) await deleteImage(oldImg, CONFIGs.PRODUCT_BUCKET, toast);
      } else {
        form.image_name = oldImg;
        form.image_url = oldURL;
      }
      return await updateProduct(id, form);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.PRODUCTS]);
      return toast({
        title: "Success",
        description: "Product Update Successfully",
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

export function useDeleteProduct(id) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ image }) => {
      await deleteImage(image, CONFIGs.PRODUCT_BUCKET, toast);
      return await deleteProduct(id);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEYS.PRODUCTS]);
      return toast({
        title: "Success",
        description: "Product Deleted Successfully",
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
