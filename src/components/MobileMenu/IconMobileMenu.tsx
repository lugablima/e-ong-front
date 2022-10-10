import { IconButton } from "@chakra-ui/react";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  alt: string;
  icon: ReactElement;
  path: string;
}

export default function IconMobileMenu({ alt, icon, path }: Props) {
  const navigate = useNavigate();

  return (
    <IconButton
      aria-label={alt}
      icon={icon}
      borderRadius="50%"
      fontSize="25px"
      onClick={() => navigate(path)}
    />
  );
}
