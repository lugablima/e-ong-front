import { Input } from "@chakra-ui/react";
import React from "react";

interface Props {
  type: string;
  marginBottom?: number;
  required: boolean;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export default function FormInput({
  type,
  marginBottom,
  required,
  state,
  setState,
}: Props) {
  return (
    <Input
      type={type}
      mb={marginBottom || 19}
      borderRadius={10}
      color="tertiary"
      fontFamily="default"
      value={state}
      onChange={(e) => setState(e.target.value)}
      required={required}
    />
  );
}

FormInput.defaultProps = {
  marginBottom: 19,
};
