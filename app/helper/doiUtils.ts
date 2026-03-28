/**
 * Normalizes a DOI value to bare format (e.g. "10.XXXX/YYYY")
 * regardless of whether it is stored as:
 *   - "10.1234/example"               → "10.1234/example"
 *   - "https://doi.org/10.1234/example" → "10.1234/example"
 *   - "http://dx.doi.org/10.1234/example" → "10.1234/example"
 *   - null / undefined / ""           → ""
 *
 * Google Scholar citation_doi requires the bare DOI only.
 */
export function normalizeDoi(doi: string | null | undefined): string {
  if (!doi) return "";
  return doi
    .replace(/^https?:\/\/(dx\.)?doi\.org\//i, "")
    .trim();
}

/**
 * Returns the full DOI URL (https://doi.org/<bare-doi>).
 * Ensures we always have a consistent canonical DOI URL.
 */
export function doiToUrl(doi: string | null | undefined): string {
  const bare = normalizeDoi(doi);
  if (!bare) return "";
  return `https://doi.org/${bare}`;
}
