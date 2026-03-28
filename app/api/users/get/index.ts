import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../../helper/requestInterceptor";

type usersResponse = {
  id: string;
  country: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  verified: string;
}[];

const getUsers = ({
  signal,
}: {
  signal: AbortSignal;
}): Promise<{ data: usersResponse }> => {
  return request.get("api/user/get-users", {
    signal,
  });
};

export const useGetUsers = (
  options?: Partial<
    UseQueryOptions<{ data: usersResponse }, unknown, usersResponse, string[]>
  >
) => {
  const query = useQuery({
    queryKey: keys.getUsers(),
    queryFn: ({ signal }) => getUsers({ signal }),
    select: ({ data }) => data,
    ...options,
  });

  return query;
};

type userResponse = {
  name: string;
  email: string;
};

const getUser = ({
  signal,
}: {
  signal: AbortSignal;
}): Promise<{ data: userResponse }> => {
  return request.get("get-user", {
    signal,
  });
};

export const useGetUser = (
  options?: Partial<
    UseQueryOptions<
      { data: userResponse },
      unknown,
      { data: userResponse },
      string[]
    >
  >
) => {
  const query = useQuery({
    queryKey: keys.getUser(),
    queryFn: ({ signal }) => getUser({ signal }),
    ...options,
  });

  return query;
};
