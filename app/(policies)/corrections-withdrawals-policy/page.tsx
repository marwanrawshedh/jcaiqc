import React from "react";
import { common } from "../../constants/common";

const CorrectionsWithdrawalsPage = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Corrections and Withdrawals</h1>
      <p className="mb-8">
        Corrective or retracted works published by{" "}
        <strong>{common.Journal_abbrev} </strong> are rare but essential to
        maintaining the integrity of the scholarly record.
      </p>
      <p className="mb-8">
        Errata and retractions are issued as separate articles, with a clear and
        prominent link provided from the original article to the respective
        Erratum or Retraction, as is standard in academic publishing. Both the
        original and corrected or retracted versions remain publicly accessible
        and thoroughly indexed. In exceptional cases where content is found to
        violate certain rights or be defamatory, it may be necessary to remove
        it from JCSRA’s website and archive sites.
      </p>
      <p className="mb-8">
        Authors may add comments to published articles to address necessary
        changes. However, this is only permitted if the revisions do not alter
        the article&apos;s findings or conclusions.
      </p>
      <p className="mb-8">
        If a co-author is removed from a paper after its publication, an Erratum
        will be issued.
      </p>
    </div>
  );
};

export default CorrectionsWithdrawalsPage;
