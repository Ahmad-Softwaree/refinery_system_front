import { TableCell, TableRow } from "@/components/ui/table";

import { convertTimeStampToDate } from "@/lib/functions";
export default function ProductsReceiptCard({ index, val }) {
  return (
    <TableRow>
      <TableCell>{val.id}</TableCell>
      <TableCell>{val?.product_id}</TableCell>
      <TableCell>{val?.customer_id}</TableCell>
      <TableCell>{val?.receipt_number}</TableCell>

      <TableCell>{convertTimeStampToDate(val?.created_at)}</TableCell>
    </TableRow>
  );
}
