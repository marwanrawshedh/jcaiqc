import React from "react";
import { Metadata } from "next";
import { common } from "../constants/common";

export const metadata: Metadata = {
  title: `Author Fees - ${common.JournalTitle}`,
};

const ArticleCharges = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Author Fees</h1>

      <p className="mb-6">
        At <strong>{common.JournalTitle}</strong>, we are committed to
        supporting academic research and fostering knowledge sharing across the
        global community.
      </p>

      <p className="mb-6">
        To reinforce our mission, we are proud to announce that there are{" "}
        <strong>no fees</strong> for:
      </p>

      <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
        <li>
          <strong>Submission:</strong> Submit your article without worrying
          about any charges.
        </li>
        <li>
          <strong>Publication:</strong> Approved articles will be published
          without incurring any costs.
        </li>
      </ul>

      <p>
        Our goal is to make high-quality research accessible to everyone without
        financial barriers.
      </p>
    </div>
  );
};

export default ArticleCharges;
