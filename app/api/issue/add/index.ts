import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../../helper/requestInterceptor";

export interface UpdateIssue {
  closeDate: string;
  authorCountries: string;
  description: string;
}
type articlePublishResponse = {
  id: string;
};
const addAuthorCounties = ({
  data,
  id,
}: {
  data: UpdateIssue;
  id: string;
}): Promise<{ data: articlePublishResponse }> => {
  return request.put(`api/issue/add-author-countries/${id}`, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
    // },
  });
};

export const useAddAuthorCounties = (
  options?: Partial<
    UseMutationOptions<
      { data: articlePublishResponse },
      unknown,
      { data: UpdateIssue; id: string },
      unknown
    >
  >
) => {
  const mutation = useMutation<
    { data: articlePublishResponse },
    unknown,
    { data: UpdateIssue; id: string },
    unknown
  >({
    mutationKey: keys.addAuthorCounties(),
    mutationFn: addAuthorCounties,
    ...options,
  });

  return mutation;
};

const assignCurrentIssue = ({
  id,
}: {
  id: string;
}): Promise<{ data: articlePublishResponse }> => {
  return request.post(`api/issue/assign-current-issue/${id}`, {
    headers: {
      "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
    },
  });
};
export const useAssignCurrentIssue = (
  options?: Partial<
    UseMutationOptions<
      { data: articlePublishResponse },
      unknown,
      { id: string },
      unknown
    >
  >
) => {
  const mutation = useMutation<
    { data: articlePublishResponse },
    unknown,
    { id: string },
    unknown
  >({
    mutationKey: keys.addAuthorCounties(),
    mutationFn: assignCurrentIssue,
    ...options,
  });

  return mutation;
};
