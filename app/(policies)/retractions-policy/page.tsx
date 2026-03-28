import React from "react";

const RetractionsPage = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Retractions </h1>
      <p className="mb-8">
        Sometimes it&apos;s necessary to retract a publication when there&apos;s
        been a major breach of trust in the paper&apos;s underlying scientific
        findings. When this occurs, JCSRA shall follow the guidelines
        established by the Committee on Publication Ethics (COPE). There is a
        comprehensive index with direct links to the original versions of all
        retracted articles.
      </p>
      <p className="mb-8">
        For detailed guidance on ethical publishing practices, we recommend
        authors consult the COPE guidelines available on their website at{" "}
        <a className="text-blue-600" href="https://publicationethics.org">
          https://publicationethics.org
        </a>
        .
      </p>
    </div>
  );
};

export default RetractionsPage;
