import { Select } from "@chakra-ui/react";
import React from "react";

interface FormSelectProps {
  width?: string;
  placeholder: string;
  marginBottom?: string;
  options: string[];
  required: boolean;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export default function FormSelect({
  width,
  placeholder,
  marginBottom,
  options,
  required,
  state,
  setState,
}: FormSelectProps) {
  return (
    <Select
      w={width}
      placeholder={placeholder}
      mb={marginBottom || "19px"}
      border="1px solid #FFFFFF"
      borderRadius="10px"
      color="tertiary"
      fontFamily="default"
      required={required}
      value={state}
      onChange={(e) => setState(e.target.value)}
    >
      {options.length
        ? options.map((opt) => <option key={Math.random()}>{opt}</option>)
        : ""}
      <option>Outro(a)</option>
    </Select>
  );
}

FormSelect.defaultProps = {
  width: "100%",
  marginBottom: "19px",
};
