import React from "react";
import { common } from "../../constants/common";

const PublicationMisbehaviorPage = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Publication Misbehavior</h1>
      <p className="mb-8">
        <strong>{common.Journal_abbrev} </strong> is dedicated to publishing
        articles that adhere to the ethical standards outlined by the Committee
        on Publication Ethics (COPE).
      </p>
      <p className="mb-8">
        For detailed guidance on ethical publishing practices, we recommend
        authors consult the COPE guidelines available on their website at{" "}
        <a className="text-blue-600" href="https://publicationethics.org/.">
          https://publicationethics.org/.
        </a>
      </p>
    </div>
  );
};

export default PublicationMisbehaviorPage;
