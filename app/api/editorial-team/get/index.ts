import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../../helper/requestInterceptor";

type GetEditorialMembersResponse = {
  _id: string;
  title: string;
  firstName: string;
  lastName: string;
  affiliation: string;
  email: string;
  orcid: string;
  type: string;
  googleLink: string;
  fileUrl: string;
  createdAt: Date;
}[];

const getEditorialMembers = ({
  signal,
}: {
  signal: AbortSignal;
}): Promise<{ data: GetEditorialMembersResponse }> => {
  return request.get("/api/editorial-team/get", {
    signal,
  });
};

export const useEditorialMembers = (
  options?: Partial<
    UseQueryOptions<
      { data: GetEditorialMembersResponse },
      unknown,
      GetEditorialMembersResponse,
      string[]
    >
  >
) => {
  const query = useQuery({
    queryKey: keys.getEditorialMembers(),
    queryFn: ({ signal }) => getEditorialMembers({ signal }),
    select: ({ data }) => data,
    ...options,
  });

  return query;
};
