import { AuthContextProvider } from "./AuthContext";
import { ImageContextProvider } from "./ImageContext";
import { UiContextProvider } from "./UiContext";
import { UtilContextProvider } from "./UtilContext";

export const MainContext = ({ children }) => {
  return (
    <AuthContextProvider>
      <ImageContextProvider>
        <UiContextProvider>
          <UtilContextProvider>{children}</UtilContextProvider>
        </UiContextProvider>
      </ImageContextProvider>
    </AuthContextProvider>
  );
};
