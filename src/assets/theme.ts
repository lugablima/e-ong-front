import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#3CA0DE",
  secondary: "#000000",
  tertiary: "#FFFFFF",
};

const fonts = {
  default: "'Nunito', sans-serif",
};

export const theme = extendTheme({ colors, fonts });
