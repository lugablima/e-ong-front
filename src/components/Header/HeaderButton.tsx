import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  text: string;
  path: string;
}

export default function HeaderButton({ text, path }: Props) {
  const navigate = useNavigate();

  return (
    <Button
      w="124px"
      h="42px"
      bg="primary"
      color="tertiary"
      borderRadius="12px"
      cursor="pointer"
      variant="solid"
      onClick={() => navigate(path)}
    >
      {text}
    </Button>
  );
}
