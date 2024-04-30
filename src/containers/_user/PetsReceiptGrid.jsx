import { PetsReceiptCard } from "@/components/cards";

const PetsReceiptsGrid = ({ row, page }) => {
  return (
    <>
      {row.map((val, index) => {
        return (
          <PetsReceiptCard key={index} index={index + page * 20} val={val} />
        );
      })}
    </>
  );
};

export default PetsReceiptsGrid;
