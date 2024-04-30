import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

const Employee = ({ children }) => {
  const {
    state: { user },
  } = useContext(AuthContext);
  if (user)
    return children({
      user,
    });
  else return null;
};

export default Employee;
