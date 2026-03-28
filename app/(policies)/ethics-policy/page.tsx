import React from "react";
import { Metadata } from "next";
import { common } from "../../constants/common";

export const metadata: Metadata = {
  title: `Publication Ethics - ${common.JournalTitle}`,
};
const PublicationEthics = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Publication Ethics</h1>

      <p className="mb-6 text-gray-700">
        By submitting an article to the Journal of Cyber Security and Risk
        Auditing ({common.Journal_abbrev}), authors acknowledge their
        understanding of and agreement with the journal&apos;s policies.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Ethical Considerations and Permission
          </h2>
          <p className="text-gray-700 leading-relaxed flex flex-col gap-11">
            {common.Journal_abbrev} adheres rigorously to the Publication Ethics
            guidelines established by the Committee on Publication Ethics (COPE)
            for journal publishing.
            <br />
            Submissions describing research investigations must include the name
            of the ethics committee or institutional review board, the approved
            reference number/ID, and a statement confirming that participants
            provided informed consent prior to participation. Even if a study
            has been approved by an institutional review board or ethics
            committee, reviewers may raise additional editorial concerns
            regarding the study&apos;s ethical implications. Research involving
            human participants, human tissue, or human data must comply with the
            Declaration of Helsinki and receive approval from an authorized
            ethics committee. If the journal&apos;s editors determine that a
            study was not conducted in accordance with appropriate ethical
            standards, they reserve the right to reject the submission.
            Additionally, the editors may consult the relevant
            institution&apos;s ethics committee as needed.
            <br />
            {common.Journal_abbrev} reserves the right to contact authors
            institutions, funders, or regulatory bodies if further investigation
            into allegations of publishing misconduct is deemed necessary,
            whether before or after publication. If sufficient evidence of
            misconduct is identified, appropriate actions will be taken to
            address the issue, which may include issuing a retraction or
            correction in the scientific publication.
            <br />
            {common.Journal_abbrev} are adhered rigorously to have a working
            knowledge of publication ethics, including those related to
            authorship, duplicate submissions, plagiarism, fabricated data,
            conflicts of interest, and other related issues. Concerning
            incidents of possible wrongdoing, we will adhere to COPE&apos;s
            norms and processes and consult the COPE forum for guidance.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Conflicting Interests
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Authors of research and non-research articles are required to
            disclose any conflicts of interest that may influence the peer
            review process, presentation, editorial decisions, or publication of
            their papers in journals published by MAP.
            <br />
            Having competing interests is not inherently unethical, but they
            must be transparently disclosed. Authors are required to declare any
            conflicts of interest both in the cover letter and in the Competing
            Interests section of the submission form. Authors should affirm that
            they have no conflicts of interest regarding the creation and
            dissemination of the work, if applicable. The Editor reserves the
            right to request additional information if a potential conflict of
            interest is suspected.
            <br />
            Editors and reviewers must disclose any conflicts of interest, and
            those with such conflicts will be recused from the peer review
            process. Additionally, no editor of a {common.Journal_abbrev}{" "}
            journal may have financial ties to a IT company.
            <br />
            The disclosure of potential conflicts of interest is crucial for the
            transparent reporting of research. Failure to declare competing
            interests may result in the immediate rejection of a submission.
            {common.Journal_abbrev} adheres to COPE standards and will inform
            the public if new information about an undisclosed conflict of
            interest arises after publication. Competing interests may include
            financial ties, prior investments in other ventures, or personal
            relationships. These conflicts can pertain to organizations,
            companies, or individuals.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Changes to Authorship
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Authors are expected to carefully determine authorship before
            submitting their manuscript. Any changes to the author list,
            including additions, removals, or reordering, must be made during
            the editorial process and before the manuscript is accepted. Such
            changes require the approval of all authors, including those being
            added or removed. To request a change in authorship, the journal
            requires a completed authorship change form signed by all authors,
            along with an explanation for the requested change.
            <br />
            Requests for authorship changes after manuscript acceptance may
            delay publication. If the manuscript has already been published, any
            authorship change requests will be reviewed, and if approved, a
            Correction will be issued. The {common.Journal_abbrev} editorial
            board will have sole discretion in deciding whether to accept
            authorship changes after acceptance.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Authorship Disputes
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {common.Journal_abbrev} follows the guidelines established by the
            Committee on Publication Ethics (COPE) in addressing authorship
            disputes that may arise during the processing of a manuscript or
            after publication. According to COPE guidelines, journals are not
            responsible for adjudicating authorship contributions (source:
            https://publicationethics.org/resources
            /discussion-documents/authorship). Additionally, authorship disputes
            generally do not result in retraction unless there is reason to
            doubt the validity of the findings (source: https://
            publicationethics.org/retraction-guidelines).
            <br />
            If disputes cannot be resolved between the parties involved,{" "}
            {common.Journal_abbrev}
            will seek guidance from the relevant institution or governing body
            for a final decision. The journal reserves the right to adjust the
            authorship list based on the recommendations provided by the
            appropriate institution or governing body.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Acknowledgments
          </h2>
          <p className="text-gray-700 leading-relaxed">
            An Acknowledgments section must be included in the manuscript,
            listing the names and contributions of individuals who assisted in
            the creation of the submitted work. Authors should ensure that
            anyone acknowledged has consented to be recognized in this section.
            Contributions, whether monetary or in-kind, should be acknowledged,
            including grants, institutional funding, and commercial sponsorship.
            Payments made to consultants and investigators must also be
            disclosed.
            <br />
            In line with the European Medical Writers Association (EMWA)
            standards, all parties involved in the development of the
            manuscript&apos;s content, including scientific (medical) writers
            and funding agencies, must be appropriately credited.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Details Concerning the Publisher
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The names and affiliations of authors are published in journals to
            ensure proper credit is given for the research conducted.
            Publications are also indexed in databases and bibliographic indexes
            using author information; however, some resources may not provide
            complete or accurate author data. It has been observed that some
            authors use initials from their first or last name instead of their
            middle name, while others without a middle name have done so in the
            past.
            <br />
            {common.Journal_abbrev} follow a strict policy of publishing all
            author information, including names and affiliations, as provided by
            the corresponding author at the time of submission. This policy
            addresses the formatting of author names and affiliations in
            bibliographic databases such as PubMed and Scopus. As a result,
            authors must submit data that aligns with their previous
            publications to maintain consistency in citations.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Publication Duplicate
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Submissions to journals published by {common.Journal_abbrev} must be
            entirely original and not under consideration for publication
            elsewhere while undergoing review. Authors are expected to disclose
            any potential overlap or duplication honestly. All relevant prior
            publications must be revealed at the time of submission, and copies
            should be provided if possible. It is important to note any articles
            that may overlap.
            <br />
            Authors must provide any in press or unpublished manuscripts
            referenced in the article if deemed essential by the Editor and
            reviewers. {common.Journal_abbrev} has the discretion to determine
            whether two separate publications are unnecessary. Prior publication
            of the submitted manuscript in a journal or other citable medium is
            not permitted. Any exceptions, such as submission for a poster
            presentation or conference, must be clearly explained during the
            submission process.
            <br />
            {common.Journal_abbrev} utilize Turnitin plagiarism detection
            services and take allegations of unethical publication practices
            seriously. The editor will adhere to the Committee on Publication
            Ethics (COPE) guidelines in cases of suspected duplicate submission,
            which may include contacting the authors institutions (see the
            Misconduct Policy for further details). By publishing this
            statement, {common.Journal_abbrev} affirms its commitment to the
            guidelines on overlapping publication.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Text Recyclability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Authors should be mindful that work recycling, also known as
            self-plagiarism, is strictly prohibited in certain contexts. Text
            recycling refers to the reuse of previously published material. Any
            duplicate text from an author&apos;s previous works must be properly
            acknowledged, fully cited, and in compliance with copyright laws
            whenever applicable. Authors are encouraged to disclose in the cover
            letter if their submission reuses content from other sources.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Peer-Review
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At {common.Journal_abbrev}, we implement a rigorous peer review
            process for all research articles and most other types of
            submissions. This often involves the evaluation of the manuscript by
            two or more independent experts.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Peer-Review Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Upon receiving submissions, {common.Journal_abbrev} editors select
            which articles will undergo the rigorous peer review process. If an
            editor is also an author on a submission or has a competing
            interest, they will recuse themselves from the peer review.
            Acceptable submissions will be sent to relevant external experts for
            blind peer review. Based on the reviewers reports, the editors will
            make a decision, and both the decision and the reviewers feedback
            will be shared with the authors. Even if the initial reports are
            positive, the paper may be rejected if additional reviewers raise
            significant concerns about the study&apos;s reliability. Every
            publication at {common.Journal_abbrev} undergoes a thorough,
            double-blind peer review process, ensuring the anonymity of both
            authors and reviewers.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Editors</h2>
          <p className="text-gray-700 leading-relaxed">
            {common.Journal_abbrev} invites scientists from all disciplines and
            international institutions to serve as Editors, selected based on
            their scientific achievements and publication record. In accordance
            with the COPE Guidelines, which require the disclosure of potential
            conflicts of interest, the Scholarly Journals Council of{" "}
            {common.Journal_abbrev} selects the most qualified candidates. To
            ensure adherence to COPE Guidelines, regular audits are conducted.
            Both the editors and peer reviewers assess each submission. Articles
            are accepted or rejected for publication based on the editors
            evaluation of the reviews provided by the journal&apos;s peer
            reviewers.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Peer-Reviewers
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Authors may suggest potential reviewers for their work, but the
            final decision on whether to use these suggestions rests with the
            editor. Authors should not suggest recent collaborators or
            colleagues from the same institution. In the cover letter, authors
            can propose potential peer reviewers and, if possible, provide their
            contact information, such as an institutional email address or
            identifiers like ORCID or Scopus ID. If authors wish to request the
            replacement of a reviewer, they must provide a valid reason for this
            in the cover letter. However, authors should be mindful not to
            exclude too many reviewers, as this may delay the peer review
            process.
            <br />
            In some cases, editors may accept peer reviewers who were previously
            rejected.
            <br />
            Intentionally falsifying information, such as recommending reviewers
            with fake names or email addresses, constitutes a violation of our
            misconduct policy and may lead to the rejection of the submission
            and further investigation.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Confidentiality
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All journal submissions to JCSRA will be handled with the utmost
            confidentiality by the editors. Reviewers are similarly obligated to
            maintain the privacy of the manuscripts they evaluate. JCSRA
            journals will not share submitted papers with any external parties,
            except in instances where suspected misconduct necessitates further
            investigation. For more details, please refer to our Misconduct
            Policy.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Avoiding the Use of AI Tools to Write Scientific Papers
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All journal submissions to JCSRA will be handled with the utmost
            confidentiality by the editors. Reviewers are similarly obligated to
            maintain the privacy of the manuscripts they evaluate. JCSRA
            journals will not share submitted papers with any external parties,
            except in instances where suspected misconduct necessitates further
            investigation. For more details, please refer to our Misconduct
            Policy.
          </p>
        </section>
        At JCSRA, we strongly discourage authors from using AI tools or language
        models, such as ChatGPT or similar technologies, to generate scientific
        papers. While these tools can produce text that closely mimics human
        writing, their use in scientific research raises significant concerns
        about maintaining ethical publishing practices and safeguarding the
        integrity of scientific work.
        <br />
        <br />
        As an academic press committed to upholding the highest standards of
        scholarly publishing, we adhere to the principles established by the
        Committee on Publication Ethics (COPE). COPE underscores the importance
        of authorship, accountability, and transparency in scientific
        publishing. We urge authors submitting to JCSRA to strictly follow these
        guidelines.
        <br />
        <br />
        At JCSRA, we are dedicated to fostering responsible and ethical
        publishing practices. We encourage authors submitting to our journals to
        take an active role in the research and writing process, ensuring their
        scientific papers are a true reflection of their expertise, insights,
        and intellectual contributions.
        <br />
        <br />
        By following these principles and refraining from the use of AI tools in
        the writing of scientific papers, authors can uphold the highest
        standards of scientific integrity and contribute meaningfully to the
        advancement of knowledge in their respective fields. For detailed
        guidance on ethical publishing practices, we recommend authors consult
        the COPE guidelines available on their website at
        https://publicationethics.org/.
      </div>
    </div>
  );
};

export default PublicationEthics;
