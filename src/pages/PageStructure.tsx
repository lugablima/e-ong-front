/* eslint-disable react/jsx-no-useless-fragment */
import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";

interface Props {
  children: ReactNode;
}

export default function PageStructure({ children }: Props) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {path !== "/sign-in" && path !== "/sign-up" && path !== "/sign-up/ong" ? (
        <Flex w="100vw" h="100vh">
          <SideBar />
          <Flex w="calc(100vw - 240px)" h="100%" direction="column">
            <Header />
            {children}
          </Flex>
        </Flex>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
