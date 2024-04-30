import { TableCell, TableRow } from "@/components/ui/table";
import Delete from "../icons/Delete";
import Update from "../icons/Update";
import { useContext } from "react";
import { UiContext } from "@/context/UiContext";
import { CONTEXT_TYPEs } from "@/context";
import { UtilContext } from "@/context/UtilContext";
import { convertTimeStampToDate } from "@/lib/functions";
import { Link } from "react-router-dom";
export default function CustomerCard({ index, val }) {
  const { dispatch } = useContext(UiContext);
  const { dispatch: util } = useContext(UtilContext);

  return (
    <TableRow>
      <TableCell>{val.id}</TableCell>
      <TableCell>{val?.name}</TableCell>
      <TableCell>{val?.address}</TableCell>
      <TableCell>{val?.phone}</TableCell>
      <TableCell>{convertTimeStampToDate(val?.created_at)}</TableCell>
      <TableCell>
        <Link
          to={`/shop/${val.id}`}
          className="p-2 px-4 rounded-md bg-tertiary-500 text-white">
          Shop
        </Link>
      </TableCell>
      <TableCell>
        <Update
          onClick={() =>
            dispatch({
              type: CONTEXT_TYPEs.CUSTOMER_FORM,
              payload: {
                id: val.id,
                data: val,
                type: "update",
              },
            })
          }
          variant="tertiary"
          size="sm"
        />
      </TableCell>{" "}
      <TableCell>
        <Delete
          onClick={() =>
            util({
              type: CONTEXT_TYPEs.OPERATION,
              payload: {
                id: val.id,
                method: CONTEXT_TYPEs.DELETE_CUSTOMER,
              },
            })
          }
          variant="red"
          size="sm"
        />
      </TableCell>
    </TableRow>
  );
}
