"use client";
import ArticleSubmissions from "../components/ArticleSubmissions";
import { useGetSubmittedArticles } from "../api/article/get";

const PublicationEthics = () => {
  const { data } = useGetSubmittedArticles();

  return <ArticleSubmissions articles={data || []} />;
};

export default PublicationEthics;
