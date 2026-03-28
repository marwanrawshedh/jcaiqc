"use client";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import { useGetIssues } from "../api/issue";
const Archives = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Update", href: "/update" },
  ];

  const { data } = useGetIssues();
  return (
    <div className="py-20 sm:px-20 px-10 ">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex item-center justify-center flex-1 gap-20 flex-wrap ">
        <div className="flex flex-col items-center gap-5 justify-center">
          {data?.map(({ value, label, volumeNumber }) => {
            return (
              <div
                key={value}
                className="flex flex-col items-center gap-5 justify-center"
              >
                <Link
                  href={`update/volume-${volumeNumber}-${label}`}
                  className="hover:text-blue-500 font-bold text-lg"
                >
                  Update Volume {volumeNumber} Issue {label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Archives;
