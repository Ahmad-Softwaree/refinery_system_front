import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const ChakraUIProvider = ({ children }) => {
  return <ChakraProvider resetCSS={false}>{children}</ChakraProvider>;
};

export default ChakraUIProvider;
