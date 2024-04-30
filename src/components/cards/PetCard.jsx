import { TableCell, TableRow } from "@/components/ui/table";
import Delete from "../icons/Delete";
import Update from "../icons/Update";
import { useContext } from "react";
import { UiContext } from "@/context/UiContext";
import { CONTEXT_TYPEs } from "@/context";
import { UtilContext } from "@/context/UtilContext";
import { useLocation } from "react-router-dom";
import { useCheckPet } from "@/react-query/query/clinic.query";
import { Loader } from "../shared";
export default function PetCard({ index, val }) {
  const { mutateAsync, isPending } = useCheckPet();
  const { dispatch } = useContext(UiContext);
  const { dispatch: util } = useContext(UtilContext);
  const { pathname } = useLocation();
  const path = pathname.split("/");
  return (
    <TableRow>
      <TableCell>{val.id}</TableCell>
      <TableCell>
        {val.image_url && val.image_url !== "" && (
          <img
            className="w-[200px] h-[200px] object-contain"
            src={val?.image_url}
            alt={val?.image_name}
          />
        )}
      </TableCell>
      <TableCell>{val?.name}</TableCell>
      <TableCell>{val?.breed}</TableCell>
      <TableCell>{val?.color}</TableCell>
      <TableCell>{val?.price}</TableCell>
      <TableCell>{val?.gender}</TableCell>
      <TableCell>{val?.adoption_history}</TableCell>
      <TableCell>{val?.age}</TableCell>
      <TableCell>{val?.checked ? "Yes" : "No"}</TableCell>
      {path.includes("pets") ? (
        <>
          <TableCell>
            <Update
              onClick={() =>
                dispatch({
                  type: CONTEXT_TYPEs.PET_FORM,
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
                    image: val.image_name,
                    method: CONTEXT_TYPEs.DELETE_PET,
                  },
                })
              }
              variant="red"
              size="sm"
            />
          </TableCell>
        </>
      ) : (
        <>
          {val?.checked ? (
            <TableCell>
              <button
                disabled={isPending}
                onClick={() => mutateAsync({ pet_id: val.id })}
                className="p-2 px-4 rounded-md bg-red-500 text-white">
                {isPending ? <Loader /> : "Un Check"}
              </button>
            </TableCell>
          ) : (
            <TableCell>
              <button
                onClick={() =>
                  dispatch({
                    type: CONTEXT_TYPEs.CLINIC_FORM,
                    payload: {
                      id: val.id,
                      data: val,
                    },
                  })
                }
                className="p-2 px-4 rounded-md bg-tertiary-500 text-white">
                Check
              </button>
            </TableCell>
          )}
        </>
      )}
    </TableRow>
  );
}
