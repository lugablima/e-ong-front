import {
  FormControl,
  Flex,
  Wrap,
  WrapItem,
  Box,
  Checkbox,
} from "@chakra-ui/react";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import FormButton from "../components/Form/FormButton";
import FormContainer from "../components/Form/FormContainer";
import FormInput from "../components/Form/FormInput";
import FormLink from "../components/Form/FormLink";
import FormSelect from "../components/Form/FormSelect";
import Label from "../components/Form/Label";
import InfoText from "../components/Infos/InfoText";
import { useUserContext, IUserContext } from "../context/UserContext";
import { getAllActingAreas } from "../services/actingAreasService";
import { signInUserOrFail, signUpOngOrFail } from "../services/authService";
import { getAllCities } from "../services/citiesService";
import { getAllDonationNeeds } from "../services/donationNeedsService";
import { getAllStates } from "../services/statesService";

interface IAddress {
  street: string;
  neighborhood: string;
  number: string;
  complement: string;
  zipCode: string;
  city: string;
  state: string;
}

export interface ISignUpOng {
  name: string;
  email: string;
  password: string;
  actingArea: string;
  description: string;
  address: IAddress;
}

export default function SignUpOngPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [actingArea, setActingArea] = useState<string>("");
  const [optionsActingArea, setOptionsActingArea] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [complement, setComplement] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [optionsCity, setOptionsCity] = useState<string[]>([]);
  const [state, setState] = useState<string>("");
  const [optionsState, setOptionsState] = useState<string[]>([]);
  const [socialMedias, setSocialMedias] = useState<string>("");
  const [phones, setPhones] = useState<string>("");
  const [donationNeeds, setDonationNeeds] = useState<string[]>([]);
  const [optionsDonationNeeds, setOptionsDonationNeeds] = useState<string[]>(
    [],
  );
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { user, setUser } = useUserContext() as IUserContext;

  async function getActingAreas() {
    try {
      const areas = await getAllActingAreas();

      setOptionsActingArea(areas.map((area) => area.name));
    } catch (error) {
      alert(error);
    }
  }

  async function getCities() {
    try {
      const cities = await getAllCities();

      setOptionsCity(cities.map((city) => city.name));
    } catch (error) {
      alert(error);
    }
  }

  async function getStates() {
    try {
      const states = await getAllStates();

      setOptionsState(states.map((state) => state.name));
    } catch (error) {
      alert(error);
    }
  }

  async function getDonationNeeds() {
    try {
      const donationNeeds = await getAllDonationNeeds();

      setOptionsDonationNeeds(
        donationNeeds.map((donationNeed) => donationNeed.name),
      );
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    if (user) navigate("/");
    getActingAreas();
    getCities();
    getStates();
    getDonationNeeds();
  }, [user]);

  function resetAllStates() {
    setName("");
    setEmail("");
    setPassword("");
    setActingArea("");
    setDescription("");
    setStreet("");
    setNeighborhood("");
    setNumber("");
    setComplement("");
    setZipCode("");
    setCity("");
    setState("");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const address = {
      street,
      neighborhood,
      number,
      complement,
      zipCode,
      city,
      state,
    };

    const body: ISignUpOng = {
      name,
      email,
      password,
      actingArea,
      description,
      address,
    };

    try {
      await signUpOngOrFail(body);

      const userData = await signInUserOrFail({ email, password });

      resetAllStates();
      setUser(userData);
    } catch (error) {
      alert(error);
    }
  }

  function handleCheckboxChange(
    e: ChangeEvent<HTMLInputElement>,
    donation: string,
  ) {
    if (e.target.checked) {
      setDonationNeeds([...donationNeeds, donation]);
    } else {
      setDonationNeeds(donationNeeds.filter((el) => el !== donation));
    }
  }

  return (
    <FormContainer title="Cadastre-se" height="auto">
      <FormControl as="form" onSubmit={(e) => handleSubmit(e)}>
        <Label label="Nome da ONG" />
        <FormInput type="text" state={name} setState={setName} required />
        <Label label="Email" />
        <FormInput type="email" state={email} setState={setEmail} required />
        <Label label="Área de atuação" />
        <FormSelect
          placeholder="Selecione a área de atuação"
          options={optionsActingArea}
          required
          state={actingArea}
          setState={setActingArea}
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
                options={optionsCity}
                required
                state={city}
                setState={setCity}
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
                options={optionsState}
                required
                state={state}
                setState={setState}
              />
            </Box>
          </WrapItem>
        </Wrap>

        <Label label="Mídias Sociais" />
        <FormInput
          type="text"
          placeholder="Ex: @e-ONG;e-ONG-2"
          state={socialMedias}
          setState={setSocialMedias}
          required
        />

        <Label label="Telefones" />
        <FormInput
          type="text"
          placeholder="Ex: (11)11111-1111;(22)22222-2222"
          state={phones}
          setState={setPhones}
          required
        />

        <Label label="Items em falta (Selecione quantos quiser)" />
        <Wrap spacing="10px" mb="19px" justify="space-between">
          {optionsDonationNeeds.map((donation) => (
            <Checkbox
              key={Math.random()}
              fontFamily="default"
              color="tertiary"
              size="14px"
              value={donation}
              onChange={(e) => handleCheckboxChange(e, donation)}
              isChecked={donationNeeds.includes(donation)}
            >
              {donation}
            </Checkbox>
          ))}
        </Wrap>

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
