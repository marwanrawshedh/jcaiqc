import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../helper/requestInterceptor";

type VolumesResponse = {
  volumeNumber: string;
  _id: string;
}[];

const getVolumes = ({
  signal,
}: {
  signal: AbortSignal;
}): Promise<{ data: VolumesResponse }> => {
  return request.get("api/volume/volumes", {
    signal,
  });
};

export const useGetVolumes = (
  options?: Partial<
    UseQueryOptions<
      { data: VolumesResponse },
      unknown,
      { label: string; value: string }[],
      string[]
    >
  >
) => {
  const query = useQuery({
    queryKey: keys.getVolumes(),
    queryFn: ({ signal }) => getVolumes({ signal }),
    select: ({ data }) =>
      data.map(({ _id, volumeNumber }) => ({
        label: volumeNumber,
        value: _id,
      })),
    ...options,
  });

  return query;
};

type VolumeResponse = {
  volumeNumber: string;
  id: string;
};

const getVolume = ({
  signal,
}: {
  signal: AbortSignal;
}): Promise<{ data: VolumeResponse }> => {
  return request.get("/api/volume/volume", {
    signal,
  });
};

export const useGetVolume = (
  options?: Partial<
    UseQueryOptions<
      { data: VolumeResponse },
      unknown,
      { data: VolumeResponse },
      string[]
    >
  >
) => {
  const query = useQuery({
    queryKey: keys.getVolume(),
    queryFn: ({ signal }) => getVolume({ signal }),
    ...options,
  });

  return query;
};
