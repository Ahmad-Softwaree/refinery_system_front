import { useGetDeliveries } from "@/react-query/query/delivery.query";
import { useGetDepartments } from "@/react-query/query/department.query";
import { useGetEmployees } from "@/react-query/query/employee.query";
import { useGetMachines } from "@/react-query/query/machine.query";
import { useGetOils } from "@/react-query/query/oil.query";
import { useGetOrders } from "@/react-query/query/order.query";
import { useGetStorages } from "@/react-query/query/storage.query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
    page === "employee"
      ? useGetEmployees()
      : page === "department"
      ? useGetDepartments()
      : page === "machine"
      ? useGetMachines()
      : page === "oil"
      ? useGetOils()
      : page === "storage"
      ? useGetStorages()
      : page === "order"
      ? useGetOrders()
      : page === "delivery"
      ? useGetDeliveries()
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
