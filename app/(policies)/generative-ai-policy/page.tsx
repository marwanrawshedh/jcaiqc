import { common } from "../../constants/common";

// pages/generative-ai-policy.tsx
export default function GenerativeAIPolicy() {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Generative AI Policy</h1>

      {/* Authors Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold  mb-4">For authors</h2>
        <p className="text-lg font-semibold  mb-4">
          (a) The use of generative AI and AI-assisted technologies in
          scientific writing.{" "}
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Please note this policy only refers to the writing process, and not
            to the use of AI tools to analyze and draw insights from data as
            part of the research process.
          </li>
          <li>
            Where authors use generative AI and AI-assisted technologies in the
            writing process, these technologies should only be used to improve
            readability and language of the work. Applying the technology should
            be done with human oversight and control and authors should
            carefully review and edit the result, because AI can generate
            authoritative-sounding output that can be incorrect, incomplete or
            biased. The authors are ultimately responsible and accountable for
            the contents of the work.
          </li>
          <li>
            Authors should disclose in their manuscript the use of AI and
            AI-assisted technologies and a statement will appear in the
            published work. Declaring the use of these technologies supports
            transparency and trust between authors, readers, reviewers, editors
            and contributors and facilitates compliance with the terms of use of
            the relevant tool or technology.
          </li>
          <li>
            Authors should not list AI and AI-assisted technologies as an author
            or co-author, nor cite AI as an author. Authorship implies
            responsibilities and tasks that can only be attributed to and
            performed by humans. Each (co-) author is accountable for ensuring
            that questions related to the accuracy or integrity of any part of
            the work are appropriately investigated and resolved and authorship
            requires the ability to approve the final version of the work and
            agree to its submission. Authors are also responsible for ensuring
            that the work is original, that the stated authors qualify for
            authorship, and the work does not infringe third party rights, and
            should familiarize themselves with our Ethics in Publishing policy
            before they submit.
          </li>
        </ul>
        <p className="text-lg font-semibold  mb-4">
          (b) The use of generative AI and AI-assisted tools in figures, images
          and artwork
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            The {common.JournalTitle} do not permit the use of Generative AI or
            AI-assisted tools to create or alter images in submitted
            manuscripts. This may include enhancing, obscuring, moving,
            removing, or introducing a specific feature within an image or
            figure. Adjustments of brightness, contrast, or color balance are
            acceptable if and as long as they do not obscure or eliminate any
            information present in the original. Image forensics tools or
            specialized software might be applied to submitted manuscripts to
            identify suspected image irregularities.{" "}
          </li>
          <li>
            The only exception is if the use of AI or AI-assisted tools is part
            of the research design or research methods (such as in AI-assisted
            imaging approaches to generate or interpret the underlying research
            data, for example in the field of biomedical imaging). If this is
            done, such use must be described in a reproducible manner in the
            methods section. This should include an explanation of how the AI or
            AI-assisted tools were used in the image creation or alteration
            process, and the name of the model or tool, version and extension
            numbers, and manufacturer. Authors should adhere to the AI
            software’s specific usage policies and ensure correct content
            attribution. Where applicable, authors could be asked to provide
            pre-AI-adjusted versions of images and/or the composite raw images
            used to create the final submitted versions, for editorial
            assessment.{" "}
          </li>
          <li>
            The use of generative AI or AI-assisted tools in the production of
            artwork such as for graphical abstracts is not permitted. The use of
            generative AI in the production of cover art may in some cases be
            allowed, if the author obtains prior permission from the journal
            editor and publisher, can demonstrate that all necessary rights have
            been cleared for the use of the relevant material, and ensures that
            there is correct content attribution.{" "}
          </li>
        </ul>
      </section>

      {/* Reviewers Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold  mb-4">For reviewers</h2>
        <p className="text-lg font-semibold  mb-4">
          The use of generative AI and AI-assisted technologies in the Journal
          of Cybersecurity and Risk Auditing peer review process.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            When a researcher is invited to review another researcher’s paper,
            the manuscript must be treated as a confidential document. Reviewers
            should not upload a submitted manuscript or any part of it into a
            generative AI tool as this may violate the authors’ confidentiality
            and proprietary rights and, where the paper contains personally
            identifiable information, may breach data privacy rights.
          </li>
          <li>
            This confidentiality requirement extends to the peer review report,
            as it may contain confidential information about the manuscript
            and/or the authors. For this reason, reviewers should not upload
            their peer review report into an AI tool, even if it is just for the
            purpose of improving language and readability.
          </li>
          <li>
            Peer review is at the heart of the scientific ecosystem and Journal
            of Cybersecurity and Risk Auditing abides by the highest standards
            of integrity in this process. Reviewing a scientific manuscript
            implies responsibilities that can only be attributed to humans.
            Generative AI or AI-assisted technologies should not be used by
            reviewers to assist in the scientific review of a paper as the
            critical thinking and original assessment needed for peer review is
            outside of the scope of this technology and there is a risk that the
            technology will generate incorrect, incomplete or biased conclusions
            about the manuscript. The reviewer is responsible and accountable
            for the content of the review report.
          </li>
          <li>
            {common.JournalTitle}’s AI author policy states that authors are
            allowed to use generative AI and AI-assisted technologies in the
            writing process before submission, but only to improve the language
            and readability of their paper and with the appropriate disclosure,
            as per our instructions in Journal of Cybersecurity and Risk
            Auditing’s Guide for Authors. Reviewers can find such disclosure at
            the bottom of the paper in a separate section before the list of
            references.{" "}
          </li>
          <li>
            Please note that {common.JournalTitle} owns identity protected
            AI-assisted technologies which conform to the RELX Responsible AI
            Principles, such as those used during the screening process to
            conduct completeness and plagiarism checks and identify suitable
            reviewers. These in-house or licensed technologies respect author
            confidentiality. Our programs are subject to rigorous evaluation of
            bias and are compliant with data privacy and data security
            requirements.{" "}
          </li>
          <li>
            {common.JournalTitle} embraces new AI-driven technologies that
            support reviewers and editors in the editorial process, and we
            continue to develop and adopt in-house or licensed technologies that
            respect authors’, reviewers’ and editors’ confidentiality and data
            privacy rights.{" "}
          </li>
        </ul>
      </section>

      {/* Editors Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">For editors</h2>
        <p className="text-lg font-semibold  mb-4">
          The use of generative AI and AI-assisted technologies in the Journal
          of Cybersecurity and Risk Auditing editorial process
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            A submitted manuscript must be treated as a confidential document.
            Editors should not upload a submitted manuscript or any part of it
            into a generative AI tool as this may violate the authors’
            confidentiality and proprietary rights and, where the paper contains
            personally identifiable information, may breach data privacy rights.
          </li>
          <li>
            This confidentiality requirement extends to all communication about
            the manuscript including any notification or decision letters as
            they may contain confidential information about the manuscript
            and/or the authors. For this reason, editors should not upload their
            letters into an AI tool, even if it is just for the purpose of
            improving language and readability.
          </li>
          <li>
            Peer review is at the heart of the scientific ecosystem and Journal
            of Cybersecurity and Risk Auditing abides by the highest standards
            of integrity in this process. Managing the editorial evaluation of a
            scientific manuscript implies responsibilities that can only be
            attributed to humans. Generative AI or AI-assisted technologies
            should not be used by editors to assist in the evaluation or
            decision-making process of a manuscript as the critical thinking and
            original assessment needed for this work is outside of the scope of
            this technology and there is a risk that the technology will
            generate incorrect, incomplete or biased conclusions about the
            manuscript. The editor is responsible and accountable for the
            editorial process, the final decision and the communication thereof
            to the authors.
          </li>
          <li>
            {common.JournalTitle}’s AI author policy states that authors are
            allowed to use generative AI and AI-assisted technologies in the
            writing process before submission, but only to improve the language
            and readability of their paper and with the appropriate disclosure,
            as per our instructions in Journal of Cybersecurity and Risk
            Auditing’s Guide for Authors. Editors can find such disclosure at
            the bottom of the paper in a separate section before the list of
            references. If an editor suspects that an author or a reviewer has
            violated our AI policies, they should inform the publisher.{" "}
          </li>
          <li>
            Please note that {common.JournalTitle} owns identity protected
            AI-assisted technologies which conform to the RELX Responsible AI
            Principles, such as those used during the screening process to
            conduct completeness and plagiarism checks and identify suitable
            reviewers. These in-house or licensed technologies respect author
            confidentiality. Our programs are subject to rigorous evaluation of
            bias and are compliant with data privacy and data security
            requirements.{" "}
          </li>
          <li>
            {common.JournalTitle} embraces new AI-driven technologies that
            support reviewers and editors in the editorial process, and we
            continue to develop and adopt in-house or licensed technologies that
            respect authors’, reviewers’ and editors’ confidentiality and data
            privacy rights.{" "}
          </li>
        </ul>
      </section>
    </div>
  );
}
