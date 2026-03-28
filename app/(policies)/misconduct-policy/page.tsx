import React from "react";
import { common } from "../../constants/common";

const ArchivingPolicyPage = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Misconduct Policy</h1>
      <p className="mb-8">
        <strong>{common.Journal_abbrev} </strong> takes allegations of
        misconduct very seriously. In addressing such claims within its
        journals, JCSRA adheres to the guidelines established by the Committee
        on Publication Ethics (COPE). If there is evidence or suspicion of
        misconduct in research or publication, the editor may contact the
        author’s institution and/or an ethical commission for further
        investigation. Additionally, JCSRA may seek guidance from COPE and
        confidentially discuss cases in the COPE Forum to ensure appropriate
        resolution.
      </p>
      <p className="mb-8">
        A publication may be retracted if evidence confirms that the authors
        have engaged in research misconduct or if the scientific integrity of
        the study has been significantly compromised. For more details, please
        refer to our Errata and Retractions Policy.
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

export default ArchivingPolicyPage;
