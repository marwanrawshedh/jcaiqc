import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../helper/requestInterceptor";

type IssuesResponse = {
  issueNumber: string;
  _id: string;

  volume: { _id: string; volumeNumber: string };
  closeDate?: string;
  authorCountries?: string[];
  isCurrentIssue: boolean;
  description?: string;
}[];

const getIssues = ({
  signal,
}: {
  signal: AbortSignal;
}): Promise<{ data: IssuesResponse }> => {
  return request.get("api/issue/issues", {
    signal,
  });
};

export const useGetIssues = (
  options?: Partial<
    UseQueryOptions<
      { data: IssuesResponse },
      unknown,
      {
        label: string;
        value: string;
        volumeNumber: string;
        closeDate: string;
        authorCountries: string[];
        isCurrentIssue: boolean;
        description: string;
      }[],
      string[]
    >
  >
) => {
  const query = useQuery({
    queryKey: keys.getIssues(),
    queryFn: ({ signal }) => getIssues({ signal }),
    select: ({ data }) =>
      data.map(
        ({
          _id,
          issueNumber,
          volume,
          authorCountries,
          closeDate,
          isCurrentIssue,
          description,
        }) => ({
          label: issueNumber,
          value: _id,
          volumeNumber: volume.volumeNumber,
          authorCountries,
          closeDate,
          isCurrentIssue,
          description,
        })
      ),
    ...options,
  });

  return query;
};

type IssueResponse = {
  issueNumber: string;
  id: string;
};

const getIssue = ({
  signal,
}: {
  signal: AbortSignal;
}): Promise<{ data: IssueResponse }> => {
  return request.get("/api/issue/issue", {
    signal,
  });
};

export const useGetIssue = (
  options?: Partial<
    UseQueryOptions<
      { data: IssueResponse },
      unknown,
      { data: IssueResponse },
      string[]
    >
  >
) => {
  const query = useQuery({
    queryKey: keys.getIssue(),
    queryFn: ({ signal }) => getIssue({ signal }),
    ...options,
  });

  return query;
};

const getVolumeIssues = ({
  signal,
  volumeId,
}: {
  signal: AbortSignal;
  volumeId: string;
}): Promise<{ data: IssuesResponse }> => {
  return request.get(`api/issue/${volumeId}/issues`, {
    signal,
  });
};

export const useGetVolumeIssues = (
  volumeId: string,
  options?: Partial<
    UseQueryOptions<
      { data: IssuesResponse },
      unknown,
      {
        label: string;
        value: string;
        volumeNumber: string;
        closeDate: string;
        authorCountries: string[];
        isCurrentIssue: boolean;
      }[],
      string[]
    >
  >
) => {
  const query = useQuery({
    queryKey: keys.getVolumeIssues(volumeId),
    queryFn: ({ signal }) => getVolumeIssues({ signal, volumeId }),
    select: ({ data }) =>
      data.map(
        ({
          _id,
          issueNumber,
          volume,
          authorCountries,
          closeDate,
          isCurrentIssue,
        }) => ({
          label: issueNumber,
          value: _id,
          volumeNumber: volume.volumeNumber,
          authorCountries,
          closeDate,
          isCurrentIssue,
        })
      ),
    ...options,
  });

  return query;
};
