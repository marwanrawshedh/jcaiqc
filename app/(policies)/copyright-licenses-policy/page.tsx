import { common } from "@/app/constants/common";
import Image from "next/image";
const CopyrightLicensesPolicyPage = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Copyright and Licenses Policy</h1>
      <p className="mb-8">
        Articles published in {common.JournalTitle} will be Open-Access articles
        distributed under the terms and conditions of the{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="license noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {" "}
          Creative Commons Attribution 4.0 International (CC BY).
        </a>{" "}
        Under this license, author(s) retain ownership of the copyright for
        their article, but authors allow anyone to download, reuse, reprint,
        distribute, and/or copy articles published in {common.Journal_abbrev},
        so long as the original author(s) and source are cited.
      </p>
      <div className="max-w-xl text-sm    mt-6 p-4 border-l-4 border-blue-500 bg-gray-100  rounded-lg shadow-md">
        <p className="font-semibold">All publications are licensed under </p>

        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="license noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          CC BY 4.0
          <Image
            width={20}
            height={20}
            className="inline-block h-5 ml-1 align-text-bottom"
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
            alt="CC"
          />
          <Image
            width={20}
            height={20}
            className="inline-block h-5 ml-1 align-text-bottom"
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
            alt="BY"
          />
        </a>
      </div>
    </div>
  );
};

export default CopyrightLicensesPolicyPage;
