import { Box } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
  columnGap: string;
  path: string;
}

export default function Tab({ children, columnGap, path }: Props) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const navigate = useNavigate();

  const filter = isSelected ? "grayscale(100%)" : "grayscale(0%)";
  const weigth = isSelected ? 700 : 400;
  const background = isSelected ? "rgba(0, 0, 0, 0.1)" : "tertiary";

  function selectTab() {
    setIsSelected(!isSelected);
    navigate(path);
  }

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
      onClick={() => selectTab()}
      filter={filter}
      fontWeight={weigth}
      cursor="pointer"
    >
      {children}
    </Box>
  );
}
