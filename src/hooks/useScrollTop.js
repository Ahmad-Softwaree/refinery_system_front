import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollTop = () => {
  const location = useLocation();
  useEffect(() => {
    if (!location.search)
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
  }, [location]);
};

export default useScrollTop;
