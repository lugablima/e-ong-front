/* eslint-disable react/jsx-no-useless-fragment */
import { Box, Show } from "@chakra-ui/react";
import { IoMdChatboxes } from "react-icons/io";
import { IoHomeSharp, IoLocationSharp, IoPersonCircle } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { useLocation } from "react-router-dom";

import Bar from "./Bar";
import IconComponent from "./IconComponent";
import SideBarHeader from "./SideBarHeader";
import Tab from "./Tab";
import TextTab from "./TextTab";

export default function SideBar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Show above="lg">
      {path !== "/sign-in" && path !== "/sign-up" && path !== "/sign-up/ong" ? (
        <Bar>
          <SideBarHeader />
          <Tab columnGap="26px" path="/">
            <IconComponent icon={IoHomeSharp} width="16px" height="16px" />
            <TextTab text="Home" />
          </Tab>
          <Tab columnGap="24px" path="/ongs">
            <IconComponent icon={IoLocationSharp} width="18px" height="18px" />
            <TextTab text="ONGs perto de você" />
          </Tab>
          <Tab columnGap="24px" path="/chat">
            <IconComponent icon={IoMdChatboxes} width="18px" height="18px" />
            <TextTab text="Conversas" />
          </Tab>
          <Tab columnGap="24px" path="/phones">
            <IconComponent icon={MdLocalPhone} width="18px" height="18px" />
            <TextTab text="Números de emergência" />
          </Tab>
          <Tab columnGap="22px" path="/profile">
            <IconComponent icon={IoPersonCircle} width="20px" height="20px" />
            <TextTab text="Meu perfil" />
          </Tab>
          <Box w="100%" border="1px solid rgba(0, 0, 0, 0.13)" />
        </Bar>
      ) : (
        ""
      )}
    </Show>
  );
}
