import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../../helper/requestInterceptor";

type ArticleResponse = {
  id: string;
  title: string;
  authors: {
    affiliation: string;
    country: string;
    firstName: string;
    lastName: string;
    title: string;
  }[];
  abstract: string;
  createdAt: string;
  fileUrl: string;
}[];

const getSubmittedArticles = ({
  signal,
}: {
  signal: AbortSignal;
}): Promise<{ data: ArticleResponse }> => {
  return request.get("api/article/submitted-articles", {
    signal,
  });
};

export const useGetSubmittedArticles = (
  options?: Partial<
    UseQueryOptions<
      { data: ArticleResponse },
      unknown,
      ArticleResponse,
      string[]
    >
  >
) => {
  const query = useQuery({
    queryKey: keys.getSubmittedArticles(),
    queryFn: ({ signal }) => getSubmittedArticles({ signal }),
    select: ({ data }) => data,
    ...options,
  });

  return query;
};

const getMySubmittedArticles = ({
  signal,
}: {
  signal: AbortSignal;
}): Promise<{ data: ArticleResponse }> => {
  return request.get("api/article/my-submitted-articles", {
    signal,
  });
};

export const useGetMySubmittedArticles = (
  options?: Partial<
    UseQueryOptions<
      { data: ArticleResponse },
      unknown,
      ArticleResponse,
      string[]
    >
  >
) => {
  const query = useQuery({
    queryKey: keys.getMySubmittedArticles(),
    queryFn: ({ signal }) => getMySubmittedArticles({ signal }),
    select: ({ data }) => data,
    ...options,
  });

  return query;
};
