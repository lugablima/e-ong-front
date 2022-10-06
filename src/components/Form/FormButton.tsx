import { Button } from "@chakra-ui/react";

interface Props {
  text: string;
  width: number;
  height: number;
}

export default function FormButton({ text, width, height }: Props) {
  return (
    <Button
      bg="tertiary"
      color="secondary"
      fontWeight={400}
      fontSize={16}
      w={width}
      h={height}
      boxShadow="lg"
      type="submit"
    >
      {text}
    </Button>
  );
}
