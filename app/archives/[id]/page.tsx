// Commit 12: Added generateMetadata for issue table-of-contents pages
// Every issue page now has a proper title, description, and self-referencing canonical URL.
// Commit 11: Added ISR revalidation (86400s = 24h) to article fetch.
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import { common, wordsMapper } from "@/app/constants/common";
import { ArticlesResponse } from "@/app/api/article";
import type { Metadata } from "next";
import { staticArticleIdObj } from "@/app/constants/staticMapper";

type Articles = Promise<ArticlesResponse[]>;

const fetchIssueArticles = async ({
  issue,
  volume,
}: {
  volume: string;
  issue: string;
}): Articles => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/article/issue/${volume}/${issue}`,
      { next: { revalidate: 86400 } } // Commit 11: ISR — 24h cache
    );
    if (!response.ok) throw new Error("Failed to fetch");
    return response.json();
  } catch {
    return [];
  }
};

// ---------------------------------------------------------------------------
// Commit 12: generateMetadata for issue pages
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const volume = id?.split("-")[1];
  const issue = id?.split("-")[2];
  const issueLabel = wordsMapper?.[id] ?? `Volume ${volume}, Issue ${issue}`;
  const canonicalUrl = `${common.JournalURL}/archives/${id}`;

  return {
    title: `${issueLabel} | ${common.JournalTitle}`,
    description: `Browse all articles published in ${issueLabel} of the ${common.JournalTitle}. Open access academic journal — ISSN ${common.issn}.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${issueLabel} | ${common.JournalTitle}`,
      description: `Browse all articles published in ${issueLabel} of the ${common.JournalTitle}.`,
      url: canonicalUrl,
      type: "website",
      siteName: common.JournalTitle,
    },
  };
}

const Archives = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const volume = id?.split("-")[1];
  const issue = id?.split("-")[2];
  const articles = await fetchIssueArticles({ issue, volume });

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Archives", href: "/archives" },
    {
      label: `${wordsMapper?.[id]}`,
      href: `/archives/${id}`,
    },
  ];

  if (!articles?.length) {
    return (
      <div className="py-12 sm:py-20 flex flex-col gap-8 w-full">
        <Breadcrumb items={breadcrumbItems} />
        <div className="py-16 text-center text-gray-500 font-medium bg-gray-50 border border-gray-100 rounded-lg">
          Articles are coming soon.
        </div>
      </div>
    );
  }

  const staticMap = staticArticleIdObj?.[id] ?? {};

  return (
    <div className="py-12 sm:py-20 flex flex-col gap-8 w-full max-w-5xl">
      <Breadcrumb items={breadcrumbItems} />

      {/* Issue header */}
      <div className="flex flex-col gap-3 mb-4 border-b-2 border-primary pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-primary leading-tight tracking-tight">
          {wordsMapper?.[id] ?? `Volume ${volume}, Issue ${issue}`}
        </h1>
        <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
          <span className="flex items-center gap-1.5 text-accent">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            Peer Reviewed
          </span>
          <span className="border-l-2 border-gray-200 pl-4">
            ISSN: {common.issn} <span className="text-gray-400">(Online)</span>
          </span>
          <span className="border-l-2 border-gray-200 pl-4">
            Published exactly as in the print issue
          </span>
        </div>
      </div>

      <div className="flex flex-col border-t border-gray-200 bg-white shadow-sm rounded-lg overflow-hidden">
      {articles.map(
        (
          {
            title,
            fileUrl,
            authors,
            _id,
            static: staticFlag,
            doi
          },
          i
        ) => {
          // Use the canonical mapped ID (DB ObjectId) for the article URL
          const canonicalArticleId = staticFlag
            ? (staticMap[String(i + 1)] ?? _id)
            : _id;


            return (
              <article key={id} className="group flex flex-col sm:flex-row gap-6 p-6 sm:p-8 border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                
                {/* Article Content */}
                <div className="flex flex-col flex-1">
                  
                  {/* Top Metadata */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                    <span className="text-primary border-b border-gray-300 pb-0.5"> Article</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl font-bold font-heading text-primary leading-tight mb-2 group-hover:text-accent transition-colors">
                    <Link href={`/archives/${id}/${canonicalArticleId}`} className="focus:outline-none">
                      {title}
                    </Link>
                  </h2>

                  {/* Authors */}
                  <div className="text-sm font-medium text-gray-700 leading-relaxed mb-4">
                    {authors.map(({ firstName, lastName }) => `${firstName.trim()} ${lastName.trim()}`).join(", ")}
                  </div>

                  {/* Bottom Metadata */}
                  <div className="flex flex-wrap gap-4 mt-auto pt-4 md:border-t md:border-gray-100">
                    {doi && (
                      <div className="text-xs font-medium">
                        <span className="text-gray-400 mr-2 uppercase tracking-widest font-bold">DOI:</span>
                        <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">
                          https://doi.org/{doi}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* PDF Action (Fixed Right Layout) */}
                {fileUrl && (
                  <div className="flex-shrink-0 flex items-center sm:items-start pt-2 border-t sm:border-t-0 border-gray-100">
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-accent hover:bg-accent-hover rounded shadow-sm transition-all focus:ring-2 focus:ring-accent focus:ring-offset-2 w-full sm:w-auto text-center"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.233 0 .413.093.5.261.046.087.058.175.058.297s-.012.21-.058.297c-.087.168-.267.261-.5.261h-.546v-1.116z"/></svg>
                      PDF
                    </a>
                  </div>
                )}
              </article>
            );
          }
        )}
      </div>
    </div>
  );
};
export default Archives;
