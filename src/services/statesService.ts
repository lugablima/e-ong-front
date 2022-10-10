import axios, { AxiosResponse } from "axios";

import api from "./api";

interface State {
  id: number;
  name: string;
  createdAt: Date;
}

export async function getAllStates() {
  try {
    const response: AxiosResponse<State[]> = await api.get("/states");

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    } else {
      throw "Algum erro ocorreu, por favor, recarregue a página!";
    }
  }
}
