import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import keys from "./keys";
import request from "../../../helper/requestInterceptor";

const incrementViewArticle = ({
  articleId,
}: {
  articleId: string;
}): Promise<void> => {
  return request.post(`/api/article/${articleId}/incrementView`, {});
};

export const useIncrementArticle = (
  options?: Partial<
    UseMutationOptions<void, unknown, { articleId: string }, unknown>
  >
) => {
  const mutation = useMutation<void, unknown, { articleId: string }, unknown>({
    mutationKey: keys.incrementViewArticles(),
    mutationFn: incrementViewArticle,
    ...options,
  });

  return mutation;
};
