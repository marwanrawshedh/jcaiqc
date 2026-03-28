import React from "react";
import { common } from "../../constants/common";
import Image from "next/image";

const ArchivingPolicyPage = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Archiving and Digital Preservation Policy
      </h1>

      <p className="mb-8">
        To ensure the long-term preservation, integrity, and accessibility of
        its scholarly content, the <strong>{common.JournalTitle} </strong>{" "}
        implements a robust multi-layered archiving policy based on best
        practices and industry standards. This policy combines third-party
        preservation services, cloud infrastructure, and local offline storage
        to safeguard against data loss, technological obsolescence, and access
        disruption.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold flex items-center mb-2">
          🔐 <span className="ml-2">Portico Partnership</span>
        </h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            All published content is permanently preserved in Portico&apos;s
            secure archive.
          </li>
          <li>
            Portico guarantees content availability even if the journal ceases
            operations or experiences technical failures.
          </li>
          <li>
            Researchers and libraries are assured of continued access to all
            articles and issues in perpetuity.
          </li>
          <li>
            Portico uses advanced replication and migration strategies to adapt
            to future technologies and formats.
          </li>
        </ul>
        <p className="mt-2 flex  items-center flex-wrap">
          For more information, visit:{" "}
          <a
            href="https://www.portico.org/publishers/stap/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://www.portico.org/publishers/stap/
          </a>
          <a
            className="w-[120px]"
            href={`https://www.portico.org/publishers/stap/`}
          >
            <Image
              src="/logos/portico.png"
              alt="portico Logo"
              width={100}
              height={25}
              className="object-contain"
            />
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold flex items-center mb-2">
          🔐 <span className="ml-2">Internet Archive</span>
        </h2>
        <p className="list-disc list-inside space-y-1 ml-4">
          <strong>{common.Journal_abbrev} </strong> uses the Internet Archive
          for a preservation tool and an open-access resource for All published
          content. Internet Archive ensures the continuity of digital knowledge
          for researchers, libraries, and the general public. It is widely
          recognized as one of the largest online repositories of digital
          content in the world.
        </p>
        <p className="mt-2 flex  items-center flex-wrap">
          For more information, visit:{" "}
          <a
            href="https://archive.org/details/@journal_of_cyber_security_and_risk_auditing_jcsra_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://archive.org/details/@journal_of_cyber_security_and_risk_auditing_jcsra_
          </a>
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
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold flex items-center mb-2">
          ☁️ <span className="ml-2">Cloud Infrastructure Services</span>
        </h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            All journal data, including manuscripts and editorial records, are
            stored cloud solution in (AWS services, Azure services) .
          </li>
          {/* <li>
            AWS Glacier is used for long-term cold storage and versioning of
            archived materials.
          </li> */}
          {/* <li>
            Daily automated backups are encrypted and securely transmitted.
          </li> */}
          {/* <li>
            Access is managed by IAM policies, audit logs, and 2FA for admins.
          </li> */}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold flex items-center mb-2">
          💽 <span className="ml-2">Offline Backup and Physical Storage</span>
        </h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>continuity backups are stored offline.</li>
          <li>
            Backups are saved on hard drives and Blu-ray discs in secure,
            separate locations.
          </li>
          <li>
            Offline storage ensures content access during cloud or system
            failures.
          </li>
          <li>Regular checks and test restores verify data integrity.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          🧾 Versioning and Integrity Checks
        </h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            All archived content is assigned a DOI and remains immutable
            post-publication.
          </li>
          <li>
            Errata and retractions are transparently documented and linked.
          </li>
          {/* <li>
            Checksum verification and version control protect against
            corruption.
          </li> */}
        </ul>
      </section>

      <footer className="pt-6 border-t mt-8">
        <p>
          For questions or further information about our archiving practices,
          please contact:{" "}
          <a
            href="mailto:editor.jcaiqc@sciencecommunitypublisher.org"
            className="text-blue-600 underline"
          >
            editor.jcaiqc@sciencecommunitypublisher.org
          </a>
        </p>
      </footer>
    </div>
  );
};

export default ArchivingPolicyPage;
