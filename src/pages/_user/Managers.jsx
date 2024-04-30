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
import ManagerGrid from "@/containers/_user/ManagerGrid";
import { UiContext } from "@/context/UiContext";
import { CONTEXT_TYPEs } from "@/context";

const Managers = () => {
  const { dispatch } = useContext(UiContext);
  return (
    <div className="w-full flex flex-col justify-center items-center  p-5 h-full gap-5 py-30">
      <h1 className="text-white-500 text-sub-heading1-semibold font-bold">
        Managers
      </h1>
      <button
        onClick={() => {
          dispatch({
            type: CONTEXT_TYPEs.MANAGER_FORM,
          });
        }}
        className="p-2 px-4 rounded-md bg-tertiary-500 text-white mt-5">
        Add Manager
      </button>
      <Pagination page={`manager`}>
        {({ isFetchingNextPage, data, hasNextPage, isLoading, ref }) => {
          return (
            <>
              {isLoading ? (
                <Loader size="xl" screen={true} />
              ) : data?.pages?.some((arr) => arr.length > 0) ? (
                <>
                  <Table>
                    <TableCaption>Managers</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Id</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>Age</TableHead>
                        <TableHead>Salary</TableHead>
                        <TableHead>Role</TableHead>

                        <TableHead>Promote</TableHead>
                        <TableHead>Demote</TableHead>
                        <TableHead>Hire Date</TableHead>

                        <TableHead></TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.pages.map((row, index) => {
                        return (
                          <ManagerGrid key={index} page={index} row={row} />
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

export default Managers;
