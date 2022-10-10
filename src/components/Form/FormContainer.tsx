import { Box, Text } from "@chakra-ui/react";

import FormLogo from "./FormLogo";

interface Props {
  height: string;
  title: string;
  children: JSX.Element;
}

export default function FormContainer({ height, title, children }: Props) {
  return (
    <Box
      w="100%"
      h={height}
      minH="100%"
      p="50px 0"
      bg="primary"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box w={309}>
        <FormLogo />
        <Text
          fontFamily="default"
          fontSize={36}
          color="tertiary"
          fontWeight={700}
          mb={27}
        >
          {title}
        </Text>
        {children}
      </Box>
    </Box>
  );
}
