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
                <strong>{common.JournalTitle}</strong> {" "}
  aims to publish high-impact research addressing cybersecurity challenges, innovations, and applications in AI-driven and quantum-enabled systems. Journal of Cybersecurity Applications in Artificial Intelligence and Quantum Computing aims to: 
  <br/>
        <br />
        • Promote interdisciplinary research in cybersecurity, AI, and quantum computing
        <br />
        • Provide rapid dissemination of innovative research findings
        <br />
        • Support academic, industrial, and governmental collaboration
        <br />
        • Encourage development of secure and resilient intelligent systems
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center mb-4">
          <span className="ml-2">Cybersecurity in AI Systems</span>
        </h2>
        <div className="flex flex-wrap gap-8">
          <ul className="list-disc list-inside space-y-1 flex-1 min-w-[250px]">
            {[
              "Secure machine learning and adversarial AI",
              "AI-driven intrusion detection systems",
              "Privacy-preserving AI techniques",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* <div className="flex-shrink-0">
            <Image
              src="/logos/jcaiqc.png"
              alt="{common.Journal_abbrev} Logo"
              width={200}
              height={350}
              className="object-contain"
            />
          </div> */}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center mb-4">
          <span className="ml-2">Artificial Intelligence Security</span>
        </h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          {[
            "Adversarial Machine Learning",
            "Explainable AI for security",
            "AI in cyber threat intelligence",
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center mb-4">
           <span className="ml-2">Quantum Computing and Security</span>
        </h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          {[
            "Post-Quantum Cryptography",
            "Quantum Key Distribution",
            "Quantum attack models and defenses",
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center mb-4">
           <span className="ml-2">Emerging Technologies</span>
        </h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          {[
            "IoT and CPS security",
            "Blockchain and distributed ledger security",
            "Cloud and edge security",
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold flex items-center mb-4">
           <span className="ml-2">Data Security and Privacy</span>
        </h2>
        <ul className="list-disc list-inside space-y-1 ml-4">
          {[
            "Data protection frameworks",
            "Privacy-enhancing technologies",
            "Secure data analytics",
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