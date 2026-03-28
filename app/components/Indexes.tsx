import Image from "next/image";
const Indexes = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <p className="font-medium text-xl text-center">Journal Indexing</p>
      <a
        className="w-[170px]"
        href="https://www.scopus.com/sourceid/21101363747"
      >
        <Image
          src="/logos/scopus.png"
          alt="Scopus  Logo"
          width={170}
          height={40}
          className="object-contain"
        />
      </a>
      <a
        className="w-[120px]"
        href="https://doaj.org/toc/3079-5354"
      >
        <Image
          src="/logos/DOAJ.svg"
          alt="DOAJ Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </a>
      <a
        className="w-[120px]"
        href={`https://about.ebsco.com/m/ee/Marketing/titleLists/awr-coverage.htm`}
      >
        <Image
          src="/logos/EBSCO.png"
          alt="EBSCO Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </a>
      <a
        className="w-[120px]"
        href="https://search.crossref.org/search/works?q=10.63180%2Fjcsra.thestap&from_ui=yes"
      >
        <Image
          src="/logos/crossref.svg"
          alt="CrossRef DOI Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </a>
      <a
        className="w-[120px]"
        href={`https://scholar.google.com/citations?hl=ar&view_op=list_works&gmla=ANZ5fUPVVLwn7oAVN2G5_D3s9cRohreHDxEgd7IFDYqjg8lPEfBUBzWpYQiYbNrvyCYp3nyFEL8RwJoGUM47ISws-8X5cGqQMrJ8bymROXDE20n-5GgSKsdlP_5qmVnKGA8b8rQKxmfsWmRTvN81AiI4ECcd4GVpMmWWksL9J2G3iw&user=JrLDhbwAAAAJ`}
      >
        <Image
          src="/logos/google-scholar.svg"
          alt="Google scholar Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </a>
      <a
        className="w-[120px]"
        href={`https://www.portico.org/publishers/stap/`}
      >
        <Image
          src="/logos/portico.png"
          alt="portico Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </a>
      <a
        className="w-[120px]"
        href={`https://portal.issn.org/resource/ISSN/3079-5354`}
      >
        <Image
          src="/logos/issn.webp"
          alt="ISSN Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </a>
      <a
        className="w-[120px]"
        href={`https://portal.issn.org/resource/ISSN/3079-5354`}
      >
        <Image
          src="/logos/roadissn.png"
          alt="Road Issn Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </a>
      <div className="w-[120px]">
        <Image
          src="/logos/ojs.png"
          alt="OJS Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>{" "}
      <a
        className="w-[120px]"
        href={`https://archive.org/details/@journal_of_cyber_security_and_risk_auditing_jcsra_`}
      >
        <Image
          src="/logos/internet-archive.png"
          alt="portico Logo"
          width={100}
          height={25}
          className="object-contain"
        />
      </a>
      <a className="w-[120px]" href="https://www.scilit.com/sources/503934">
        <Image
          src="/logos/scilit.png"
          alt="Scilit Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </a>{" "}
      <a
        className="w-[120px]"
        href="https://www.researchgate.net/publication/389206731_Journal_of_Cyber_Security_and_Risk_Auditing_JCSRA"
      >
        <Image
          src="/logos/researchGate.png"
          alt="research gate Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </a>
      <div className="w-[120px]">
        <Image
          src="/logos/semantic.jpeg"
          alt="Semantic Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>{" "}
      <a
        className="w-[120px]"
        href="https://www.impactio.com/researcher/JournalofCyberSecurityandRiskAuditingJCSRA-1"
      >
        <Image
          src="/logos/impactio.jpeg"
          alt="Impactio Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </a>
      <a
        className="w-[120px]"
        href="https://independent.academia.edu/JournalofCyberSecurityandRiskAuditing"
      >
        <Image
          src="/logos/academia.jpeg"
          alt="Academia Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </a>
    </div>
  );
};

export default Indexes;
