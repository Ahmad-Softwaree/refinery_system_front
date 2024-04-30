import { useEffect } from "react";

const useRefreshStorage = () => {
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      localStorage.clear();
    });
    return () => {
      window.removeEventListener("beforeunload", () => {
        //
      });
    };
  }, [window]);
};

export default useRefreshStorage;
