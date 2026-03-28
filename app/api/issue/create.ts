import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../helper/requestInterceptor";

type VolumeResponse = {
  issueNumber: string;
  _id: string;
}[];

const creteIssue = ({
  volumeId,
  issueNumber,
}: {
  volumeId: string;
  issueNumber: string;
}): Promise<{ data: VolumeResponse }> => {
  return request.post("api/issue/create", { volumeId, issueNumber });
};

export const useCreateIssue = (
  options?: Partial<
    UseMutationOptions<
      { data: VolumeResponse },
      unknown,
      {
        volumeId: string;
        issueNumber: string;
      },
      unknown
    >
  >
) => {
  const mutation = useMutation<
    { data: VolumeResponse },
    unknown,
    {
      volumeId: string;
      issueNumber: string;
    },
    unknown
  >({
    mutationKey: keys.creteIssue(),
    mutationFn: creteIssue,
    ...options,
  });

  return mutation;
};
