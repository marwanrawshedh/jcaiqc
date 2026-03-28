import React from "react";
import { Metadata } from "next";
import { common } from "../constants/common";
import Image from "next/image";

export const metadata: Metadata = {
  title: `Journal Partnerships - ${common.JournalTitle}`,
};

const JournalPartnerships = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Journal Partnerships</h1>
      <section className="mb-6">
        <p className="text-xl font-bold mb-2">CrossRef</p>
        <Image
          src="/logos/crossref.svg"
          alt="CrossRef DOI Logo"
          width={180}
          height={40}
          className="object-contain"
        />
        <div className="flex gap-10">
          <p className="flex-1">
            <strong>{common.JournalTitle}</strong> partners with CrossRef to
            make our journals, and publications more discoverable. CrossRef is
            an official Digital Object Identifier Registration Agency of the
            International DOI Foundation.
            <br />
            <br />
            For more details visit the link:
            <a
              className="text-blue-600"
              href="https://search.crossref.org/search/works?q=3079-5354&from_ui=yes&page=2"
            >
              crossref
            </a>
          </p>{" "}
        </div>
      </section>
      <section className="mb-6">
        <p className="text-xl font-bold mb-2">Portico</p>
        <Image
          src="/logos/portico.png"
          alt="portico Logo"
          width={160}
          height={40}
          className="object-contain"
        />
        <div className="flex gap-10">
          <p className="flex-1">
            <strong>{common.JournalTitle}</strong> The Journal of Cyber Security
            and Risk Auditing ({common.Journal_abbrev}) has officially partnered
            with Portico, a leading digital preservation service, to ensure the
            long-term accessibility and integrity of its published content.
            Through this collaboration, all articles published in{" "}
            {common.Journal_abbrev} will be securely archived in Portico’s
            trusted digital repository, safeguarding them against technological
            obsolescence, data loss, or unforeseen disruptions.
            <br />
            <br />
            This partnership demonstrates JCSRA’s commitment to maintaining the
            permanent scholarly record and aligning with international best
            practices in academic publishing. By integrating with Portico, the
            journal enhances its credibility and provides authors, readers, and
            institutions with assurance that their contributions will remain
            accessible for future generations of researchers. <br />
            <br /> The collaboration also supports JCSRA’s broader mission of
            promoting high-quality research in cybersecurity, risk management,
            and digital auditing while adhering to standards of transparency,
            reliability, and sustainability in scholarly communication.
            <br />
            <br />
            For more details visit the link:{" "}
            <a
              className="text-blue-600"
              href="https://www.portico.org/publishers/stap/ "
            >
              STAP Portico
            </a>
          </p>{" "}
        </div>
      </section>
      <section className="mb-6">
        <p className="text-xl font-bold mb-2">Open Journal Systems (OJS)</p>
        <Image
          src="/logos/ojs.png"
          alt="OJS Logo"
          width={160}
          height={40}
          className="object-contain"
        />
        <div className="flex gap-10">
          <p className="flex-1">
            <strong>{common.JournalTitle}</strong> ({common.Journal_abbrev}) has
            adopted the Open Journal Systems (OJS) platform to manage and
            streamline its publishing operations. OJS, an internationally
            recognized open-source journal management system developed by the
            Public Knowledge Project (PKP), provides {common.Journal_abbrev}{" "}
            with an integrated workflow for manuscript submission, peer review,
            editorial decision-making, and online publication.
            <br />
            <br />
            Through this partnership, {common.Journal_abbrev} benefits from a
            robust, transparent, and efficient editorial process, enhancing the
            experience for authors, reviewers, and editors. The adoption of OJS
            also supports greater visibility and discoverability of published
            articles, ensuring that research in cybersecurity, risk auditing,
            and digital trust reaches a global scholarly audience.
            <br />
            <br />
            This collaboration reflects JCSRA’s commitment to adopting best
            practices in scholarly publishing by leveraging digital tools that
            improve accessibility, transparency, and sustainability. By
            partnering with OJS, the journal strengthens its mission to advance
            high-quality research and foster innovation in the fields of
            cybersecurity and risk management.
          </p>
        </div>
      </section>
      <section className="mb-6">
        <p className="text-xl font-bold mb-2">Google Scholar </p>
        <Image
          src="/logos/google-scholar.svg"
          alt="Google scholar Logo"
          width={160}
          height={40}
          className="object-contain"
        />
        <div className="flex gap-10">
          <p className="flex-1">
            <strong>{common.JournalTitle}</strong> partner with Google Scholar
            to allow researcher’s access to their publication’s Journal of Cyber
            Security and Risk Auditing through Google Scholar. Through this
            partnership, researchers, professors, and students will have
            streamlined access to Journal of Cybersecurity in AI and Quantum Computing
            articles from any location, enabling them to utilize the resources
            they need at home, at conferences, or during travel.
          </p>
        </div>
      </section>
      <section className="mb-6">
        <p className="text-xl font-bold mb-2">ORCID </p>
        <Image
          src="/logos/orcid.svg"
          alt="Google scholar Logo"
          width={160}
          height={40}
          className="object-contain"
        />
        <div className="flex gap-10">
          <p className="flex-1">
            <strong>{common.JournalTitle}</strong> is fully integrated with
            ORCID, a non-profit organization that is dedicated to sharing
            information globally through enabling a transparent and trustworthy
            connection between researchers, their contributions, and
            affiliations. When editors/authors publish articles, Journal of
            Cyber Security and Risk Auditing will collect their ORCID iD to
            verify their identity, tie the published work or journal manuscript
            review to their name, as well as help increase the discoverability
            and creditability of their work.
          </p>
        </div>
      </section>
    </div>
  );
};

export default JournalPartnerships;
