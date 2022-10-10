import { Flex, Text } from "@chakra-ui/react";

interface Props {
  number: number;
  description: string;
}

export default function PhoneCard({ number, description }: Props) {
  return (
    <Flex
      direction="column"
      justify="space-between"
      w="100%"
      maxW="345px"
      h="80px"
      bg="primary"
      borderRadius="12px"
      p="10px 0 14px 27px"
      fontFamily="default"
      color="tertiary"
    >
      <Text fontWeight="700" fontSize="25px">
        {number}
      </Text>
      <Text fontWeight="400" fontSize="14px">
        {description}
      </Text>
    </Flex>
  );
}
