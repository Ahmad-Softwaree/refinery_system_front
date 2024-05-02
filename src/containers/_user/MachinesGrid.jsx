import { MachineCard } from "@/components/cards";

const MachinesGrid = ({ row, page }) => {
  return (
    <>
      {row.map((val, index) => {
        return <MachineCard key={index} index={index + page * 20} val={val} />;
      })}
    </>
  );
};

export default MachinesGrid;
