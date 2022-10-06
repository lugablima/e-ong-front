import { Link, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

interface Props {
  path: string;
  text: string;
  boldText: string;
}

export default function FormLink({ path, text, boldText }: Props) {
  return (
    <Link
      as={ReactRouterLink}
      to={path}
      color="tertiary"
      fontFamily="default"
      fontWeight={400}
      fontSize={16}
      textDecoration="none"
      alignSelf="flex-end"
    >
      {text}
      <Text as="span" fontWeight={700}>
        {` ${boldText}`}
      </Text>
    </Link>
  );
}
