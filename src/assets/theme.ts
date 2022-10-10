import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#3CA0DE",
  secondary: "#000000",
  tertiary: "#FFFFFF",
  responsive: "#FCF8F2",
};

const fonts = {
  default: "'Nunito', sans-serif",
};

const styles = {
  global: {
    "html, body, #root": {
      height: "100%",
    },
  },
};

export const theme = extendTheme({ colors, fonts, styles });
