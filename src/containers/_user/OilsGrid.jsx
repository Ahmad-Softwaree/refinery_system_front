import { OilCard } from "@/components/cards";

const OilsGrid = ({ row, page }) => {
  return (
    <>
      {row.map((val, index) => {
        return <OilCard key={index} index={index + page * 20} val={val} />;
      })}
    </>
  );
};

export default OilsGrid;
