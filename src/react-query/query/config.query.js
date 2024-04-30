import { useToast } from "@/components/ui/use-toast";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  getConfig,
  getPetsReceipt,
  getProductsReceipt,
} from "../action/config.action";
import { QUERY_KEYS } from "../keys/query.key";

export const useGetConfig = () => {
  const { toast } = useToast();

  return useQuery({
    queryKey: [QUERY_KEYS.CONFIG],
    queryFn: () => getConfig(toast),
    retry: 0,
  });
};

export const useGetPetsReceipt = () => {
  const { toast } = useToast();

  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.PETS_RECEIPT],
    queryFn: ({ pageParam = 1 }) => getPetsReceipt(toast, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    retry: 0,
  });
};

export const useGetProductsReceipt = () => {
  const { toast } = useToast();

  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.PRODUCTS_RECEIPT],
    queryFn: ({ pageParam = 1 }) => getProductsReceipt(toast, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    retry: 0,
  });
};
