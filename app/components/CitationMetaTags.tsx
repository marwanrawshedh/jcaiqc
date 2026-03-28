// Commit 5: CitationMetaTags — Server Component for per-author citation meta tags
//
// WHY THIS COMPONENT EXISTS:
// Next.js App Router's generateMetadata `other` key serializes arrays as comma-joined
// strings, producing a single <meta name="citation_author" content="A, B, C"> tag.
// Google Scholar requires ONE <meta name="citation_author"> tag PER AUTHOR.
// This Server Component renders them correctly in the RSC HTML output.
//
// USAGE:
// Mount this inside the article page JSX (not inside <head> explicitly).
// Next.js renders <meta> tags placed in RSC output into the document <head>.

type Author = {
  firstName: string;
  lastName: string;
  affiliation?: string;
  orcid?: string;
};

type CitationMetaTagsProps = {
  authors: Author[];
};

/**
 * Renders individual Highwire Press citation_author <meta> tags — one per author.
 * This is the only reliable way to output repeated meta tag names in Next.js App Router.
 */
const CitationMetaTags = ({ authors }: CitationMetaTagsProps) => {
  return (
    <>
      {authors.map(({ firstName, lastName }, i) => (
        <meta
          key={i}
          name="citation_author"
          content={`${firstName.trim()} ${lastName.trim()}`}
        />
      ))}
    </>
  );
};

export default CitationMetaTags;
