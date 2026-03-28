import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../helper/requestInterceptor";

export interface UpdateStatistics {
  googleCitationNumber: number;
  scopusCitationNumber: number;
  authors: number;
  authorsDistribution: number;
}

const UpdateCitationNumber = ({
  googleCitationNumber,
  scopusCitationNumber,
  authorsDistribution,
  authors,
}: UpdateStatistics): Promise<void> => {
  return request.put(
    `api/statistic/update-statistics`,
    {
      googleCitationNumber,
      scopusCitationNumber,
      authorsDistribution,
      authors,
    },
    {}
  );
};

export const useUpdateCitationNumber = (
  options?: Partial<
    UseMutationOptions<void, unknown, UpdateStatistics, unknown>
  >
) => {
  const mutation = useMutation<void, unknown, UpdateStatistics, unknown>({
    mutationKey: keys.UpdateStatistics(),
    mutationFn: UpdateCitationNumber,
    ...options,
  });

  return mutation;
};
