"use client";
import { useIncrementArticle } from "@/app/api/article/increment";
import { useEffect } from "react";

function AddArticleView({ articleId }: { articleId: string }) {
  const { mutate } = useIncrementArticle();

  useEffect(() => {
    if (!articleId) return;
    const viewedArticles = JSON.parse(
      sessionStorage.getItem("viewedArticles") || "[]"
    );
    if (!viewedArticles.includes(articleId)) {
      mutate({ articleId });

      viewedArticles.push(articleId);
      sessionStorage.setItem("viewedArticles", JSON.stringify(viewedArticles));
    }
  }, [articleId, mutate]);

  return <></>;
}
export default AddArticleView;
