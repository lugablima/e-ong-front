import { Text, ResponsiveValue } from "@chakra-ui/react";

type TextAlign = "left" | "center" | "right";

interface Props {
  fontFamily?: string;
  fontWeight?: number;
  fontSize: string;
  color?: "primary" | "secondary" | "tertiary";
  textAlign?: ResponsiveValue<TextAlign>;
  margin: string;
  text: string;
}

export default function InfoText({
  fontFamily,
  fontWeight,
  fontSize,
  color,
  textAlign,
  margin,
  text,
}: Props) {
  return (
    <Text
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      fontSize={fontSize}
      color={color}
      textAlign={textAlign}
      m={margin}
    >
      {text}
    </Text>
  );
}

InfoText.defaultProps = {
  fontFamily: "default",
  fontWeight: 400,
  color: "secondary",
  textAlign: "center",
};
