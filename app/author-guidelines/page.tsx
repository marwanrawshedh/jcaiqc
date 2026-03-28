import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { common } from "../constants/common";

export const metadata: Metadata = {
  title: `Author Guidelines - ${common.JournalTitle}`,
};

const AuthorGuidelines = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Author Guidelines</h1>

      <div className="mb-6">
        <Link
          href="/articles/Template-JCSRA.docx"
          className="inline-flex items-center gap-2 underline text-blue-700 hover:text-blue-900 hover:scale-105 transition-transform duration-300"
        >
          <Image src="/logos/word.svg" alt="Word Icon" width={24} height={24} />
          Download Journal Template
        </Link>
      </div>

      <div className="space-y-5 text-lg leading-relaxed">
        <p>
          <strong>{common.JournalTitle}</strong> is an online academic journal
          that upholds the highest standards of peer review, engaging both
          established and emerging scholars from around the world. We welcome
          research articles on all aspects of Cybersecurity and related fields.
        </p>

        <p>
          Authors are required to prepare their manuscript using the{" "}
          {common.Journal_abbrev} Word Template and submit it via the online
          submission system. Only manuscripts formatted according to{" "}
          {common.Journal_abbrev} guidelines will be sent for peer review.
        </p>

        <p>
          The manuscript must be original, not previously published, and not
          under consideration by any other journal.
        </p>

        <p>
          All submitted papers will be reviewed by experts in the field, with
          evaluations based on originality, clarity of presentation, and
          scientific significance.
        </p>

        <p>
          In our commitment to timely publication, we aim to complete the review
          process within four weeks. If authors do not receive any updates
          within this timeframe, we encourage them to contact the editors via
          email.
        </p>

        <p>
          <strong>{common.JournalTitle}</strong> is an open access international
          journal.
        </p>
      </div>
    </div>
  );
};

export default AuthorGuidelines;
