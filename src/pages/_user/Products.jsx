import Pagination from "@/components/providers/_user/Pagination";
import { Loader, NoData } from "@/components/shared";
import React, { useContext } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProductsGrid from "@/containers/_user/ProductGrid";
import { UiContext } from "@/context/UiContext";
import { CONTEXT_TYPEs } from "@/context";

const Products = () => {
  const { dispatch } = useContext(UiContext);
  return (
    <div className="w-full flex flex-col justify-center items-center  p-5 h-full gap-5 py-30">
      <h1 className="text-white-500 text-sub-heading1-semibold font-bold">
        Products
      </h1>
      <button
        onClick={() => {
          dispatch({
            type: CONTEXT_TYPEs.PRODUCT_FORM,
          });
        }}
        className="p-2 px-4 rounded-md bg-tertiary-500 text-white mt-5">
        Add Product
      </button>
      <Pagination page={`product`}>
        {({ isFetchingNextPage, data, hasNextPage, isLoading, ref }) => {
          return (
            <>
              {isLoading ? (
                <Loader size="xl" screen={true} />
              ) : data?.pages?.some((arr) => arr.length > 0) ? (
                <>
                  <Table>
                    <TableCaption>Products</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Id</TableHead>
                        <TableHead>Image</TableHead>

                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Price</TableHead>

                        <TableHead>Discount</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Expire Date</TableHead>

                        <TableHead></TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.pages.map((row, index) => {
                        return (
                          <ProductsGrid key={index} page={index} row={row} />
                        );
                      })}
                    </TableBody>
                  </Table>
                  {!isFetchingNextPage && hasNextPage && (
                    <button ref={ref}>
                      <Loader />
                    </button>
                  )}
                </>
              ) : (
                <NoData />
              )}
            </>
          );
        }}
      </Pagination>
    </div>
  );
};

export default Products;
