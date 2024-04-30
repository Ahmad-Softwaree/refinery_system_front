import { createContext, useReducer } from "react";
import { imageState, imageReducer } from "./reducers/image.reducer";

export const ImageContext = createContext();

export const ImageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(imageReducer, imageState);

  return (
    <ImageContext.Provider value={{ state, dispatch }}>
      {children}
    </ImageContext.Provider>
  );
};
