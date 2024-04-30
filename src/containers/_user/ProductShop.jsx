import ProductShopCard from "@/components/cards/ProductShopCard";
import Pagination from "@/components/providers/_user/Pagination";
import { Loader, NoData } from "@/components/shared";
import React from "react";

const ProductShop = () => {
  return (
    <div>
      {" "}
      <Pagination page={`product`}>
        {({ isFetchingNextPage, data, hasNextPage, isLoading, ref }) => {
          return (
            <>
              {isLoading ? (
                <Loader size="xl" screen={true} />
              ) : data?.pages?.some((arr) => arr.length > 0) ? (
                <>
                  <div className="w-full my-5 flex flex-col justify-center items-center gap-10">
                    {data.pages.map((row, index) => {
                      return (
                        <div className="w-full flex flex-row justify-start items-center gap-10 flex-wrap">
                          {row.map((val, inIndex) => {
                            return <ProductShopCard key={index} val={val} />;
                          })}
                        </div>
                      );
                    })}
                  </div>
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

export default ProductShop;
