import { PetCard } from "@/components/cards";

const PetGrid = ({ row, page }) => {
  return (
    <>
      {row.map((val, index) => {
        return <PetCard key={index} index={index + page * 20} val={val} />;
      })}
    </>
  );
};

export default PetGrid;
