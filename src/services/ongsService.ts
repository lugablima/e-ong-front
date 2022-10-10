import axios, { AxiosResponse } from "axios";

import api from "./api";

interface Ong {
  id: number;
  name: string;
  userId: number;
  address: {
    id: number;
    street: string;
    neighborhood: string;
    number: string;
    complement?: string;
    zipCode: string;
    city: {
      id: number;
      name: string;
      state: {
        id: number;
        name: string;
      };
    };
  };
  actingArea: {
    id: number;
    name: string;
  };
  description?: string;
  phones: [];
  socialMedias: [];
  donationNeedsOngs: [];
}

export async function getOngsByCity(
  userCity: string,
  token: string | undefined,
) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response: AxiosResponse<Ong[]> = await api.get(
      `/ongs/${userCity}`,
      config,
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    } else {
      throw "Não foi possível buscar as ONGs, por favor, recarregue a página!";
    }
  }
}
