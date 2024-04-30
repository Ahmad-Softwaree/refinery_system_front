import { ProductsReceiptCard } from "@/components/cards";

const ProductsReceiptsGrid = ({ row, page }) => {
  return (
    <>
      {row.map((val, index) => {
        return (
          <ProductsReceiptCard
            key={index}
            index={index + page * 20}
            val={val}
          />
        );
      })}
    </>
  );
};

export default ProductsReceiptsGrid;
