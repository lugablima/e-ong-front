import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Bar({ children }: Props) {
  return (
    <Box
      w={240}
      h="100vh"
      bg="tertiary"
      position="fixed"
      top="0"
      left="0"
      zIndex="2"
    >
      {children}
    </Box>
  );
}
