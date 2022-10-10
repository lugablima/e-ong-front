import axios, { AxiosResponse } from "axios";

import api from "./api";

interface City {
  id: number;
  name: string;
  stateId: number;
  createdAt: Date;
}

export async function getAllCities() {
  try {
    const response: AxiosResponse<City[]> = await api.get("/cities");

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    } else {
      throw "Algum erro ocorreu, por favor, recarregue a página!";
    }
  }
}
