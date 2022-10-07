import { Flex, Icon, Image } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";

import logo from "../../assets/images/logo.png";

export default function SideBarHeader() {
  return (
    <Flex
      w="100%"
      h="56px"
      pl="28px"
      justify="flex-start"
      align="center"
      columnGap="24px"
    >
      <Icon as={IoMenu} w="24px" h="24px" cursor="pointer" />
      <Image src={logo} alt="Logo da e-ONG" cursor="pointer" />
    </Flex>
  );
}
