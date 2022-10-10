import { Flex, Image, Text } from "@chakra-ui/react";

import phoneIcon from "../assets/images/phone.png";
import PhoneCard from "../components/Card/PhoneCard";

export default function PhonesPage() {
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
      <Text
        fontFamily="default"
        color="secondary"
        fontWeight="600"
        fontSize="30px"
        textAlign="center"
        mb="15px"
      >
        Números de emergência
      </Text>
      <Image src={phoneIcon} alt="Telefone de emergência" mb="15px" />
      <PhoneCard number={180} description="Central de antendimento à mulher" />
      <PhoneCard number={181} description="Disque Denúncia" />
      <PhoneCard number={190} description="Polícia Militar  " />
      <PhoneCard number={192} description="SAMU" />
      <PhoneCard number={193} description="Bombeiro Militar" />
    </Flex>
  );
}
