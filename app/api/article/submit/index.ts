import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../../helper/requestInterceptor";

export interface SubmitArticle {
  type: string;
  abstract: string;
  title: string;
  uploadedFile?: FileList;
  keywords: string[];
  authors?: {
    affiliation: string;
    firstName: string;
    lastName: string;
    title: string;
    country: string;
  }[];
  references: string[];
}
type articleSubmitResponse = {
  id: string;
};
const submitArticle = (
  data: FormData
): Promise<{ data: articleSubmitResponse }> => {
  return request.post("api/article/submit", data, {
    headers: {
      "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
    },
  });
};

export const useSubmitArticle = (
  options?: Partial<
    UseMutationOptions<
      { data: articleSubmitResponse },
      unknown,
      FormData,
      unknown
    >
  >
) => {
  const mutation = useMutation<
    { data: articleSubmitResponse },
    unknown,
    FormData,
    unknown
  >({
    mutationKey: keys.submitArticles(),
    mutationFn: submitArticle,
    ...options,
  });

  return mutation;
};
