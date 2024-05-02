import { DepartmentCard } from "@/components/cards";

const DepartmentsGrid = ({ row, page }) => {
  return (
    <>
      {row.map((val, index) => {
        return (
          <DepartmentCard key={index} index={index + page * 20} val={val} />
        );
      })}
    </>
  );
};

export default DepartmentsGrid;
