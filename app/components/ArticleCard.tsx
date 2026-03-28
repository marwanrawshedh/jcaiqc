import Link from "next/link";
import Image from "next/image";

import { ArticlesResponse } from "../api/article";
export const dynamic = "force-dynamic";

type Articles = Promise<ArticlesResponse[]>;

const fetchCurrentIssueArticles = async (): Articles => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/article/current-issue`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) throw new Error("Unauthorized");

    return response.json();
  } catch (error) {
    console.log(error);

    throw error;
  }
};
const ArticleCard = async () => {
  const articles = await fetchCurrentIssueArticles();

  return (
    <section className="flex flex-col gap-8 mb-16" aria-labelledby="recent-articles-heading">
      <div className="flex items-center justify-between border-b-2 border-primary pb-3">
        <h2 id="recent-articles-heading" className="text-2xl sm:text-3xl font-bold font-heading text-primary tracking-tight">
          Current Issue <span className="text-gray-400 font-normal text-lg ml-2">First Online</span>
        </h2>
      </div>

      {!!!articles?.length ? (
        <div className="py-12 text-center text-gray-500 font-medium bg-gray-50 border border-gray-100 rounded-lg">
          Articles are coming soon.
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {articles?.map((article, i) => {
            const {
              title,
              authors,
           publicationDate,
              _id,
              doi,
            type,
              abstract,
             fileUrl,

              issue,
            } = article;

            const authorNames = authors.map(
              ({ firstName, lastName }) => `${firstName} ${lastName}`
            );
            
            // The custom adapter doesn't automatically inject issue info for the homepage yet
            // Assuming current issue is mapped statically for this URL based on issueId
            // A more robust implementation would fetch the Current Issue object as well.
            // For now, simulating the URL redirect based on canonicalId.
            const articleUrl = `/archives/${issue.issueNumber || "current"}/${_id}`;

            return (
              <article
                key={_id}
                className="relative flex flex-col bg-white border border-gray-200 p-6 sm:p-8 hover:border-accent/40 transition-colors shadow-sm"
              >
                {/* Top Metadata Line */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] sm:text-xs font-bold text-gray-600 uppercase tracking-widest mb-4">
                  <span className="text-primary border-b border-primary pb-0.5">
                    {type || "Research Article"}
                  </span>
                  
                  <span className="flex items-center gap-1.5 text-[#F58112]">
                    <Image
                      alt="Open Access"
                      src="/logos/openAccess.svg"
                      width={14}
                      height={14}
                    />
                    Open Access
                  </span>

                  {publicationDate && (
                    <span className="text-gray-500 border-l border-gray-300 pl-4">
                      Published: {new Date(publicationDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  )}
                  
                  {/* View count removed as OJS doesn't natively expose this without a plugin */}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-primary leading-tight mb-3 hover:text-accent transition-colors">
                  <Link href={articleUrl} className="focus:outline-none">
                    {title}
                  </Link>
                </h3>

                {/* Authors */}
                <div className="text-sm font-medium text-gray-800 mb-4 leading-relaxed">
                  {authorNames.join(", ")}
                </div>

                {/* Abstract Preview */}
                {abstract && (
                  <p className="text-gray-600 text-sm md:text-base line-clamp-3 leading-relaxed mb-5 relative pl-4 border-l-2 border-gray-100">
                    <span className="font-semibold text-gray-800 mr-2">Abstract.</span>
                    {abstract}
                  </p>
                )}

                {/* DOI & Keywords Group */}
                <div className="flex flex-col gap-4 mt-auto pt-5 md:mt-2 border-t border-gray-100">
                  {doi && (
                    <div className="text-sm font-medium">
                      <span className="text-gray-400 mr-2 font-bold uppercase tracking-wider text-xs">DOI:</span>
                      <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline transition-colors relative z-20">
                        https://doi.org/{doi}
                      </a>
                    </div>
                  )}
                  
                  {/* Removed keywords loop since it's not present in unified type yet */}
                </div>

                {/* Bottom Action Bar */}
                <div className="flex items-center gap-3 sm:gap-4 mt-6 pt-5 border-t border-gray-100">
                  <Link
                    href={articleUrl}
                    className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-accent hover:bg-accent-hover rounded shadow-sm transition-all focus:ring-2 focus:ring-accent focus:ring-offset-2 relative z-20"
                  >
                    Read article
                  </Link>

                  {fileUrl && (
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold text-primary bg-white border border-gray-300 hover:border-accent hover:text-accent rounded transition-all focus:ring-2 focus:ring-accent focus:ring-offset-2 relative z-20"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.233 0 .413.093.5.261.046.087.058.175.058.297s-.012.21-.058.297c-.087.168-.267.261-.5.261h-.546v-1.116z"/></svg>
                      PDF
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ArticleCard;
