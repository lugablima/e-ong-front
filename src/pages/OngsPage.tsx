import { Flex, Show, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Card from "../components/Card/Card";
import { useUserContext, IUserContext } from "../context/UserContext";
import { getOngsByCity } from "../services/ongsService";

interface IOng {
  id: number;
  name: string;
  userId: number;
  address: {
    id: number;
    street: string;
    neighborhood: string;
    number: string;
    complement?: string;
    zipCode: string;
    city: {
      id: number;
      name: string;
      state: {
        id: number;
        name: string;
      };
    };
  };
  actingArea: {
    id: number;
    name: string;
  };
  description?: string;
  phones: [];
  socialMedias: [];
  donationNeedsOngs: [];
}

export default function OngsPage() {
  const { userCity, user } = useUserContext() as IUserContext;
  const [ongs, setOngs] = useState<IOng[]>([]);

  async function getOngs() {
    try {
      const ongsData = await getOngsByCity(userCity, user?.token);

      setOngs(ongsData);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getOngs();
  }, []);

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
      <Show below="lg">
        <Text
          fontFamily="default"
          fontWeight={600}
          fontSize="30px"
          color="secondary"
          textAlign="center"
          mb="60px"
        >
          ONGs perto de você
        </Text>
      </Show>
      {ongs.length
        ? ongs.map((ong) => (
            <Card
              key={ong.id}
              ongName={ong.name}
              ongAddress={`${ong.address.street}, ${ong.address.number}, ${ong.address.neighborhood}, ${ong.address.zipCode}, ${ong.address.city.name}`}
            />
          ))
        : ""}
    </Flex>
  );
}
