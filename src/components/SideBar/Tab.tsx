import { Box } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  columnGap: string;
}

export default function Tab({ children, columnGap }: Props) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const filter = isSelected ? "grayscale(100%)" : "grayscale(0%)";
  const weigth = isSelected ? 700 : 400;
  const background = isSelected ? "rgba(0, 0, 0, 0.1)" : "tertiary";

  return (
    <Box
      w="100%"
      h="40px"
      p="11px 0 11px 28px"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      columnGap={columnGap}
      bg={background}
      onClick={() => setIsSelected(!isSelected)}
      filter={filter}
      fontWeight={weigth}
      cursor="pointer"
    >
      {children}
    </Box>
  );
}
