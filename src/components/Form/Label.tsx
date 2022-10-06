import { FormLabel } from "@chakra-ui/react";

interface Props {
  label: string;
}

export default function Label({ label }: Props) {
  return (
    <FormLabel mb={2} color="tertiary">
      {label}
    </FormLabel>
  );
}
