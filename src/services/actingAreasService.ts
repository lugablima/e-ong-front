import axios, { AxiosResponse } from "axios";

import api from "./api";

interface ActingArea {
  id: number;
  name: string;
  createdAt: Date;
}

export async function getAllActingAreas() {
  try {
    const response: AxiosResponse<ActingArea[]> = await api.get("/actingAreas");

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    } else {
      throw "Algum erro ocorreu, por favor, recarregue a página!";
    }
  }
}
