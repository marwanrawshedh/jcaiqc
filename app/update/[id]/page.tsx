import Link from "next/link";
import { Fragment } from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import { wordsMapper } from "@/app/constants/common";
import { ArticlesResponse } from "@/app/api/article";
type Articles = Promise<ArticlesResponse[]>;
const fetchIssueArticles = async ({
  issue,
  volume,
}: {
  volume: string;
  issue: string;
}): Articles => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/article/issue/${volume}/${issue}`,

      // `http://localhost:5000/api/article/${id}/${articleId}`,
      {
        // credentials: "include", // 🔥 Required to send cookies
      }
    );

    if (!response.ok) throw new Error("Unauthorized");

    return response.json();
  } catch (error) {
    throw error;
  }
};
const Archives = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const volume = id?.split("-")[1];

  const issue = id?.split("-")[2];
  const articles = await fetchIssueArticles({ issue, volume });

  if (!articles?.length) {
    const breadcrumbItems = [
      { label: "Home", href: "/" },
      { label: "Update", href: "/update" },
      {
        label: `${wordsMapper?.[id]}`,
        href: `/update/volume-${volume}-${issue}`,
      },
    ];
    return (
      <div className="flex-1 py-20 flex flex-col gap-8 sm:px-20 px-10">
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex flex-1 items-center justify-center font-bold text-2xl text-gray-600">
          <p>Article coming soon</p>
        </div>
      </div>
    );
  }
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Update", href: "/update" },
    { label: `${wordsMapper?.[id]}`, href: `/update/${id}` },
  ];

  return (
    <div className="flex-1 py-20 flex flex-col gap-8 sm:px-20 px-10">
      <Breadcrumb items={breadcrumbItems} />
      {articles.map(({ title, _id }, i) => {
        return (
          <Fragment key={title}>
            <div className={`flex flex-col gap-3 `}>
              <div className="flex flex-col w-full h-full  gap-4">
                <Link
                  className="cursor-pointer  hover:text-indigo-600 transition duration-500 ease-in-out "
                  href={`/update/volume-${volume}-${issue}/${_id}`}
                >
                  <h1 className="font-bold text-2xl ">{title}</h1>
                </Link>
              </div>
            </div>
            {i !== articles?.length - 1 && (
              <div className={" border-gray-400 border-solid border h-0.5"} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
export default Archives;
