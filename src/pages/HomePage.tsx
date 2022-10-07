import { Box, Text } from "@chakra-ui/react";

import SideBar from "../components/SideBar/SideBar";

export default function HomePage() {
  return (
    <Box w="100vw" h="100vh">
      <SideBar />
      <Text color="secondary" textAlign="center">
        Mapa
      </Text>
    </Box>
  );
}
