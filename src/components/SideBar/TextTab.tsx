import { Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
}

export default function TextTab({ text }: Props) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <Text
      fontFamily="Roboto"
      fontSize={14}
      lineHeight="16px"
      color="secondary"
      textAlign="left"
      onClick={() => setIsSelected(!isSelected)}
    >
      {text}
    </Text>
  );
}
