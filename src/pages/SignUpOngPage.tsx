import { FormControl, Flex, Wrap, WrapItem, Box } from "@chakra-ui/react";
import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import FormButton from "../components/Form/FormButton";
import FormContainer from "../components/Form/FormContainer";
import FormInput from "../components/Form/FormInput";
import FormLink from "../components/Form/FormLink";
import FormSelect from "../components/Form/FormSelect";
import Label from "../components/Form/Label";
import InfoText from "../components/Infos/InfoText";
import { useUserContext, IUserContext } from "../context/UserContext";
import { signUpUserOrFail, signInUserOrFail } from "../services/authService";

export interface ISignUpUser {
  name: string;
  email: string;
  password: string;
}

export default function SignUpOngPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  // const [actingArea, setActingArea] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [complement, setComplement] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  // const [city, setCity] = useState<string>("");
  // const [state, setState] = useState<string>("");
  const [socialMedias, setSocialMedias] = useState<string>("");
  const [phones, setPhones] = useState<string>("");
  // const [donationNeeds, setDonationNeeds] = useState<string>("");
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
        <Label label="Nome da ONG" />
        <FormInput type="text" state={name} setState={setName} required />
        <Label label="Email" />
        <FormInput type="email" state={email} setState={setEmail} required />
        <Label label="Área de atuação" />
        <FormSelect
          placeholder="Selecione a área de atuação"
          options={["Area 1", "Area 2"]}
          required
        />
        <Label label="Descrição (Opcional)" />
        <FormInput
          type="text"
          state={description}
          setState={setDescription}
          marginBottom="34px"
          required={false}
        />
        <InfoText
          fontWeight={700}
          fontSize="24px"
          color="tertiary"
          textAlign="left"
          margin="0 0 19px"
          text="Endereço"
        />
        <Label label="Rua" />
        <FormInput type="text" state={street} setState={setStreet} required />
        <Label label="Bairro" />
        <FormInput
          type="text"
          state={neighborhood}
          setState={setNeighborhood}
          required
        />
        <Wrap spacingY="15px" spacingX="10px" mb="34px" justify="space-between">
          <WrapItem>
            <Box>
              <Label label="Número" />
              <FormInput
                width="70px"
                type="text"
                state={number}
                setState={setNumber}
                required
              />
            </Box>
          </WrapItem>
          <WrapItem>
            <Box>
              <Label label="Comp. (Opcional)" />
              <FormInput
                width="137px"
                type="text"
                state={complement}
                setState={setComplement}
                required={false}
              />
            </Box>
          </WrapItem>
          <WrapItem>
            <Box>
              <Label label="CEP" />
              <FormInput
                width="75px"
                type="text"
                state={zipCode}
                setState={setZipCode}
                required
              />
            </Box>
          </WrapItem>
          <WrapItem>
            <Box>
              <Label label="Cidade" />
              <FormSelect
                width="130px"
                placeholder="Selecione a cidade"
                marginBottom="0"
                options={["Cidade 1", "Cidade 2"]}
                required
              />
            </Box>
          </WrapItem>
          <WrapItem>
            <Box>
              <Label label="Estado" />
              <FormSelect
                width="130px"
                placeholder="Selecione o estado"
                marginBottom="0"
                options={["Estado 1", "Estado 2"]}
                required
              />
            </Box>
          </WrapItem>
        </Wrap>

        <Label label="Mídias Sociais" />
        <FormInput
          type="text"
          placeholder="Ex: @e-ONG;e-ONG-2 (Separe os endereços por ponto e vírgula)"
          state={socialMedias}
          setState={setSocialMedias}
          required
        />

        <Label label="Telefones" />
        <FormInput
          type="text"
          placeholder="Ex: (11)11111-1111;(22)22222-2222 (Separe os telefones por ponto e vírgula)"
          state={phones}
          setState={setPhones}
          required
        />

        <Label label="Necessidades" />
        <FormSelect
          placeholder="Selecione o item"
          options={["Roupas", "Produtos de Higiene"]}
          required
        />

        <Label label="Senha" />
        <FormInput
          type="password"
          marginBottom="34px"
          state={password}
          setState={setPassword}
          required
        />
        <Flex justify="space-between" align="center">
          <FormLink path="/sign-in" text="Já é membro?" boldText="Logue-se" />
          <FormButton text="Cadastre-se" width={100} height={39} />
        </Flex>
      </FormControl>
    </FormContainer>
  );
}
