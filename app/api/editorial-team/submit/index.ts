import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../../helper/requestInterceptor";

type AddEditorialMemberResponse = {
  id: string;
};
const AddEditorialMember = (
  data: FormData
): Promise<{ data: AddEditorialMemberResponse }> => {
  return request.post("api/editorial-team/add", data, {
    headers: {
      "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
    },
  });
};

export const useAddEditorialMember = (
  options?: Partial<
    UseMutationOptions<
      { data: AddEditorialMemberResponse },
      unknown,
      FormData,
      unknown
    >
  >
) => {
  const mutation = useMutation<
    { data: AddEditorialMemberResponse },
    unknown,
    FormData,
    unknown
  >({
    mutationKey: keys.AddEditorialMembers(),
    mutationFn: AddEditorialMember,
    ...options,
  });

  return mutation;
};
