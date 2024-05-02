import { DeliveryCard } from "@/components/cards";

const DeliveriesGrid = ({ row, page }) => {
  return (
    <>
      {row.map((val, index) => {
        return <DeliveryCard key={index} index={index + page * 20} val={val} />;
      })}
    </>
  );
};

export default DeliveriesGrid;
