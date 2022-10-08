import { Flex } from "@chakra-ui/react";

import HeaderButton from "./HeaderButton";

export default function Header() {
  return (
    <Flex
      h="56px"
      bg="tertiary"
      pr="23px"
      justify="flex-end"
      align="center"
      columnGap="22px"
      borderBottom="2px solid rgba(0, 0, 0, 0.13)"
    >
      <HeaderButton text="Fazer login" path="/sign-in" />
      <HeaderButton text="Cadastre-se" path="/sign-up" />
    </Flex>
  );
}
