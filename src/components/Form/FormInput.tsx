import { Input } from "@chakra-ui/react";

interface Props {
  type: string;
  marginBottom?: number;
}

export default function FormInput({ type, marginBottom }: Props) {
  return (
    <Input
      type={type}
      mb={marginBottom || 19}
      borderRadius={10}
      color="tertiary"
      fontFamily="default"
    />
  );
}

FormInput.defaultProps = {
  marginBottom: 19,
};
