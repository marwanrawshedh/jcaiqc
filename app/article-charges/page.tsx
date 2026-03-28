import React from "react";
import { Metadata } from "next";
import { common } from "../constants/common";

export const metadata: Metadata = {
  title: `Article Publishing Charges (APCs) - ${common.JournalTitle}`,
};

const ArticleCharges = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Article Publishing Charges (APCs)
      </h1>

      <p className="mb-6">
        All articles published in <strong>{common.JournalTitle}</strong> (ISSN:{" "}
        {common.issn} ) are published in full open access. An article processing
        charge (APC) of <b>USD 1300</b> without taxes, applies to papers
        accepted after peer review. This article processing charge is to cover
        the costs of peer review, copyediting, typesetting, long-term archiving,
        and journal management.
        <br />
        <br />
        Invoices are emailed shortly after acceptance to the payment contact
        provided by the authors. Only official invoices issued by JCSRA contacts
        are valid. We do not authorize any third party to collect the APCs. QAJ
        is the sole service provider and cannot be held liable for actions by
        third parties.
        <br />
        <br />
        Submitted papers should be well formatted and use good English. Note
        that many national and private research funding organizations and
        universities explicitly cover APCs for articles resulting from funded
        research projects.
        <br />
        <br />
        Should your work be accepted for publication, an Article Publication Fee
        will be required to offset publication costs.
        {/* <strong>{common.JournalTitle}</strong> has chosen to publish open
        access, which typically involves the payment of an article publishing
        charge (APC) by the author, their institution or funding body, we make
        their article freely available immediately upon publication on Journal
        website in perpetuity with the author’s chosen user license attached to
        it.
        <br />
        STAP publisher APCs are set on a per journal basis, fees range between
        approximately $0.00 to $1950.00 US Dollars, excluding tax, with prices
        clearly displayed on our APC price list on STAP Publisher homepage.
        Visit the following link to view the the STAP Journals APC :
        <br />
        <a className="text-blue-500" href="https://sciencecommunitypublisher.org/apc">
          https://sciencecommunitypublisher.org/apc
        </a>
        <br />
        <br />
        Adjustments in STAP’s APCs are under regular review and are subject to
        change. We set APCs based on the following criteria which are applied to
        open access articles only:
        <br />
        (1)Journal quality (as measured by journal quality Field Weighted
        Citation Impact Tier);
        <br />
        (2) The journal’s editorial and technical processes;
        <br />
        (3) Other revenue streams associated with the journal.
        <br /> */}
      </p>
    </div>
  );
};

export default ArticleCharges;
