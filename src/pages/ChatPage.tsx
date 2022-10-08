import { Flex } from "@chakra-ui/react";

import Card from "../components/Card/Card";

export default function ChatPage() {
  return (
    <Flex
      direction="column"
      justify="flex-start"
      align="center"
      rowGap="15px"
      mt="146px"
    >
      <Card ongName="Nome da ONG" />
      <Card ongName="Nome da ONG" />
      <Card ongName="Nome da ONG" />
    </Flex>
  );
}
