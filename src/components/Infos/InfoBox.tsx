import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  width?: string;
  height: string;
  background?: "primary" | "secondary" | "tertiary";
  border?: string;
  borderRadius?: string;
  margin: string;
  padding?: string;
  children: ReactNode;
}

export default function InfoBox({
  width,
  height,
  background,
  border,
  borderRadius,
  margin,
  padding,
  children,
}: Props) {
  return (
    <Box
      w={width}
      maxW="345px"
      h={height}
      border={border}
      boxShadow="0px 1px 4px rgba(0, 0, 0, 0.25)"
      borderRadius={borderRadius}
      bg={background}
      m={margin}
      p={padding}
    >
      {children}
    </Box>
  );
}

InfoBox.defaultProps = {
  width: "100%",
  background: "tertiary",
  border: "1px solid #000000",
  borderRadius: "10px",
  padding: "8px 2px",
};
