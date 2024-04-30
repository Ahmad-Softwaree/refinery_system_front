import { useGetEmployees } from "@/react-query/query/employee.query";
import { useGetManagers } from "@/react-query/query/manager.query";
import { useGetPets } from "@/react-query/query/pet.query";
import { useGetProducts } from "@/react-query/query/product.query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGetVeterinaries } from "./../../../react-query/query/veterinary.query";
import { useGetCustomers } from "@/react-query/query/customer.query";
import {
  useGetPetsReceipt,
  useGetProductsReceipt,
} from "@/react-query/query/config.query";

const Pagination = ({ children, page }) => {
  const { ref, inView } = useInView();
  const {
    isFetchingNextPage,
    data,
    hasNextPage,
    isLoading,
    fetchNextPage,
    refetch,
  } =
    page === "manager"
      ? useGetManagers()
      : page === "employee"
      ? useGetEmployees()
      : page === "pet"
      ? useGetPets()
      : page === "product"
      ? useGetProducts()
      : page === "veterinary"
      ? useGetVeterinaries()
      : page === "customer"
      ? useGetCustomers()
      : page === "pets_receipts"
      ? useGetPetsReceipt()
      : page === "products_receipts"
      ? useGetProductsReceipt()
      : null;

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView]);

  return children({
    isFetchingNextPage,
    data,
    hasNextPage,
    isLoading,
    ref,
    refetch,
  });
};

export default Pagination;
