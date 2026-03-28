"use client";
import ArticleSubmissions from "../components/ArticleSubmissions";
import { useGetMySubmittedArticles } from "../api/article/get";

const PublicationEthics = () => {
  const { data } = useGetMySubmittedArticles();

  return <ArticleSubmissions articles={data || []} />;
};

export default PublicationEthics;
