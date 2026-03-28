import { Metadata } from "next";
import { common } from "../../constants/common";
export const metadata: Metadata = {
  title: `Open Access Policy - ${common.JournalTitle}`,
};
const AccessPolicy = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Open Access Policy</h1>
      <div className="">
        <p className="text-gray-700 mb-6">
          The {common.Journal_abbrev} journal is an open-access journal that
          provides immediate, worldwide, barrier-free access to the full text of
          all published articles without charge to readers or their institutions
          for access. Readers have the right to read, download, copy,
          distribute, print, search, or link to the full texts of all articles.
          This journal provides immediate open access to its content on the
          principle that making research freely available to the public supports
          a greater global exchange of knowledge.
        </p>
        <p className="text-gray-700 mb-6">
          The {common.Journal_abbrev} journal adheres to the best practice and
          high publishing standards and complies with the following conditions:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>
            Provides immediate open access to its content on the principle that
            making research freely available to the public supports a greater
            global exchange of knowledge;
          </li>
          <li>
            Allows the author to hold the copyright and to retain publishing
            rights without restrictions;
          </li>
          <li>Uses DOIs as permanent identifiers;</li>
          <li>Embeds machine-readable CC licensing information in articles;</li>
          <li>
            Allows generous reuse and mixing of content, in accordance with CC
            BY 4.0 license;
          </li>
          <li>
            Can provide article-level metadata for any indexers and aggregators.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccessPolicy;
