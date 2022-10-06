import { Flex, IconButton } from "@chakra-ui/react";
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";

interface Props {
  marginBottom: number;
}

export default function OAuth({ marginBottom }: Props) {
  return (
    <Flex mb={marginBottom}>
      <IconButton
        aria-label="Google"
        colorScheme="orange"
        mr={3}
        icon={<IoLogoGoogle />}
      />
      <IconButton
        aria-label="Facebook"
        colorScheme="facebook"
        icon={<IoLogoFacebook />}
      />
    </Flex>
  );
}
