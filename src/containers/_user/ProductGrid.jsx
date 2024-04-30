import { ProductCard } from "@/components/cards";

const ProductGrid = ({ row, page }) => {
  return (
    <>
      {row.map((val, index) => {
        return <ProductCard key={index} index={index + page * 20} val={val} />;
      })}
    </>
  );
};

export default ProductGrid;
