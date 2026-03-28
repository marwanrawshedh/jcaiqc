import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../helper/requestInterceptor";

export type ArticlesResponse = {
  _id: string;
  title: string;
  abstract: string;
  keywords: string[];
  submitter: string;
  authors: {
    title: string;
    firstName: string;
    lastName: string;
    affiliation: string;
    // phoneNumber: string;
    country: string;
    orcid?: string;
  }[];
  fileUrl: string;
  createdAt: Date;
  type: string;
  status: string;
  references: string[];
  doi?: string;
  citation?: string;
  publicationDate?: string;
  volume: { _id: string; volumeNumber: string };
  issue: { _id: string; issueNumber: string };
  firstPage?: string;
  lastPage?: string;
  static?: boolean;
  viewCount?: number;
};

const getIssueArticles = ({
  signal,
}: {
  signal: AbortSignal;
}): Promise<{ data: ArticlesResponse }> => {
  return request.get("api/article/issue/:volume/:issue", {
    signal,
  });
};

export const useGetIssueArticles = (
  options?: Partial<
    UseQueryOptions<
      { data: ArticlesResponse },
      unknown,
      { data: ArticlesResponse },
      string[]
    >
  >
) => {
  const query = useQuery({
    queryKey: keys.getArticles(),
    queryFn: ({ signal }) => getIssueArticles({ signal }),
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

export const useGetArticle = (
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
    queryKey: keys.getArticle(),
    queryFn: ({ signal }) => getUser({ signal }),
    ...options,
  });

  return query;
};
