import { VeterinaryCard } from "@/components/cards";

const VeterinariesGrid = ({ row, page }) => {
  return (
    <>
      {row.map((val, index) => {
        return (
          <VeterinaryCard key={index} index={index + page * 20} val={val} />
        );
      })}
    </>
  );
};

export default VeterinariesGrid;
