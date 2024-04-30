import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PetShop from "@/containers/_user/PetShop";
import ProductShop from "@/containers/_user/ProductShop";

const Shop = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center  p-5 h-full gap-5 py-30">
      <h1 className="text-white-500 text-sub-heading1-semibold font-bold">
        Shop
      </h1>
      <Tabs defaultValue="pets" className="w-full">
        <TabsList className="w-full !bg-secondary-500 !text-white">
          <TabsTrigger className="w-1/2 !text-text1-semibold" value="pets">
            Pets
          </TabsTrigger>
          <TabsTrigger className="w-1/2 !text-text1-semibold" value="products">
            Products
          </TabsTrigger>
        </TabsList>
        <TabsContent value="pets">
          <PetShop />
        </TabsContent>
        <TabsContent value="products">
          {" "}
          <ProductShop />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Shop;
