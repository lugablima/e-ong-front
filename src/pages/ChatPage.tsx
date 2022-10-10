import { Flex, Show, Text } from "@chakra-ui/react";

import Card from "../components/Card/Card";

export default function ChatPage() {
  return (
    <Flex
      h="auto"
      minH="100%"
      direction="column"
      justify="flex-start"
      align="center"
      rowGap="15px"
      p={{ base: "30px 30px 97px", lg: "146px 0 67px 240px" }}
      bg={{ base: "responsive", lg: "tertiary" }}
    >
      <Show below="lg">
        <Text
          fontFamily="default"
          fontWeight={600}
          fontSize="30px"
          color="secondary"
          textAlign="center"
          mb="60px"
        >
          Conversas
        </Text>
      </Show>
      <Card ongName="Nome da ONG" />
      <Card ongName="Nome da ONG" />
      <Card ongName="Nome da ONG" />
    </Flex>
  );
}
