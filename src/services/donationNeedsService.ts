import axios, { AxiosResponse } from "axios";

import api from "./api";

interface DonationNeed {
  id: number;
  name: string;
  createdAt: Date;
}

export async function getAllDonationNeeds() {
  try {
    const response: AxiosResponse<DonationNeed[]> = await api.get(
      "/donationNeeds",
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    } else {
      throw "Algum erro ocorreu, por favor, recarregue a página!";
    }
  }
}
