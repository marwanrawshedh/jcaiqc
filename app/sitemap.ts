import { MetadataRoute } from "next";
import { staticArticleIdObj } from "@/app/constants/staticMapper";

const BASE_URL = "https://jcaiqc.sciencecommunitypublisher.org";
const BACKEND_URL = process.env.NEXT_PUBLIC_BASE_URL;

type IssueShape = {
  issueNumber: string;
  _id: string;
  volume: { _id: string; volumeNumber: string };
  closeDate?: string;
};

type ArticleShape = {
  _id: string;
  publicationDate?: string;
  static?: boolean;
};

async function fetchAllIssues(): Promise<IssueShape[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/issue/issues`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json) ? json : json?.data ?? [];
  } catch {
    return [];
  }
}

async function fetchArticlesForIssue(
  volume: string,
  issue: string
): Promise<ArticleShape[]> {
  try {
    const res = await fetch(
      `${BACKEND_URL}/api/article/issue/${volume}/${issue}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json) ? json : json?.data ?? [];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [
    // Static pages
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/archives`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/current-issues`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/aims-scope`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/author-guidelines`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/editorial-team`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/abstracting-indexing`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/article-charges`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/ethics-policy`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/access-policy`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/peer-review`, changeFrequency: "yearly", priority: 0.4 },
  ];

  const issues = await fetchAllIssues();

  for (const issue of issues) {
    const volumeNumber = issue.volume?.volumeNumber;
    const issueNumber = issue.issueNumber;

    if (!volumeNumber || !issueNumber) continue;

    const issueSlug = `volume-${volumeNumber}-${issueNumber}`;

    // Issue table-of-contents page
    entries.push({
      url: `${BASE_URL}/archives/${issueSlug}`,
      lastModified: issue.closeDate ? new Date(issue.closeDate) : new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });

    // Articles for this issue
    const articles = await fetchArticlesForIssue(volumeNumber, issueNumber);

    // Also include statically-mapped articles from staticArticleIdObj
    const staticMap = staticArticleIdObj?.[issueSlug] ?? {};
    const staticIds = Object.values(staticMap);

    // Combine dynamic articles + static IDs (deduped by _id)
    const allIds = new Set<string>();
    const articleEntries: MetadataRoute.Sitemap = [];

    for (let i = 0; i < articles.length; i++) {
      const article = articles[i];
      const canonicalId = article.static
        ? staticMap[String(i + 1)] ?? article._id
        : article._id;

      if (!allIds.has(canonicalId)) {
        allIds.add(canonicalId);
        articleEntries.push({
          url: `${BASE_URL}/archives/${issueSlug}/${canonicalId}`,
          lastModified: article.publicationDate
            ? new Date(article.publicationDate)
            : new Date(),
          changeFrequency: "never",
          priority: 0.9,
        });
      }
    }

    // Add any staticMap IDs not already covered
    for (const staticId of staticIds) {
      if (!allIds.has(staticId)) {
        allIds.add(staticId);
        articleEntries.push({
          url: `${BASE_URL}/archives/${issueSlug}/${staticId}`,
          changeFrequency: "never",
          priority: 0.9,
        });
      }
    }

    entries.push(...articleEntries);
  }

  return entries;
}
