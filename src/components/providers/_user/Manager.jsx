import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

const Manager = ({ children }) => {
  const {
    state: { user },
  } = useContext(AuthContext);
  if (user && user?.role === "manager")
    return children({
      user,
    });
  else return null;
};

export default Manager;
