import { Flex, Icon, Text } from "@chakra-ui/react";
import { IoChevronForward } from "react-icons/io5";

interface Props {
  ongName: string;
  ongAddress?: string;
}

function ChatCard() {
  return (
    <Flex align="center">
      <Icon viewBox="0 0 200 200" color="green.500" mr="4px">
        <path
          fill="currentColor"
          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
        />
      </Icon>
      <Text
        fontFamily="default"
        fontWeight={400}
        fontSize="14px"
        color="secondary"
      >
        Online
      </Text>
    </Flex>
  );
}

export default function Card({ ongName, ongAddress }: Props) {
  return (
    <Flex
      w="100%"
      maxW="345px"
      h="72px"
      p="10px 22px 10px 60px"
      justify="space-between"
      align="center"
      bg="tertiary"
      border="1px solid #3CA0DE"
      borderRadius="12px"
      boxShadow="0px 1px 4px rgba(0, 0, 0, 0.25)"
      cursor="pointer"
    >
      <Flex direction="column" justify="space-between" align="flex-start">
        <Text
          fontFamily="default"
          fontWeight={600}
          fontSize="24px"
          color="primary"
        >
          {ongName}
        </Text>
        <Text
          fontFamily="default"
          fontWeight={400}
          fontSize="14px"
          color="secondary"
        >
          {ongAddress || <ChatCard />}
        </Text>
      </Flex>
      <Icon as={IoChevronForward} fontSize="36px" color="primary" />
    </Flex>
  );
}

Card.defaultProps = {
  ongAddress: undefined,
};
