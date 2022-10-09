import { Input } from "@chakra-ui/react";
import React from "react";

interface Props {
  width?: string;
  type: string;
  marginBottom?: string;
  required: boolean;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}

export default function FormInput({
  width,
  type,
  marginBottom,
  placeholder,
  required,
  state,
  setState,
}: Props) {
  return (
    <Input
      w={width}
      type={type}
      placeholder={placeholder}
      _placeholder={{ fontFamily: "default", color: "tertiary" }}
      mb={marginBottom || "19px"}
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
  width: "100%",
  marginBottom: "19px",
  placeholder: "",
};
