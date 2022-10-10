import { Flex, Show } from "@chakra-ui/react";
import { IoMdChatboxes } from "react-icons/io";
import { IoHomeSharp, IoLocationSharp, IoPersonCircle } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { useLocation } from "react-router-dom";

import IconMobileMenu from "./IconMobileMenu";

export default function MobileMenu() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Show below="lg">
      {path !== "/sign-in" && path !== "/sign-up" && path !== "/sign-up/ong" ? (
        <Flex
          w="100%"
          h="67px"
          p="11px 20px"
          justify="space-between"
          align="center"
          bg="primary"
          position="fixed"
          bottom="0"
          left="0"
          zIndex="1"
        >
          <IconMobileMenu
            icon={<IoLocationSharp />}
            alt="Ongs perto de você"
            path="/ongs"
          />
          <IconMobileMenu
            icon={<IoMdChatboxes />}
            alt="Conversas"
            path="/chat"
          />
          <IconMobileMenu icon={<IoHomeSharp />} alt="Mapa" path="/" />
          <IconMobileMenu
            icon={<MdLocalPhone />}
            alt="Telefones de emergência"
            path="/phones"
          />
          <IconMobileMenu
            icon={<IoPersonCircle />}
            alt="Meu perfil"
            path="/profile"
          />
        </Flex>
      ) : (
        ""
      )}
    </Show>
  );
}
