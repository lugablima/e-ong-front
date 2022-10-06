import axios, { AxiosResponse } from "axios";

import { IUserData } from "../pages/SignInPage";
import { ISignUpUser } from "../pages/SignUpPage";
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
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    } else {
      throw "Algum erro ocorreu, por favor, tente novamente mais tarde!";
    }
  }
}

export async function signUpUserOrFail(userData: ISignUpUser) {
  try {
    const response: AxiosResponse<string> = await api.post(
      "/sign-up",
      userData,
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data;
    } else {
      throw "Algum erro ocorreu, por favor, tente novamente mais tarde!";
    }
  }
}
