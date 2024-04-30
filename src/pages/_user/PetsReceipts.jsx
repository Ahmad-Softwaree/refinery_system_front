import Pagination from "@/components/providers/_user/Pagination";
import { Loader, NoData } from "@/components/shared";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PetsReceiptGrid from "@/containers/_user/PetsReceiptGrid";

const PetsReceipts = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center  p-5 h-full gap-5 py-30">
      <h1 className="text-white-500 text-sub-heading1-semibold font-bold">
        Pets Receipts
      </h1>

      <Pagination page={`pets_receipts`}>
        {({ isFetchingNextPage, data, hasNextPage, isLoading, ref }) => {
          return (
            <>
              {isLoading ? (
                <Loader size="xl" screen={true} />
              ) : data?.pages?.some((arr) => arr.length > 0) ? (
                <>
                  <Table>
                    <TableCaption>PetsReceipts</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Id</TableHead>
                        <TableHead>Pet Id</TableHead>
                        <TableHead>Customer Id</TableHead>
                        <TableHead>Receipt Number</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.pages.map((row, index) => {
                        return (
                          <PetsReceiptGrid key={index} page={index} row={row} />
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

export default PetsReceipts;
