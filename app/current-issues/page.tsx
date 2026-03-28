import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import { ArticlesResponse } from "@/app/api/article";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Current Issues - Jordanian Journal of Informatics and Computing",
};

type Articles = Promise<ArticlesResponse[]>;
const fetchCurrentIssueArticles = async (): Articles => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/article/current-issue`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) throw new Error("Unauthorized");

    return response.json();
  } catch (error) {
    throw error;
  }
};
const CurrentIssue = async () => {
  const articles = await fetchCurrentIssueArticles();

  if (!articles?.length) {
    const breadcrumbItems = [
      { label: "Home", href: "/" },
      { label: "Current Issue", href: "/current-issue" },
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
    { label: "Current Issue", href: "/current-issue" },
  ];

  return (
    <div className="flex-1 py-20 flex flex-col gap-8 sm:px-20 px-10">
      <Breadcrumb items={breadcrumbItems} />
      {articles.map(
        (
          {
            title,
            fileUrl,
            // abstract,
            authors,
            _id,
            issue,
            volume,
            static: staticFlag,
          },
          i
        ) => {
          return (
            <Fragment key={title}>
              <div className={`flex flex-col gap-3 `}>
                <div className="flex flex-col w-full h-full  gap-4">
                  <Link
                    className="cursor-pointer text-blue-500  hover:text-indigo-600 transition duration-500 ease-in-out "
                    href={`/archives/volume-${volume.volumeNumber}-${
                      issue.issueNumber
                    }/${staticFlag ? i + 1 : _id}`}
                  >
                    <h1 className="font-bold text-2xl ">{title} </h1>
                  </Link>
                  <div className="flex   justify-between gap-4 ">
                    <p className="text-base text-gray-700 ">
                      By{" "}
                      {authors
                        .map(({ firstName, lastName }) => firstName + lastName)
                        .join(", ")}
                    </p>
                    <Link
                      href={fileUrl}
                      className="flex justify-center items-center cursor-pointer hover:scale-105 underline text-blue-800"
                    >
                      <Image
                        className="shadow-sm"
                        src={"/logos/pdf.svg"}
                        alt="PDF logo"
                        width={50}
                        height={70}
                      />
                      PDF
                    </Link>
                  </div>
                  {/* <div>
                    <h2 className="text-lg text-blue-800">
                      <strong> Abstract </strong>
                    </h2>
                    <p>{abstract}</p>
                  </div> */}
                </div>
              </div>
              {i !== articles?.length - 1 && (
                <div className={" border-gray-400 border-solid border h-0.5"} />
              )}
            </Fragment>
          );
        }
      )}
    </div>
  );
};

export default CurrentIssue;
