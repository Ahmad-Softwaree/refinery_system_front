import { StorageCard } from "@/components/cards";

const StoragesGrid = ({ row, page }) => {
  return (
    <>
      {row.map((val, index) => {
        return <StorageCard key={index} index={index + page * 20} val={val} />;
      })}
    </>
  );
};

export default StoragesGrid;
