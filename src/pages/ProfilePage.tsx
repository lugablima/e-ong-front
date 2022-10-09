import { Flex, Text } from "@chakra-ui/react";

export default function ProfilePage() {
  return (
    <Flex
      direction="column"
      justify="flex-start"
      align="center"
      rowGap="15px"
      p="119px 0 67px"
      overflowY="auto"
    >
      <Text
        fontFamily="default"
        color="secondary"
        fontWeight="600"
        fontSize="30px"
        textAlign="center"
        mb="15px"
      >
        Perfil
      </Text>
      {/* <FormLabel>
      Nome
    </FormLabel>   */}
    </Flex>
  );
}
