import { Metadata } from "next";
import { common } from "../../constants/common";
export const metadata: Metadata = {
  title: `About Us - ${common.JournalTitle}`,
};
const PrivacyStatement = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy and Data Usage </h1>
      <p className="mb-8">
        The names and email addresses entered in this journal site will be used
        exclusively for the stated purposes of this journal and will not be made
        available for any other purpose or to any other party.
      </p>
    </div>
  );
};

export default PrivacyStatement;
