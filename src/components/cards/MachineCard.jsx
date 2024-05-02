import { TableCell, TableRow } from "@/components/ui/table";
import Delete from "../icons/Delete";
import Update from "../icons/Update";
import { useContext } from "react";
import { UiContext } from "@/context/UiContext";
import { CONTEXT_TYPEs } from "@/context";
import { UtilContext } from "@/context/UtilContext";
import { convertTimeStampToDate } from "@/lib/functions";
export default function MachineCard({ index, val }) {
  const { dispatch } = useContext(UiContext);
  const { dispatch: util } = useContext(UtilContext);
  return (
    <TableRow>
      <TableCell>{val.machine_id}</TableCell>
      <TableCell>{val?.machine_name}</TableCell>
      <TableCell>{val?.function}</TableCell>
      <TableCell>{val?.user_name}</TableCell>
      <TableCell>{convertTimeStampToDate(val?.created_at)}</TableCell>
      <TableCell>
        <Update
          onClick={() =>
            dispatch({
              type: CONTEXT_TYPEs.MACHINE_FORM,
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
                method: CONTEXT_TYPEs.DELETE_MACHINE,
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
