import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../../helper/requestInterceptor";

type DeleteEditorialMemberResponse = {
  id: string;
};
const deleteEditorialMember = (
  id: string
): Promise<{ data: DeleteEditorialMemberResponse }> => {
  return request.delete(`api/editorial-team/delete/${id}`);
};

export const useDeleteEditorialMember = (
  options?: Partial<
    UseMutationOptions<
      { data: DeleteEditorialMemberResponse },
      unknown,
      string,
      unknown
    >
  >
) => {
  const mutation = useMutation<
    { data: DeleteEditorialMemberResponse },
    unknown,
    string,
    unknown
  >({
    mutationKey: keys.DeleteEditorialMember(),
    mutationFn: deleteEditorialMember,
    ...options,
  });

  return mutation;
};
