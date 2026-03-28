import { Metadata } from "next";
import { common } from "../constants/common";
import Image from "next/image";
export const metadata: Metadata = {
  title: `Abstracting and Indexing - ${common.JournalTitle}`,
};
const indexes = [
  {
    name: "Scopus",
    logo: "/logos/scopus.png",
    link: "https://www.scopus.com/sourceid/21101363747",
  },
  {
    name: "DOAJ",
    logo: "/logos/DOAJ.svg",
    link:"https://doaj.org/toc/3079-5354"
  },
  {
    name: "ِEbsco",
    logo: "/logos/EBSCO.png",
    link: "https://about.ebsco.com/m/ee/Marketing/titleLists/awr-coverage.htm",
  },
  {
    name: "CrossRef DOI",
    logo: "/logos/crossref.svg",
    link: "https://search.crossref.org/search/works?q=10.63180%2Fjcsra.thestap&from_ui=yes",
  },
  {
    name: "Google Scholar",
    logo: "/logos/google-scholar.svg",
    link: "https://scholar.google.com/citations?hl=ar&view_op=list_works&gmla=ANZ5fUPVVLwn7oAVN2G5_D3s9cRohreHDxEgd7IFDYqjg8lPEfBUBzWpYQiYbNrvyCYp3nyFEL8RwJoGUM47ISws-8X5cGqQMrJ8bymROXDE20n-5GgSKsdlP_5qmVnKGA8b8rQKxmfsWmRTvN81AiI4ECcd4GVpMmWWksL9J2G3iw&user=JrLDhbwAAAAJ",
  },
  {
    name: "Portico",
    logo: "/logos/portico.png",
    link: "https://www.portico.org/publishers/stap/",
  },
  {
    name: "ISSN",
    logo: "/logos/issn.webp",
    link: "https://portal.issn.org/resource/ISSN/3079-5354",
  },
  {
    name: "OJS",
    logo: "/logos/ojs.png",
  },
  {
    name: "Semantic Scholar",
    logo: "/logos/semantic.jpeg",
  },
  {
    name: "Scilit",
    logo: "/logos/scilit.png",
    link: "https://www.scilit.com/publishers/98659",
  },
  {
    name: "Impactio",
    logo: "/logos/impactio.jpeg",
    link: "https://www.impactio.com/researcher/JournalofCyberSecurityandRiskAuditingJCSRA-1",
  },
  {
    name: "Academia",
    logo: "/logos/academia.jpeg",
    link: "https://independent.academia.edu/JournalofCyberSecurityandRiskAuditing",
  },
  {
    name: "ResearchGate",
    logo: "/logos/researchGate.png",
    link: "https://www.researchgate.net/publication/389206731_Journal_of_Cyber_Security_and_Risk_Auditing_JCSRA",
  },
  {
    name: "roadIssn",
    logo: "/logos/roadissn.png",
    link: "https://portal.issn.org/resource/ISSN/3079-5354",
  },
];
const AbstractingIndexing = () => {
  return (
    <main className="px-6 py-12">
      {/* Hero */}
      <section className=" mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Journal Indexing</h1>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          {common.JournalTitle} is indexed and archived in leading scholarly
          platforms, ensuring global visibility and long-term accessibility of
          published research.
        </p>
      </section>

      {/* Split Layout */}
      <section className="grid md:grid-cols-1 gap-10">
        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 place-items-center">
          {indexes.map((item, i) =>
            item.link ? (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.logo}
                  alt={`${item.name} Logo`}
                  width={140}
                  height={60}
                  className="object-contain hover:scale-105 transition-transform"
                />
              </a>
            ) : (
              <div key={i}>
                <Image
                  src={item.logo}
                  alt={`${item.name} Logo`}
                  width={120}
                  height={60}
                  className="object-contain opacity-90"
                />
              </div>
            )
          )}
        </div>

        {/* Info Text */}
        {/* <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Why Indexing Matters
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Being listed in prestigious indexing databases improves the
            visibility, credibility, and accessibility of our publications. This
            ensures that the research published in JCSRA reaches a wide academic
            and professional audience worldwide.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our indexing partners include CrossRef for DOI registration, Google
            Scholar for global discoverability, Portico for digital
            preservation, ISSN for serial identification, and several academic
            repositories.
          </p>
        </div> */}
      </section>
    </main>
  );
};

export default AbstractingIndexing;
