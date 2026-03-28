import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { common } from "../constants/common";

export const metadata: Metadata = {
  title: `Aims and Scope - ${common.JournalTitle}`,
  description: `Explore the aims and scope of the ${common.JournalTitle}, covering cyber security and risk auditing topics.`,
};

const AimsAndScopesPage = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Aims and Scope</h1>

      <p className="mb-8 text-lg leading-relaxed">
        <strong>{common.JournalTitle}</strong> ({common.Journal_abbrev}) is a
        peer-reviewed, quarterly international journal that publishes
        high-quality research and practical insights in the areas of
        cybersecurity, information security, and risk auditing. The journal
        provides a scholarly platform for researchers, academics, industry
        experts, and practitioners to share innovative approaches,
        methodologies, and case studies that address the complex challenges of
        securing digital systems and auditing cyber risks in today’s
        interconnected world.
        <br />
        <br />
        {common.Journal_abbrev} covers a broad range of topics, including data
        protection, encryption, intrusion detection, malware countermeasures,
        computer and network forensics, governance and compliance frameworks,
        vulnerability management, supply chain security, and audit automation.
        By bridging the fields of cybersecurity and risk auditing, the journal
        emphasizes both the technical and governance dimensions of digital
        trust, resilience, and accountability.
        <br />
        <br />
        Through its rigorous peer-review process and global editorial expertise,
        {common.Journal_abbrev} aims to contribute to advancing knowledge,
        informing policy, and guiding best practices for building safer and more
        resilient digital infrastructures.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center mb-4">
          🛡️ <span className="ml-2">Cyber Security Field</span>
        </h2>
        <div className="flex flex-wrap gap-8">
          <ul className="list-disc list-inside space-y-1 flex-1 min-w-[250px]">
            {[
              "Cyber security",
              "Information security",
              "Data security",
              "Encryption",
              "Intrusion malware detection and countermeasures",
              "Computer Forensics and Network Forensics",
              "Security issues in vehicular networks (VANETs)",
              "Security issues in smart applications",
              "Security and Privacy",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="flex-shrink-0">
            <Image
              src="/logos/jcaiqc.png"
              alt="{common.Journal_abbrev} Logo"
              width={200}
              height={350}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center mb-4">
          🔍 <span className="ml-2">Risk Auditing Field</span>
        </h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          {[
            "Cyber security risk assessment",
            "Cyber security risk management",
            "Cyber security risk auditing",
            "Governance, Risk, and Compliance (GRC)",
            "Technical Auditing and Vulnerability Management",
            "Privacy and Data Protection Auditing",
            "Supply Chain Risk Management",
            "Audit Analytics and Automation",
            "Cloud and Hybrid Environment Security Auditing",
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <footer className="pt-6 border-t mt-8">
        <p>
          For questions or submissions related to aims and scope, please
          contact:{" "}
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

export default AimsAndScopesPage;
