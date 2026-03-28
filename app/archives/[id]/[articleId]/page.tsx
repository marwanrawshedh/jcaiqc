// Commits 3, 5, 6, 7, 8, 9, 11, 13, 14 — Full scholarly article page rewrite
// - Commit 3:  Canonical / OG / actual URL unified (all use mappedId)
// - Commit 5:  citation_author rendered as individual <meta> tags via CitationMetaTags
// - Commit 6:  normalizeDoi() used everywhere — no more empty citation_doi
// - Commit 7:  <link rel="alternate" type="application/pdf"> + citation_abstract_html_url added
// - Commit 8:  ScholarlyArticle JSON-LD fully enriched (headline, url, identifier, isPartOf,
//              abstract, keywords, license, inLanguage, affiliation per author)
// - Commit 9:  Native <script> instead of next/script <Script> for JSON-LD
// - Commit 11: ISR revalidation + notFound() for missing articles
// - Commit 13: Visible Volume / Issue / ISSN / Article Type on page
// - Commit 14: Author affiliations rendered in page HTML

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/app/constants/articles";
import CopyRight from "@/app/components/CopyRight";
import KeywordsSection from "@/app/components/Keywords";
import CitationBox from "@/app/components/CitationBox";
import Doi from "@/app/components/Doi";
import References from "@/app/components/References";
import { common, wordsMapper } from "@/app/constants/common";
import type { Metadata } from "next";
import Breadcrumb from "@/app/components/Breadcrumb";
import { staticArticleIdObj } from "@/app/constants/staticMapper";
import AddArticleView from "./AddViewCount";
import { normalizeDoi, doiToUrl } from "@/app/helper/doiUtils";
import CitationMetaTags from "@/app/components/CitationMetaTags";

