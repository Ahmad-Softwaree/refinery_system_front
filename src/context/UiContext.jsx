import { createContext, useReducer } from "react";
import { uiState, uiReducer } from "./reducers/ui.reducer";

export const UiContext = createContext();

export const UiContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, uiState);
  return (
    <UiContext.Provider value={{ state, dispatch }}>
      {children}
    </UiContext.Provider>
  );
};
