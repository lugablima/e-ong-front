import { FormControl, Flex, Box } from "@chakra-ui/react";
import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import FormButton from "../components/Form/FormButton";
import FormContainer from "../components/Form/FormContainer";
import FormInput from "../components/Form/FormInput";
import FormLink from "../components/Form/FormLink";
import Label from "../components/Form/Label";
import OAuth from "../components/Form/OAuth";
import { useUserContext, IUserContext } from "../context/UserContext";
import { signUpUserOrFail, signInUserOrFail } from "../services/authService";

export interface ISignUpUser {
  name: string;
  email: string;
  password: string;
}

export default function SignUpPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { user, setUser } = useUserContext() as IUserContext;

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const body: ISignUpUser = {
      name,
      email,
      password,
    };

    try {
      await signUpUserOrFail(body);

      const userData = await signInUserOrFail({ email, password });

      setName("");
      setEmail("");
      setPassword("");
      setUser(userData);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <FormContainer title="Cadastre-se">
      <FormControl as="form" onSubmit={(e) => handleSubmit(e)}>
        <Label label="Nome completo" />
        <FormInput type="text" state={name} setState={setName} required />
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
        <Flex justify="space-between" align="center">
          <Box>
            <FormLink
              path="/sign-up/ong"
              text="É uma ONG?"
              boldText="Cadastre-se"
            />
            <br />
            <FormLink path="/sign-in" text="Já é membro?" boldText="Logue-se" />
          </Box>
          <FormButton text="Cadastre-se" width={100} height={39} />
        </Flex>
      </FormControl>
    </FormContainer>
  );
}
