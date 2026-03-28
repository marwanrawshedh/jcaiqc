import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../helper/requestInterceptor";
type LoginData = {
  password: string;
  email: string;
  recaptchaToken: string;
};
type LoginResponse = { token: string; role: string };

const login = async (data: LoginData): Promise<LoginResponse> => {
  const { data: loginData } = await request.post("api/user/login", data);
  return loginData;
};

export const useLogin = (
  options?: Partial<
    UseMutationOptions<LoginResponse, unknown, LoginData, unknown>
  >
) => {
  const mutation = useMutation<LoginResponse, unknown, LoginData, unknown>({
    mutationKey: keys.login(),
    mutationFn: login,
    ...options,
  });

  return mutation;
};
