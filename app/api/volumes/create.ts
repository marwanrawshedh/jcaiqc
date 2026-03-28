import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../helper/requestInterceptor";

type VolumeResponse = {
  volumeNumber: string;
  _id: string;
}[];

const creteVolume = ({
  volumeNumber,
}: {
  volumeNumber: string;
}): Promise<{ data: VolumeResponse }> => {
  return request.post("api/volume/create", { volumeNumber });
};

export const useCreateVolume = (
  options?: Partial<
    UseMutationOptions<
      { data: VolumeResponse },
      unknown,
      {
        volumeNumber: string;
      },
      unknown
    >
  >
) => {
  const mutation = useMutation<
    { data: VolumeResponse },
    unknown,
    {
      volumeNumber: string;
    },
    unknown
  >({
    mutationKey: keys.creteVolume(),
    mutationFn: creteVolume,
    ...options,
  });

  return mutation;
};
