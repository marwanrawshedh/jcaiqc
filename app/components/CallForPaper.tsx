"use client";
import Image from "next/image";
import { Button } from "@headlessui/react";
import { common } from "../constants/common";
import { useRouter } from "next/navigation";
import { useAuth } from "../providers/authProvider";

const CallForPaper = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  return (
    <div className="">
      <h2 className="text-20 font-medium text-gray-900 mb-6">
        Call for Papers - Volume 2025 Issue 3
      </h2>
      {/* border-[#F9F9F9] */}
      <section className="flex text-start p-4 rounded-lg xl:flex-nowrap xl:justify-normal justify-center flex-wrap gap-4  solid  border-blue-700 border-2 ">
        <Image
          width={200}
          height={150}
          src="/cover-images/call-paper.jpeg"
          alt={`Call for Papers - ${common.JournalTitle}`}
          className=" rounded-lg shadow-md"
        />
        <div className="px-3 py-2 bg-white rounded-lg ">
          <p className="text-16 text-gray-700 mb-6">
            Welcome to the manuscript submission for the{" "}
            <span className="font-semibold text-blue-600">
              {common.JournalTitle}
            </span>
            .
          </p>
          {/* <p className="text-16 text-gray-600 mb-8">
            We invite researchers, practitioners, and academics to submit their
            original work for consideration in{" "}
            <span className="font-semibold">Volume 2025, Issue 3 </span>.
          </p> */}
          <div className="mb-8">
            {/* <p className="text-16 text-gray-700 mb-2">
            Submit your manuscript through our submission system:
          </p> */}
            <Button
              className="w-52 py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none max-w-80"
              onClick={() => router.push(isLoggedIn ? "/submission" : "/login")}
            >
              Make a Submission
            </Button>
          </div>
          <div className="text-gray-700 text-13">
            <p className="mb-2">
              <span className="font-semibold">Editor in Chief:</span>
              Prof. Youakim Badr
            </p>
            <p>
              <span className="font-semibold">Publisher: </span>
              Science Community Publisher 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CallForPaper;
