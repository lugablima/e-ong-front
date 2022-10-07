import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  width: string;
  height: string;
}

export default function IconComponent({ icon, width, height }: Props) {
  return <Icon as={icon} w={width} h={height} />;
}
