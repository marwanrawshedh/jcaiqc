import { Metadata } from "next";
import Image from "next/image";
import { common } from "../../constants/common";

export const metadata: Metadata = {
  title: `Plagiarism Policy - ${common.JournalTitle}`,
};

const PlagiarismPolicy = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Plagiarism Policy</h1>

      <div className="space-y-5 text-lg leading-relaxed">
        <p className="text-gray-700">
          Authors are advised to observe high standards in publication ethics.{" "}
          {common.Journal_abbrev} strictly prohibits practices such as
          plagiarism, fabrication, and falsification of data, as well as
          duplicate publication without proper citation.
        </p>
        <p className="text-gray-700">
          In line with our commitment to upholding publication ethics, we have
          implemented a comprehensive policy to address the issue of high AI
          plagiarism. Starting from <strong>January 1st, 2023</strong>, which
          coincides with the launch of Turnitin&apos;s AI detection capability,
          all manuscripts submitted for publication will be subjected to a
          thorough plagiarism check using Turnitin and iThenticate. This check
          will take place after submission and before the manuscripts are sent
          to the editor for editorial review.
        </p>
        <p className="text-gray-700">
          Should any overlapping or similar texts be detected in the submitted
          manuscripts, our journal will promptly initiate an investigation.
          Manuscripts found to have a significant level of AI plagiarism will be
          considered unacceptable and may result in rejection.
        </p>
        <p className="text-gray-700">
          By implementing this policy, we aim to ensure the originality and
          integrity of the research published in {common.Journal_abbrev}. We
          encourage authors to uphold the principles of academic integrity and
          contribute to the advancement of knowledge in an ethical and
          responsible manner.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 mt-10 justify-center items-center">
        <Image
          src="/logos/ithenticate.jpeg"
          alt="iThenticate logo"
          width={280}
          height={160}
          className="rounded shadow-md"
        />
        <Image
          src="/logos/trunitin.jpeg"
          alt="Turnitin logo"
          width={280}
          height={160}
          className="rounded shadow-md"
        />
      </div>
    </div>
  );
};

export default PlagiarismPolicy;
