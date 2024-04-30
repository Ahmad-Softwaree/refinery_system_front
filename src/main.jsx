import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { QueryProvider } from "./react-query/QueryProvider.jsx";
import { MainContext } from "./context/Index.jsx";
import ChakraUIProvider from "./provider/chakra/ChakraUIProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <>
    <MainContext>
      <ChakraUIProvider>
        <QueryProvider>
          <App />
        </QueryProvider>
      </ChakraUIProvider>
    </MainContext>
  </>
  //</React.StrictMode>,
);
