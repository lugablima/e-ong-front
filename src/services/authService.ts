import axios, { AxiosResponse } from "axios";

import { IUserData } from "../pages/SignInPage";
import api from "./api";

interface ISignInResponse {
  userId: number;
  token: string;
}

export async function signInUserOrFail(userData: IUserData) {
  try {
    const response: AxiosResponse<ISignInResponse> = await api.post(
      "/sign-in",
      userData,
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError<IUserData>(error)) {
      throw error.response?.data;
    } else {
      // eslint-disable-next-line no-throw-literal
      throw "Algum erro ocorreu, por favor, tente novamente mais tarde!";
    }
  }
}
