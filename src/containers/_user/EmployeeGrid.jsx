import { EmployeeCard } from "@/components/cards";

const EmployeesGrid = ({ row, page }) => {
  return (
    <>
      {row.map((val, index) => {
        return <EmployeeCard key={index} index={index + page * 20} val={val} />;
      })}
    </>
  );
};

export default EmployeesGrid;
