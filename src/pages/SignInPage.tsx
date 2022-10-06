import { FormControl, Flex } from "@chakra-ui/react";

import FormButton from "../components/Form/FormButton";
import FormContainer from "../components/Form/FormContainer";
import FormInput from "../components/Form/FormInput";
import FormLink from "../components/Form/FormLink";
import Label from "../components/Form/Label";
import OAuth from "../components/Form/OAuth";

export default function SignInPage() {
  return (
    <FormContainer title="Login">
      <FormControl>
        <Label label="Email" />
        <FormInput type="email" />
        <Label label="Senha" />
        <FormInput type="password" marginBottom={34} />
        <OAuth marginBottom={41} />
        <Flex justify="space-between">
          <FormLink
            path="/sign-up"
            text="Primeira vez?"
            boldText="Cadastre-se"
          />
          <FormButton text="Login" width={100} height={39} />
        </Flex>
      </FormControl>
    </FormContainer>
  );
}
