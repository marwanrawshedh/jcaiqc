import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../helper/requestInterceptor";

export interface UpdateArticle {
  doi: string;
  uploadedFile?: FileList;
  citation: string;
}
type articlePublishResponse = {
  id: string;
};
const UpdateArticle = ({
  data,
  id,
}: {
  data: FormData;
  id: string;
}): Promise<{ data: articlePublishResponse }> => {
  return request.put(`api/article/update/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
    },
  });
};

export const useUpdateArticle = (
  options?: Partial<
    UseMutationOptions<
      { data: articlePublishResponse },
      unknown,
      { data: FormData; id: string },
      unknown
    >
  >
) => {
  const mutation = useMutation<
    { data: articlePublishResponse },
    unknown,
    { data: FormData; id: string },
    unknown
  >({
    mutationKey: keys.UpdateArticle(),
    mutationFn: UpdateArticle,
    ...options,
  });

  return mutation;
};
