import { UiContext } from "@/context/UiContext";
import { UtilContext } from "@/context/UtilContext";
import { CONTEXT_TYPEs } from "@/context";
import { useContext, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const useRefreshPage = () => {
  const { dispatch } = useContext(UtilContext);
  const { dispatch: ui } = useContext(UiContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 27) {
        action();
      }
    });

    action();
    return () => {
      window.removeEventListener("keydown", () => {});
    };
  }, [location, window]);

  const action = () => {
    dispatch({
      type: CONTEXT_TYPEs.REFRESH_UTIL,
    });
    ui({
      type: CONTEXT_TYPEs.REFRESH_UI,
    });
  };
};

export default useRefreshPage;
