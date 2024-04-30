import { CustomerCard } from "@/components/cards";

const CustomersGrid = ({ row, page }) => {
  return (
    <>
      {row.map((val, index) => {
        return <CustomerCard key={index} index={index + page * 20} val={val} />;
      })}
    </>
  );
};

export default CustomersGrid;
