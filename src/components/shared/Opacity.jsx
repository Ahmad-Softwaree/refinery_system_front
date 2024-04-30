import { UiContext } from "@/context/UiContext";
import { UtilContext } from "@/context/UtilContext";
import { CONTEXT_TYPEs } from "@/context";
import React, { useContext } from "react";

export default function Opacity() {
  const { dispatch } = useContext(UiContext);
  const { dispatch: util } = useContext(UtilContext);

  return (
    <div
      onClick={() => {
        dispatch({
          type: CONTEXT_TYPEs.REFRESH_UI,
        });
        util({
          type: CONTEXT_TYPEs.REFRESH_UTIL,
        });
      }}
      className={`opacity inset-0 w-full min-h-screen h-full bg-black opacity-60 z-[1000] transition-all duration-200 fixed`}></div>
  );
}
