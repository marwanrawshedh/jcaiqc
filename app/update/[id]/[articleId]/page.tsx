import { wordsMapper } from "@/app/constants/common";
import Breadcrumb from "@/app/components/Breadcrumb";
import { ArticlesResponse } from "@/app/api/article";
import UpdateForm from "./UpdateForm";

async function fetchArticle({
  articleId,
  issue,
  volume,
}: {
  articleId: string;
  issue: string;
  volume: string;
}) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/article/${volume}/${issue}/${articleId}`,

      // `http://localhost:5000/api/article/${id}/${articleId}`,
      {
        // credentials: "include", // 🔥 Required to send cookies
      }
    );

    if (!response.ok) throw new Error("Unauthorized");

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

const Archives = async ({
  params,
}: {
  params: Promise<{ articleId: string; id: string }>;
}) => {
  const articleId = (await params).articleId;
  const id = (await params).id;
  const volume = id?.split("-")[1];

  const issue = id?.split("-")[2];
  // const { data } = useGetArticles();
  // const response = await axiosInstance.get("api/article/get-articles", {
  //   headers: {
  //     "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
  //   },
  // });

  const data: ArticlesResponse = await fetchArticle({
    articleId,
    issue,
    volume,
  });

  if (!!!data) {
    return <>no data</>;
  }
  const { authors, title } = data;
  // const {
  //   abstract,
  //   fileUrl,
  //   authors,
  //   title,
  //   keywords,
  //   doi,
  //   publicationDate,
  //   references,
  //   citationDescription,
  // } = data;
  if (!!!data) {
    return (
      <div className="flex-1 py-20 flex flex-col gap-8">
        {/* <h3 className="font-bold mb-6">
          Volume 2025, Issue 2 - Table of Contents
        </h3> */}
        <div className="flex flex-1 items-center justify-center font-bold text-2xl text-gray-600">
          <p>Article coming soon</p>
        </div>
      </div>
    );
  }
  // const {
  //   abstract,
  //   articleSrc,
  //   authors,
  //   title,
  //   keywords,
  //   doi,
  //   published,
  //   citationDescription,
  //   references,
  //   firstPage,

  //   lastPage,
  // } = articles?.[id]?.[articleId - 1];
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Update", href: "/update" },
    { label: `${wordsMapper?.[id]}`, href: `/update/${id}` },
    { label: `Article ${articleId}`, href: `/update/${id}/${articleId}` },
  ];

  return (
    <div className="flex-1 py-20  flex flex-col gap-8 sm:px-20 px-10">
      <Breadcrumb items={breadcrumbItems} />

      <article className={`flex flex-col gap-10 `}>
        <header>
          <h1 className="citation_title font-bold text-3xl ">{title}</h1>
        </header>
        <div className={`flex flex-col gap-3`}>
          <div className="flex flex-col w-full h-full  gap-4  ">
            <div className="flex  gap-4 sm:flex-nowrap flex-wrap justify-between ">
              <div className="flex flex-wrap item-start">
                by&nbsp;
                {authors?.map((author, i) => {
                  return (
                    <h3
                      key={author.firstName}
                      className="citation_author text-base text-gray-700 "
                    >
                      <strong>
                        {author.firstName} {author.lastName}
                      </strong>
                      {i + 1 !== authors?.length && <>{" ;"}</>}
                    </h3>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </article>
      <UpdateForm articleId={articleId} id={id} />
    </div>
  );
};
export default Archives;
