import { UtilContext } from "@/context/UtilContext";
import { CONTEXT_TYPEs } from "@/context";
import { useContext } from "react";
import { Loader } from ".";
import {
  useDeleteManager,
  useMakeEmployee,
  useMakeHighManager,
} from "@/react-query/query/manager.query";
import {
  useDeleteEmployee,
  useMakeManager,
} from "@/react-query/query/employee.query";
import { useDeletePet } from "@/react-query/query/pet.query";
import { useAdopt, useBuy } from "@/react-query/query/shop.query";

export default function operation() {
  const {
    dispatch,
    state: { id, method, image, type, data },
  } = useContext(UtilContext);
  const { mutateAsync: makeEmployee, isPending: makeEmployeeLoading } =
    useMakeEmployee(id);
  const { mutateAsync: makeHighManager, isPending: makeHighManagerLoading } =
    useMakeHighManager(id);
  const { mutateAsync: deleteManager, isPending: deleteManagerLoading } =
    useDeleteManager(id);
  const { mutateAsync: makeManager, isPending: makeManagerLoading } =
    useMakeManager(id);
  const { mutateAsync: deleteEmployee, isPending: deleteEmployeeLoading } =
    useDeleteEmployee(id);
  const { mutateAsync: deletePet, isPending: deletePetLoading } =
    useDeletePet(id);
  const { mutateAsync: adopt, isPending: adoptLoading } = useAdopt(id);
  const { mutateAsync: buy, isPending: buyLoading } = useBuy(id);
  const flag = Boolean(
    makeEmployeeLoading ||
      makeHighManagerLoading ||
      deleteManagerLoading ||
      makeManagerLoading ||
      deleteEmployeeLoading ||
      deletePetLoading ||
      adoptLoading ||
      buyLoading
  );

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        switch (method) {
          case CONTEXT_TYPEs.MAKE_EMPLOYEE:
            await makeEmployee();
            break;
          case CONTEXT_TYPEs.MAKE_HIGH_MANAGER:
            await makeHighManager();
            break;
          case CONTEXT_TYPEs.DELETE_MANAGER:
            await deleteManager();
            break;
          case CONTEXT_TYPEs.DELETE_EMPLOYEE:
            await deleteEmployee();
            break;
          case CONTEXT_TYPEs.MAKE_MANAGER:
            await makeManager();
            break;
          case CONTEXT_TYPEs.DELETE_PET:
            await deletePet({ image });
            break;
          case CONTEXT_TYPEs.ADOPT:
            await adopt(data);
            break;
          case CONTEXT_TYPEs.BUY:
            await buy(data);
            break;
          default:
            break;
        }
        dispatch({
          type: CONTEXT_TYPEs.OPERATION,
        });
      }}
      data-aos="fade-up"
      className={`bg-primary-500 text-white z-[1500] fixed inset-0 m-auto w-fit h-fit p-10 rounded-lg  flex flex-col justify-center items-center transition-all duration-200  gap-5 shadow-xl`}>
      <h2>You Sure Bro?</h2>
      <div className="flex flex-row w-full justify-center items-center gap-5">
        <button
          type="button"
          onClick={() => {
            dispatch({
              type: CONTEXT_TYPEs.OPERATION,
              payload: null,
            });
          }}
          className="p-2 px-10 bg-red-500 cursor-pointer rounded-lg bg-green text-black-500">
          No
        </button>
        <button
          type="submit"
          disabled={flag}
          className="p-2 px-10 text-white-500 bg-tertiary-500 cursor-pointer rounded-lg disabled:bg-gray-500">
          {flag ? <Loader /> : "Yes"}
        </button>
      </div>
    </form>
  );
}
