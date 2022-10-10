import { Box, Button, Flex, IconButton, Textarea } from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

import InfoBox from "../components/Infos/InfoBox";
import InfoText from "../components/Infos/InfoText";

interface FieldProps {
  field: string;
  value: string;
  height?: string;
}

function Field({ field, value, height }: FieldProps) {
  return (
    <>
      <InfoText
        fontSize="20px"
        margin="0 0 9px"
        textAlign="left"
        text={field}
      />
      <InfoBox
        height={height || "46px"}
        borderRadius="15px"
        padding="10px"
        margin="0 0 16px"
      >
        <InfoText fontSize="18px" margin="0" text={value} />
      </InfoBox>
    </>
  );
}

Field.defaultProps = {
  height: "46px",
};

interface TagProps {
  text: string;
}

function Tag({ text }: TagProps) {
  return (
    <Box
      minWidth="127px"
      height="46px"
      bg="primary"
      borderRadius="15px"
      padding="10px"
    >
      <InfoText fontSize="20px" color="tertiary" margin="0" text={text} />
    </Box>
  );
}

export default function OngPage() {
  return (
    <Flex
      h="auto"
      minH="100%"
      direction="column"
      justify="flex-start"
      align="center"
      // m="146px 0 0 240px"
      // p="0 177.5px 67px"
      p={{ base: "30px 30px 97px", lg: "146px 0 67px 240px" }}
      bg={{ base: "responsive", lg: "tertiary" }}
    >
      <InfoText fontSize="24px" margin="0 0 38px" text="Nome da ONG" />
      <Field field="Endereço" value="Schindler's Street, New York" />
      <Field field="Área de atuação" value="Área de atuação" />
      <Field field="Descrição" value="Descrição" height="107px" />
      <Flex w="100%" maxW="345px" mb="16px">
        <Flex w="50%" direction="column">
          <InfoText
            fontSize="20px"
            margin="0 0 9px"
            textAlign="left"
            text="Mídias Sociais"
          />
          <Flex flexWrap="wrap" columnGap="16px" rowGap="11px">
            <IconButton
              aria-label="facebook"
              colorScheme="facebook"
              icon={<AiFillFacebook style={{ fontSize: "27px" }} />}
              boxShadow="0px 1px 4px rgba(0, 0, 0, 0.25)"
            />
            <IconButton
              aria-label="instagram"
              colorScheme="pink"
              icon={<AiFillInstagram style={{ fontSize: "27px" }} />}
              boxShadow="0px 1px 4px rgba(0, 0, 0, 0.25)"
            />
            <IconButton
              aria-label="twitter"
              colorScheme="twitter"
              icon={<AiFillTwitterSquare style={{ fontSize: "27px" }} />}
              boxShadow="0px 1px 4px rgba(0, 0, 0, 0.25)"
            />
          </Flex>
        </Flex>
        <Box w="50%">
          <Field field="Telefones" value="Telefone 1" />
          <InfoBox height="46px" borderRadius="15px" padding="10px" margin="0">
            <InfoText fontSize="18px" margin="0" text="Telefone 2" />
          </InfoBox>
        </Box>
      </Flex>
      <InfoText
        fontSize="20px"
        textAlign="left"
        margin="0 0 5px"
        text="O que precisamos?"
      />
      <Flex
        w="100%"
        maxW="345px"
        flexWrap="wrap"
        columnGap="31px"
        rowGap="18px"
        mb="16px"
      >
        <Tag text="Alimentos" />
        <Tag text="Roupas" />
        <Tag text="Produtos de Higiene" />
      </Flex>
      <InfoText
        fontSize="20px"
        margin="0 0 9px"
        textAlign="left"
        text="Mensagem"
      />
      <Textarea
        w="100%"
        maxW="345px"
        h="154px"
        bg="tertiary"
        border="1px solid #000000"
        borderRadius="17px"
        p="10px"
        placeholder="Escreva sua mensagem aqui..."
        fontFamily="default"
        fontWeight="400"
        fontSize="18px"
        color="secondary"
        resize="none"
        mb="36px"
      />
      <Button
        bg="primary"
        color="tertiary"
        maxWidth="250px"
        h="55px"
        borderRadius="12px"
        fontFamily="default"
        fontWeight="400"
        fontSize="24px"
        alignSelf="center"
        _hover={{
          filter: "auto",
          brightness: "90%",
        }}
      >
        Fale Conosco!
      </Button>
    </Flex>
  );
}
