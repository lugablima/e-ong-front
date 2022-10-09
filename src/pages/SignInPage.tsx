import { FormControl, Flex } from "@chakra-ui/react";
import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import FormButton from "../components/Form/FormButton";
import FormContainer from "../components/Form/FormContainer";
import FormInput from "../components/Form/FormInput";
import FormLink from "../components/Form/FormLink";
import Label from "../components/Form/Label";
import OAuth from "../components/Form/OAuth";
import { useUserContext, IUserContext } from "../context/UserContext";
import { signInUserOrFail } from "../services/authService";

export interface ISignInUser {
  email: string;
  password: string;
}

export default function SignInPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { user, setUser } = useUserContext() as IUserContext;
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const body: ISignInUser = {
      email,
      password,
    };

    try {
      const data = await signInUserOrFail(body);

      setUser(data);
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
          marginBottom="34px"
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
