import { Metadata } from "next";
import Image from "next/image";
import { common } from "../../constants/common";

export const metadata: Metadata = {
  title: `Peer Review Process - ${common.JournalTitle}`,
};
const PeerReview = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Peer Review Process</h1>
      <div className="mb-6">
        <p className="text-gray-700">
          <strong>{common.JournalTitle}</strong> implements a rigorous peer
          review process, which follows a double-blind peer review process to
          ensure fairness, transparency, and the highest scholarly standards in
          evaluating submitted manuscripts.
          <br />
          <br />
          In the double-blind review system: <br /> • Authors remain anonymous
          to reviewers. Manuscripts are submitted without identifying
          information, and any references that may reveal the author’s identity
          are removed before review.
          <br />
          • Reviewers remain anonymous to authors. The identity of the reviewers
          is not disclosed to the authors at any stage of the review process.
          <br />
          <br />
          This rigorous double-blind peer review process is designed to minimize
          bias, maintain objectivity, and ensure that only high-quality,
          original research is published in {common.Journal_abbrev}.
        </p>
        <p className="text-gray-700 mt-2">
          An editor first reviews the submitted manuscript. It will be evaluated
          whether it is suitable for the {common.Journal_abbrev} focus and scope
          or has a major methodological flaw and similarity score by using
          iThenticate. The publication ethics and publication malpractice
          statement regulate ethical behavior based on{" "}
          <strong>Committee on Publication Ethics (COPE)</strong>´s Best
          Practice Guidelines and is supplemented by {common.Journal_abbrev}’s
          Instructions for Authors.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <strong>A flow chart of the review process is given below:</strong>
        <Image
          alt="Peer review Diagram"
          src="/logos/peer-review.svg"
          width={"1000"}
          height={"600"}
        />
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Initial Screening Checks</h2>
        <p className="text-gray-700">
          All submitted manuscripts received by the Editorial Office will be
          initially checked by a Managing Editor before the manuscripts are sent
          for peer-review to decide whether they are correctly
          formatted/prepared, follow the ethical policies of the journal and
          also fit the scope of the journal, and whether they are scientifically
          sound. Manuscripts that do not meet the journal&apos;s ethics policy
          or do not qualify the standards or do not fit the scope of the journal
          will be rejected before peer-review. Manuscripts that are inadequately
          prepared will be returned to the author(s) for revision and
          resubmission. After the initial check, the Managing Editor will send
          the qualified manuscripts to the journal&apos;s Editor(s). Editor(s)
          will make initial decisions, and qualified manuscripts will be sent
          for peer-review. No judgment on the significance or potential impact
          of the work will be made at the initial check stage. Rejection
          decisions at this stage will be verified by the Editor(s).
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Peer Review Process</h2>
        <p className="text-gray-700">
          All manuscripts considered for publication in our journals, including
          invited papers, go through a stringent and thorough peer-review
          procedure. After an initial check, the manuscript is assigned to a
          handling editor, who then assigns it to reviewers and oversees the
          peer review. Authors may be asked to make minor or even major
          revisions before a handling editor decides whether to proceed with
          subsequent rounds of peer review. The final decision regarding
          acceptance is made by the journal’s Editor(s).
        </p>
        <p className="text-gray-700 mt-2">
          At least two independent experts who are not part of the journal’s
          editorial staff take part in the peer-review procedure. The Journal of
          Cyber Security and Risk Auditing ({common.Journal_abbrev}) follows a
          double-blind peer review process. In the double-blind review system,
          which authors remain anonymous to reviewers. Manuscripts are submitted
          without identifying information, and any references that may reveal
          the author’s identity are removed before review. Reviewers remain
          anonymous to authors. The identity of the reviewers is not disclosed
          to the authors at any stage of the review process. The comments
          generated during peer review remain confidential and may only be
          disclosed with the express agreement of the reviewer.
        </p>
        <p className="text-gray-700 mt-2">
          Editor(s) may consider assigning a manuscript to reviewers whom the
          authors suggest. In any case, the reviewers must have no conflicts of
          interest. In particular, scholars who have published joint work with
          any of the authors two years prior to submission of the manuscript or
          who are currently collaborating with any researchers at any of the
          authors’ institutions are not eligible to serve as reviewers.
        </p>
      </div>

      {/* Reviewers’ Responsibilities Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Reviewers’ Responsibilities
        </h2>
        <p className="text-gray-700">Reviewers are expected to:</p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>
            Contribute to the orderly running and reputation of the journal and
            to further its quality-driven mission by evaluating manuscripts
            objectively and in a timely manner.
          </li>
          <li>
            Maintain the confidentiality of any information supplied by the
            editor or author.
          </li>
          <li>
            Submit the manuscript after their reviews, and not to copy it or to
            use or disseminate unpublished information, arguments, or
            interpretations contained therein without express permission to do
            so.
          </li>
          <li>Make clear and justify the bases of their evaluations.</li>
          <li>
            Be aware of potential conflicts of interest (i.e., financial,
            institutional, collaborative, or other relationships between a
            reviewer and an author) and to bring any such conflicts to the
            editor’s attention, if necessary ceasing their work on the
            manuscript.
          </li>
          <li>
            Notify the Associate Editor and Editors-in-Chief immediately should
            they become aware of any scientific misconduct, fraud, plagiarism,
            or other unethical behavior related to the manuscript.
          </li>
        </ul>
      </div>

      {/* Editorial Decisions Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Editorial Decisions</h2>
        <p className="text-gray-700">
          All original articles, reviews, and other types of papers published in{" "}
          {common.Journal_abbrev} go through the peer-review process. The
          decision regarding publication is based on a minimum of two reviewers’
          comments and may take one of four forms:
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">1. Accept</h3>
          <p className="text-gray-700">
            The paper is in principle accepted based on the reviewers’ comments.
            The decision to publish is not based solely on the scientific
            validity of an article’s content but may also take into account such
            considerations as its extent and importance.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">2. Minor Revision</h3>
          <p className="text-gray-700">
            The paper is to be accepted after it has undergone minor revisions
            specified in the reviewers’ comments. In this situation, authors
            have five days to complete the minor revisions along with
            point-by-point responses to the comments or to provide a rebuttal
            letter.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">3. Major Revision</h3>
          <p className="text-gray-700">
            The paper may be accepted provided that it is thoroughly revised. In
            this case as well, the authors must provide a point-by-point
            response or rebuttal to the comments, and the revised version is
            sent to the same reviewer for further comment.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">4. Reject</h3>
          <p className="text-gray-700">
            Articles are rejected even after revision when they are found to
            have serious flaws and/or to make no substantial original
            contribution to the scholarship. The editors are authorized to
            reject any manuscript if its subject is deemed inappropriate, it is
            of poor quality, or its results are proved to be erroneous.
          </p>
        </div>
        <p className="text-gray-700 mt-4">
          Editors themselves are prevented from serving as external reviewers of
          manuscripts in order to ensure that every manuscript submitted to the
          journal undergoes a well-informed and unbiased peer-review process.
          Thus, any manuscript must be recommended by, usually, two or more
          external reviewers along with the handling editor before it is
          accepted for publication in its final form.
        </p>
        <p className="text-gray-700 mt-2">
          In cases where authors do not respond within the specified timeframe,
          we consider this a sign of author disengagement. We may temporarily
          decline the submission to uphold the timeliness and quality of our
          academic discourse. Authors are welcome to reconsider and resubmit
          their work; however, it will be subjected to a fresh peer review
          process.
        </p>
      </div>

      {/* Online First Publication Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Online First Publication</h2>
        <p className="text-gray-700">
          All manuscripts accepted and ready for publication in{" "}
          {common.Journal_abbrev} are published Online First, prior to the
          assignment to one issue. Articles published Online First are
          copyedited and proofed by the author(s) before being published. Online
          First articles can be cited by the article’s Digital Object Identifier
          (DOI). Every article has a unique DOI which is the permanent
          identifier of all versions of that article. A DOI will always be
          resolved to the latest version.
        </p>
      </div>
    </div>
  );
};

export default PeerReview;
