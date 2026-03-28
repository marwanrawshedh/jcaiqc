// Commit 4: Converted from "use client" React Query component to async Server Component.
// This is critical for Google Scholar — the archives list must render issue links in
// static HTML so crawlers can discover all volume/issue pages without executing JavaScript.
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Archives | Journal of Cybersecurity in AI and Quantum Computing (JCSRA)",
  description:
    "Browse all published volumes and issues of the Journal of Cybersecurity in AI and Quantum Computing (JCSRA). Open access academic journal covering cybersecurity, risk management, and auditing.",
  alternates: {
    canonical: "https://jcaiqc.sciencecommunitypublisher.org/archives",
  },
};

type IssueShape = {
  issueNumber: string;
  _id: string;
  volume: { _id: string; volumeNumber: string };
  closeDate?: string;
  authorCountries?: string[];
  isCurrentIssue: boolean;
  description?: string;
};

async function fetchIssues(): Promise<IssueShape[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/issue/issues`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json) ? json : json?.data ?? [];
  } catch {
    return [];
  }
}

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Archives", href: "/archives" },
];

const Archives = async () => {
  const issues = await fetchIssues();

  return (
    <div className="py-12 sm:py-20 flex flex-col gap-8 w-full">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mb-8 border-b-2 border-primary pb-4">
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-primary tracking-tight">
          Browse Issues
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Explore all published volumes and issues of the journal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {issues.map(
            (
              {
                _id,
                issueNumber,
                volume,
                authorCountries,
                closeDate,
                isCurrentIssue,
                description,
              },
              
            ) => {
              const volumeNumber = volume?.volumeNumber;
              const label = issueNumber;


            return (
              <article key={_id} className="flex flex-col bg-white border border-gray-200 hover:border-accent/40 shadow-sm transition-colors rounded-lg overflow-hidden relative group">
                <div className="relative w-full aspect-[3/4] sm:aspect-video md:aspect-[4/3] bg-gray-100 border-b border-gray-100 p-4">
                   {/* Fallback pattern for scholarly look if image is missing */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50 flex items-center justify-center opacity-50 z-0">
                     <span className="font-heading text-6xl text-gray-200 opacity-30 font-bold tracking-tighter">VOL {volumeNumber}</span>
                   </div>
                   <Image
                     src={`/logos/vol-${volumeNumber}-${label}.jpeg`}
                     fill
                     className="object-contain z-10 p-2 mix-blend-multiply transition-transform group-hover:scale-105"
                     alt={`Volume ${volumeNumber} Issue ${label} Cover`}
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   />
                </div>
                
                <div className="p-6 flex flex-col flex-1 h-full z-20 bg-white">
                  <div className="mb-3">
                    {isCurrentIssue && (
                      <span className="inline-block bg-accent/10 text-accent font-bold text-[10px] uppercase tracking-widest px-2 py-1 rounded mb-2 border border-accent/20">
                        Current Issue
                      </span>
                    )}
                    <h2 className="text-xl font-bold font-heading text-primary leading-tight group-hover:text-accent transition-colors">
                      <Link href={`archives/volume-${volumeNumber}-${label}`} className="focus:outline-none">
                        <span className="absolute inset-0 z-30" aria-hidden="true"></span>
                        Volume {volumeNumber}, Issue {label}
                      </Link>
                    </h2>
                  </div>

                  <div className="text-xs sm:text-sm text-gray-600 space-y-2 mb-6 font-medium">
                    {closeDate && (
                      <div className="flex bg-gray-50 p-2 rounded border border-gray-100">
                        <span className="text-gray-400 w-20">Published:</span>
                        <span className="text-gray-800">{closeDate}</span>
                      </div>
                    )}
                    {authorCountries && (
                      <div className="flex bg-gray-50 p-2 rounded border border-gray-100">
                        <span className="text-gray-400 w-20">Regions:</span>
                        <span className="text-gray-800 line-clamp-1" >
                          {authorCountries}
                        </span>
                      </div>
                    )}
                  </div>

                  {description && (
                    <p className="text-sm text-gray-500 line-clamp-3 mb-6 flex-1">
                      {description}
                    </p>
                  )}

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-sm font-bold text-accent uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    View Contents &rarr;
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </div>
  );
};
export default Archives;
