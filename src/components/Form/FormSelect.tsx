import { Select } from "@chakra-ui/react";

interface FormSelectProps {
  width?: string;
  placeholder: string;
  marginBottom?: string;
  options: string[];
  required: boolean;
}

export default function FormSelect({
  width,
  placeholder,
  marginBottom,
  options,
  required,
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
