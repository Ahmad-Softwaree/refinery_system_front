import { ManagerCard } from "@/components/cards";

const ManagerGrid = ({ row, page }) => {
  return (
    <>
      {row.map((val, index) => {
        return <ManagerCard key={index} index={index + page * 20} val={val} />;
      })}
    </>
  );
};

export default ManagerGrid;
