import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useUserContext, IUserContext } from "../../context/UserContext";

interface Props {
  text: string;
  path: string;
}

export default function HeaderButton({ text, path }: Props) {
  const navigate = useNavigate();
  const { setUser } = useUserContext() as IUserContext;

  function handleOnClick() {
    if (text === "Sair") {
      setUser(null);
    }

    navigate(path);
  }

  return (
    <Button
      w="124px"
      h="42px"
      bg="primary"
      color="tertiary"
      borderRadius="12px"
      cursor="pointer"
      variant="solid"
      onClick={() => handleOnClick()}
      _hover={{
        filter: "auto",
        brightness: "90%",
      }}
    >
      {text}
    </Button>
  );
}