type Props = {
  params: Promise<{ id: string; articleId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

type ArticleApiResponse = {
  abstract: string;
  title: string;
  keywords: string[];
  doi?: string;
  publicationDate?: string;
  lastPage?: string;
  references: string[];
  firstPage?: string;
  authors: {
    title?: string;
    firstName: string;
    lastName: string;
    affiliation?: string;
    country?: string;
    orcid?: string;
  }[];
  fileUrl: string;
  type?: string;
  citation?: string;
  viewCount?: number;
};

async function fetchArticle({
  articleId,
  issue,
  volume,
}: {
  articleId: string;
  issue: string;
  volume: string;
}): Promise<ArticleApiResponse | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/article/${volume}/${issue}/${articleId}`,
      { next: { revalidate: 86400*7 } } // ISR: revalidate every week — Commit 11
    );
    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Commit 3: generateMetadata — canonical = OG URL = browser URL (all mappedId)
// Commit 5: citation_author removed from `other` (handled by CitationMetaTags component)
// Commit 6: normalizeDoi() applied to all DOI fields
// Commit 7: alternates.media for PDF link, citation_abstract_html_url added
// ---------------------------------------------------------------------------
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { articleId, id } = await params;
  const volume = id?.split("-")[1];
  const issue = id?.split("-")[2];
  const mappedId = staticArticleIdObj?.[id]?.[articleId] ?? articleId;

  const data = await fetchArticle({ articleId: mappedId, issue, volume });
  if (!data) return { title: "Article Not Found | JCSRA" };

  const {
    abstract,
    authors,
    title,
    keywords,
    doi,
    publicationDate,
    lastPage,
    references,
    firstPage,
    fileUrl,
  } = data;

  const mappedAuthors = authors.map(
    ({ firstName, lastName }) => `${firstName.trim()} ${lastName.trim()}`
  );

  const bareDoi = normalizeDoi(doi);                        // "10.XXXX/YYYY"
  const { coverImageSrc } = articles["volume-2025-2"][2 - 1];

  // COMMIT 3: All three URL forms are identical — use mappedId throughout
  const canonicalUrl = `${common.JournalURL}/archives/${id}/${mappedId}`;

  return {
    title,
    description: abstract.replace(/\s+/g, " ").trim(),
    alternates: {
      canonical: canonicalUrl,
      // COMMIT 7: <link rel="alternate" type="application/pdf" href="...">
      media: {
        "application/pdf": fileUrl,
      },
    },
    openGraph: {
      title,
      description: abstract.replace(/\s+/g, " ").trim(),
      type: "article",
      url: canonicalUrl,           // COMMIT 3: was articleId, now mappedId
      images: [
        {
          url: coverImageSrc,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: common.JournalTitle,
      locale: "en_US",
      publishedTime: publicationDate,
      authors: mappedAuthors,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: abstract.replace(/\s+/g, " ").trim(),
      images: [coverImageSrc],
    },
    // Google Scholar / Highwire Press citation meta tags
    // NOTE: citation_author is intentionally OMITTED here.
    // It is rendered as individual <meta> tags via <CitationMetaTags> — Commit 5.
    other: {
      citation_title:                 title,
      citation_publication_date:      publicationDate ?? "",
      citation_journal_title:         common.JournalTitle,
      citation_journal_abbrev:        common.Journal_abbrev,
      citation_volume:                volume,
      citation_issue:                 issue,
      citation_firstpage:             firstPage ?? "",
      citation_lastpage:              lastPage ?? "",
      citation_doi:                   bareDoi,          // COMMIT 6: bare DOI only
      citation_abstract:              abstract.replace(/\s+/g, " ").trim(),
      citation_pdf_url:               fileUrl,
      citation_fulltext_html_url:     canonicalUrl,     // COMMIT 3: was articleId
      citation_abstract_html_url:     canonicalUrl,     // COMMIT 7: was missing
      citation_language:              "en",
      citation_keywords:              keywords.join("; "),
      citation_issn:                  common.issn,
      citation_publisher:             "Science Community Publisher ",
      citation_reference:             references,
      // Dublin Core
      "DC.Title":                     title,
      "DC.Source":                    common.JournalTitle,
      "DC.Subject":                   keywords.join("; "),
      "DC.Date":                      publicationDate?.split("/").join("-") ?? "",
      "DC.Description":               abstract.replace(/\s+/g, " ").trim(),
      "DC.Identifier":                bareDoi,          // COMMIT 6: bare DOI
      "DC.Language":                  "en",
      "DC.Type":                      "Text",
      "DC.Publisher":                 "Science Community Publisher ",
      "DC.Rights":                    "https://creativecommons.org/licenses/by/4.0/",
      "DC.citation.spage":            firstPage ?? "",
      "DC.citation.epage":            lastPage ?? "",
      "DC.citation.volume":           volume,
      "DC.citation.issue":            issue,
      "DC.Source.ISSN":               common.issn,
      "DC.Identifier.DOI":            bareDoi,          // COMMIT 6
      "DC.Identifier.pageNumber":     firstPage && lastPage
                                        ? `${firstPage}-${lastPage}`
                                        : "",
      "DC.Type.articleType":          "Research Article",
    },
  };
}

// ---------------------------------------------------------------------------
// Commit 10 / generateStaticParams — pre-render all statically mapped articles
// ---------------------------------------------------------------------------
export async function generateStaticParams() {
  const params: { id: string; articleId: string }[] = [];

  for (const [id, articleMap] of Object.entries(staticArticleIdObj)) {
    for (const mappedId of Object.values(articleMap)) {
      params.push({ id, articleId: mappedId });
    }
  }

  return params;
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
const Archives = async ({
  params,
}: {
  params: Promise<{ articleId: string; id: string }>;
}) => {
  const { articleId, id } = await params;
  const volume = id?.split("-")[1];
  const issue = id?.split("-")[2];
  const mappedId = staticArticleIdObj?.[id]?.[articleId] ?? articleId;

  const data: ArticleApiResponse | null = await fetchArticle({
    articleId: mappedId,
    issue,
    volume,
  });

  // Commit 11: proper 404 instead of empty fragment
  if (!data) return notFound();

  const {
    abstract,
    fileUrl,
    authors,
    title,
    keywords,
    doi,
    publicationDate,
    references,
    citation,
    firstPage,
    lastPage,
    viewCount,
    type,
  } = data;

  const bareDoi = normalizeDoi(doi);
  const doiUrl  = doiToUrl(doi);
  const canonicalUrl = `${common.JournalURL}/archives/${id}/${mappedId}`;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Archives", href: "/archives" },
    { label: `${wordsMapper?.[id]}`, href: `/archives/${id}` },
    { label: "Article", href: `/archives/${id}/${mappedId}` },
  ];

  // -------------------------------------------------------------------------
  // Commit 8: Enriched ScholarlyArticle JSON-LD
  // -------------------------------------------------------------------------
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline:       title,                          // added
    name:           title,
    url:            canonicalUrl,                   // added
    datePublished:  publicationDate?.split("/").join("-") ?? "",
    description:    abstract.replace(/\s+/g, " ").trim(),
    abstract:       abstract.replace(/\s+/g, " ").trim(), // added
    inLanguage:     "en",                           // added
    keywords:       keywords.join(", "),            // fixed: was `about`
    license:        "https://creativecommons.org/licenses/by/4.0/", // added
    pageStart:      firstPage?.toString() ?? "",
    pageEnd:        lastPage?.toString() ?? "",
    // Commit 8: DOI as schema.org PropertyValue (replaces bare sameAs)
    identifier: bareDoi
      ? { "@type": "PropertyValue", propertyID: "DOI", value: bareDoi }
      : undefined,
    sameAs: doiUrl || undefined,                    // keep DOI URL as sameAs too
    // Commit 14: author affiliation wired from existing API field
    author: authors.map(({ firstName, lastName, affiliation, country, orcid }) => ({
      "@type": "Person",
      name:   `${firstName.trim()} ${lastName.trim()}`,
      ...(affiliation ? {
        affiliation: {
          "@type": "Organization",
          name: country ? `${affiliation}, ${country}` : affiliation,
        },
      } : {}),
      ...(orcid ? { identifier: { "@type": "PropertyValue", propertyID: "ORCID", value: orcid } } : {}),
    })),
    publisher: {
      "@type": "Organization",
      name:    "Science Community Publisher ",
      url:     "https://sciencecommunitypublisher.org",              // added
    },
    // Commit 8: isPartOf — volume + issue + journal context
    isPartOf: {
      "@type":       ["PublicationIssue", "Periodical"],
      issueNumber:   issue,
      volumeNumber:  volume,
      name:          common.JournalTitle,
      issn:          [common.issn],
      publisher: {
        "@type": "Organization",
        name:    "Science Community Publisher ",
      },
    },
  };

  const articleType = type ?? "Research Article";

  return (
    <div className="flex-1 py-20 flex flex-col gap-8 sm:px-20 px-10">
      <AddArticleView articleId={mappedId} />

      {/* Commit 5: One <meta name="citation_author"> per author — required by Google Scholar. */}
      <CitationMetaTags authors={authors} />

      {/* Commit 9: Native <script> instead of next/script <Script> — renders synchronously
          in the RSC HTML output, fully visible to crawlers without JavaScript. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb items={breadcrumbItems} />

      <div className="flex gap-2 flex-wrap items-center">
        <div className="text-[#F58112] flex">
          <Image
            alt="open access"
            src="/logos/openAccess.svg"
            width={20}
            height={30}
          />
          Open Access
        </div>

        {/* Commit 13: Visible article type label */}
        <p className="rounded-sm bg-red-900 text-white px-3">{articleType}</p>

        <div
          className="flex items-center gap-1 text-gray-500"
          aria-label="Article views"
        >
          👁️
          <span>{viewCount?.toLocaleString()}</span>
          <span>views</span>
        </div>
      </div>

      <article className="flex flex-col gap-10">
        <header className="flex flex-col gap-2">
          <h1 className="citation_title font-bold text-3xl">{title}</h1>

          {/* Commit 13: Visible Volume / Issue / ISSN below the article title */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
            {volume && issue && (
              <span>
                <strong>Volume</strong> {volume}, <strong>Issue</strong> {issue}
              </span>
            )}
            <span>
              <strong>ISSN:</strong> {common.issn} (Online)
            </span>
            <span>
              <strong>Journal:</strong>{" "}
              <em>{common.JournalTitle}</em>
            </span>
          </div>
        </header>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col w-full h-full gap-4">
            <div className="flex gap-4 sm:flex-nowrap flex-wrap justify-between">

              {/* Commit 14: Author names + affiliations */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-start">
                  by&nbsp;
                  {authors?.map((author, i) => (
                    <h3
                      key={author.firstName + i}
                      className="citation_author text-base text-gray-700 flex gap-1"
                    >
                      <strong>
                        {author.firstName} {author.lastName}{" "}
                      </strong>
                      {author.orcid && (
                        <a href={author.orcid} target="_blank" rel="noopener noreferrer">
                          <Image
                            className="cursor-pointer"
                            alt="ORCID profile"
                            src="/logos/orcid.svg"
                            width={20}
                            height={20}
                          />
                        </a>
                      )}
                      {i + 1 !== authors?.length && <>{" ;"}</>}
                    </h3>
                  ))}
                </div>

                {/* Commit 14: Affiliation lines rendered in HTML for crawlers */}
                {authors?.some((a) => a.affiliation) && (
                  <div className="flex flex-col gap-0.5 text-xs text-gray-500">
                    {authors.map(
                      (author, i) =>
                        author.affiliation && (
                          <p key={i}>
                            {author.firstName} {author.lastName}:{" "}
                            <span className="italic">
                              {author.affiliation}
                              {author.country ? `, ${author.country}` : ""}
                            </span>
                          </p>
                        )
                    )}
                  </div>
                )}
              </div>

              <Link
                aria-label="Open PDF"
                href={fileUrl}
                className="flex justify-center items-center cursor-pointer hover:scale-105 underline text-blue-800"
              >
                <Image
                  className="shadow-sm"
                  src="/logos/pdf.svg"
                  alt="PDF logo"
                  width={50}
                  height={70}
                />
                PDF
              </Link>
            </div>

            <p>
              <strong>Published:</strong> {publicationDate}
            </p>

            {firstPage && lastPage && (
              <p className="text-sm text-gray-600">
                <strong>Pages:</strong> {firstPage}–{lastPage}
              </p>
            )}

            <section aria-label="Abstract">
              <h2 className="text-lg text-blue-800 article-abstract">
                <strong>Abstract</strong>
              </h2>
              <p>{abstract}</p>
            </section>

            <KeywordsSection keywords={keywords} />

            {!!doi && <Doi doi={doiUrl || doi} />}
            {doi && (
              <CitationBox
                link={doiUrl || doi}
                description={citation ?? ""}
                exportData={{
                  title,
                  authors,
                  doi: bareDoi,
                  volume,
                  issue,
                  firstPage,
                  lastPage,
                  publicationDate,
                  keywords,
                }}
              />
            )}

            <CopyRight href={fileUrl} title={title} />
            <References references={references} />
          </div>
        </div>
      </article>
    </div>
  );
};
export default Archives;
