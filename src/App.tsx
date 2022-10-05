// import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

export function App() {
  return (
    <ChakraProvider resetCSS>
      <h1>Olá</h1>
    </ChakraProvider>
  );
}
