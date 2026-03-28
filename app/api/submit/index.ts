import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../helper/requestInterceptor";

export interface PublishArticle {
  type: string;
  abstract: string;
  title: string;
  uploadedFile?: FileList;
  keywords: string[];
  authors?: {
    affiliation: string;
    firstName: string;
    lastName: string;
    // email: string;
    // phoneNumber: string;
    title: string;
    country: string;
    // nationality: string;
  }[];
  references: string[];
  volume: string;
  issue: string;
  lastPage: string;
  firstPage: string;
  publicationDate: string;
}
type articlePublishResponse = {
  id: string;
};
const publishArticle = (
  data: FormData
): Promise<{ data: articlePublishResponse }> => {
  return request.post("api/article/publish", data, {
    headers: {
      "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
    },
  });
};

export const usePublishArticle = (
  options?: Partial<
    UseMutationOptions<
      { data: articlePublishResponse },
      unknown,
      FormData,
      unknown
    >
  >
) => {
  const mutation = useMutation<
    { data: articlePublishResponse },
    unknown,
    FormData,
    unknown
  >({
    mutationKey: keys.publishArticle(),
    mutationFn: publishArticle,
    ...options,
  });

  return mutation;
};
