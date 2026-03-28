import { Metadata } from "next";
import { common } from "../../constants/common";
export const metadata: Metadata = {
  title: `About Us - ${common.JournalTitle}`,
};
const AboutJournal = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <section className=" mb-12">
        <h1 className="text-4xl font-bold text-gray-900">About The Journal</h1>
      </section>

      <section className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          {common.JournalTitle} (ISSN: {common.issn}) is a peer-reviewed
          scientific journal devoted to publishing original, high-quality
          research in the field of cyber security and risk auditing. The journal
          provides a scholarly platform for researchers, academics, industry
          experts, and practitioners to share innovative approaches,
          methodologies, and case studies that address the complex challenges of
          securing digital systems and auditing cyber risks in today’s
          interconnected world.
        </p>
      </section>

      <section className="bg-gray-50 rounded-2xl p-6 mb-10">
        <p className="text-gray-700">
          {common.Journal_abbrev} adheres to an annual publication model, where
          each issue corresponds to its publication year - for example, Issue 1
          is 2023, Issue 2 is 2024, and so on. The journal also supports a
          continuous publication workflow, ensuring immediate online
          availability upon editorial acceptance.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-3">
            Cyber Security Field
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Cyber security</li>
            <li>Information security</li>
            <li>Data security</li>
            <li>Encryption</li>
            <li>Intrusion malware detection and countermeasures</li>
            <li>Computer Forensics and Network Forensics</li>
            <li>Security issues in vehicular networks (VANETs)</li>
            <li>Security issues in smart applications</li>
            <li>Security and Privacy</li>
          </ul>
        </div>

        <div>
          <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-3">
            Risk Auditing Field
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Cyber security risk assessment</li>
            <li>Cyber security risk management</li>
            <li>Cyber security risk auditing</li>
            <li>Risk management & auditing</li>
            <li>Governance, Risk, and Compliance (GRC)</li>
            <li>Technical Auditing and Vulnerability Management</li>
            <li>Privacy & Data Protection Auditing</li>
            <li>Supply Chain Risk Management</li>
            <li>Audit Analytics & Automation</li>
            <li>Cloud & Hybrid Security Auditing</li>
          </ul>
        </div>
      </section>

      <section className="text-center bg-blue-50 p-8 rounded-2xl">
        <p className="text-lg text-gray-800 font-medium">
          JCSRA is committed to accelerating the dissemination of impactful
          research, while providing open and inclusive access to researchers,
          practitioners, and policy-makers worldwide.
        </p>
      </section>
    </main>
  );
};

export default AboutJournal;
