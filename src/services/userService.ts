import axios, { AxiosResponse } from "axios";

interface UserCity {
  address: {
    city: string;
  };
}

export async function calculateUserCity(lat: number, lon: number) {
  try {
    const response: AxiosResponse<UserCity> = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
    );

    return response.data.address.city;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    } else {
      throw "Algum erro ocorreu, por favor, recarregue a página!";
    }
  }
}
