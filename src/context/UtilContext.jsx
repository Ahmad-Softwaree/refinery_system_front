import { createContext, useReducer } from "react";
import { utilState, utilReducer } from "./reducers/util.reducer";

export const UtilContext = createContext();

export const UtilContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(utilReducer, utilState);

  return (
    <UtilContext.Provider value={{ state, dispatch }}>
      {children}
    </UtilContext.Provider>
  );
};
