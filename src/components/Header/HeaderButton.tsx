import { Button } from "@chakra-ui/react";

interface Props {
  text: string;
}

export default function HeaderButton({ text }: Props) {
  return (
    <Button
      w="124px"
      h="42px"
      bg="primary"
      color="tertiary"
      borderRadius="12px"
      cursor="pointer"
      variant="solid"
    >
      {text}
    </Button>
  );
}
