import { FormControl, Flex } from "@chakra-ui/react";
import { useState, FormEvent } from "react";

import FormButton from "../components/Form/FormButton";
import FormContainer from "../components/Form/FormContainer";
import FormInput from "../components/Form/FormInput";
import FormLink from "../components/Form/FormLink";
import Label from "../components/Form/Label";
import OAuth from "../components/Form/OAuth";
import { signInUserOrFail } from "../services/authService";

export interface IUserData {
  email: string;
  password: string;
}

export default function SignInPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const body: IUserData = {
      email,
      password,
    };

    try {
      await signInUserOrFail(body);

      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <FormContainer title="Login">
      <FormControl as="form" onSubmit={(e) => handleSubmit(e)}>
        <Label label="Email" />
        <FormInput type="email" state={email} setState={setEmail} required />
        <Label label="Senha" />
        <FormInput
          type="password"
          marginBottom={34}
          state={password}
          setState={setPassword}
          required
        />
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
