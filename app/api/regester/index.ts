import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../helper/requestInterceptor";
import { common } from "@/app/constants/common";
type RegisterData = {
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  password: string;
};
type RegistrationResponse = {
  id: string;
};
const register = (
  data: RegisterData
): Promise<{ data: RegistrationResponse }> => {
  return request.post("api/user/register", {
    ...data,
    journalName: common.JournalTitle,
  });
};

export const useRegister = (
  options?: Partial<
    UseMutationOptions<
      { data: RegistrationResponse },
      unknown,
      RegisterData,
      unknown
    >
  >
) => {
  const mutation = useMutation<
    { data: RegistrationResponse },
    unknown,
    RegisterData,
    unknown
  >({
    mutationKey: keys.register(),
    mutationFn: register,
    ...options,
  });

  return mutation;
};
