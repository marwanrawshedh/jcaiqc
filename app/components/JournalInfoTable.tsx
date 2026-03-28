import Link from "next/link";
import { common } from "../constants/common";
import Image from "next/image";

const journalData = {
  Title: `${common.JournalTitle}`,
  Frequency: (
    <Link href={"/archives"} className="text-accent">
      4 issues per year <br />
      (March, June, September, December)
    </Link>
  ),
  ISSN: (
    <a
      className="transition duration-500 ease-in-out hover:text-accent-hover text-accent"
      href="https://portal.issn.org/resource/ISSN/3079-5354"
      aria-label={`View ISSN ${common.issn} (Online) record`}
    >
      {common.issn} (Online)
    </a>
  ),
  "Type of Review": (
    <Link
      className="text-accent"
      href={"/peer-review"}
      aria-label="Learn about our double blind review process"
    >
      Double Blind Review
    </Link>
  ),
  "Doi Prefix": (
    <a
      className="text-accent"
      href="https://search.crossref.org/search/works?q=10.63180%2Fjcsra.thestap&from_ui=yes"
      aria-label="Search publications with DOI prefix 10.63180/jcaiqc.thestap"
    >
      10.63180/jcaiqc.thestap
    </a>
  ),
  Indexing: (
    <>
      <a
        className="text-accent"
        href="https://www.scopus.com/sourceid/21101363747"
        aria-label="View the journal's Scopus indexing record"
      >
        Scopus,{" "}
      </a>
      <a
        className="text-accent"
        href="https://search.crossref.org/search/works?q=10.63180%2Fjcsra.thestap&from_ui=yes"
        aria-label="View the journal's Crossref records"
      >
        Crossref,{" "}
      </a>
      <a
        className="text-accent"
        href="https://scholar.google.com/citations?hl=ar&view_op=list_works&gmla=ANZ5fUPVVLwn7oAVN2G5_D3s9cRohreHDxEgd7IFDYqjg8lPEfBUBzWpYQiYbNrvyCYp3nyFEL8RwJoGUM47ISws-8X5cGqQMrJ8bymROXDE20n-5GgSKsdlP_5qmVnKGA8b8rQKxmfsWmRTvN81AiI4ECcd4GVpMmWWksL9J2G3iw&user=JrLDhbwAAAAJ"
        aria-label="View the journal's Google Scholar profile"
      >
        Google Scholar,{" "}
      </a>
      <a
        className="text-accent"
        href="https://www.scilit.com/sources/503934"
        aria-label="View the journal's Scilit profile"
      >
        Scilit
      </a>
    </>
  ),
  Publisher: (
    <a
      className="transition duration-500 ease-in-out hover:text-accent-hover text-accent"
      href="https://sciencecommunitypublisher.org/"
      aria-label="Visit the publisher Science Community Publisher  website"
    >
      Science Community Publisher 
    </a>
  ),
  Archiving: (
    <a
      className="text-accent"
      href="https://www.portico.org/publishers/stap"
      aria-label="View the journal's Portico archiving record"
    >
      Portico
    </a>
  ),
  Organizer:
    " Research group members of Cybersecurity Risk Assessment in IT Infrastructure Assets at the University of Jordan",
  ReviewSpeed: "60 days",
  "Digital Marketing": (
    <div className="flex gap-1">
      <a
        href="mailto:editor.jcaiqc@sciencecommunitypublisher.org"
        className="text-accent flex flex-col"
        aria-label="Send email to the Journal of Cybersecurity in AI and Quantum Computing editorial office"
      >
        Email,{" "}
        <Image
          src="/logos/email.svg"
          alt="Email logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </a>
      <a
        className="text-accent"
        aria-label="Visit the Journal of Cybersecurity in AI and Quantum Computing LinkedIn page"
        href="https://www.linkedin.com/in/journal-of-cyber-security-and-risk-auditing-jcaiqc-b902b5349/"
      >
        LinkedIn,{" "}
        <Image
          src="/logos/linkedin.svg"
          alt="LinkedIn logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </a>
      <a
        className="text-accent"
        aria-label="Visit the Journal of Cybersecurity in AI and Quantum Computing Instagram page"
        href="https://www.instagram.com/editor.jcaiqc/"
      >
        Instagram{" "}
        <Image
          src="/logos/instagram.svg"
          alt="Instagram logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </a>
      <a
        className="text-accent"
        aria-label="Visit the Journal of Cybersecurity in AI and Quantum Computing Facebook page"
        href="https://www.facebook.com/profile.php?id=61587309230200"
      >
        Facebook{" "}
        <Image
          src="/logos/facebook.svg"
          alt="Facebook logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </a>
    </div>
  ),
  "Online Submission": (
    <a
      className="text-accent"
      href="https://submit.sciencecommunitypublisher.org/index.php/jcaiqc/index"
      aria-label="Submit your research online through the Journal of Cybersecurity in AI and Quantum Computing submission system"
    >
      Open Journal System (OJS)
    </a>
  ),
};
const JournalInfoTable = () => {
  return (
    <section className="flex flex-col gap-3 ">
      <h2 className="text-20 font-medium text-start font-heading">Journal Information</h2>
      {/* #F9F9F9 */}
      <div className="overflow-x-auto rounded-lg solid border-accent border-[1px]">
        <div className=" divide-gray-300 grid sm:grid-cols-2 grid-cols-1 ">
          {Object.entries(journalData).map(([key, value]) => (
            <div className="flex" key={key}>
              <div className="py-3 px-4 font-medium text-gray-500 w-28 ">
                {key.replace(/([a-z])([A-Z])/g, "$1 $2")}
              </div>
              <div className="py-3 px-4 flex-1">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default JournalInfoTable;
