import AOS from "aos";
import { useEffect } from "react";

const useAos = () => {
  useEffect(() => {
    AOS.init();
  }, []);
};

export default useAos;
