import { OrderCard } from "@/components/cards";

const OrdersGrid = ({ row, page }) => {
  return (
    <>
      {row.map((val, index) => {
        return <OrderCard key={index} index={index + page * 20} val={val} />;
      })}
    </>
  );
};

export default OrdersGrid;
