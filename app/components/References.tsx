interface ReferencesProps {
  references: string[];
}

const References = ({ references }: ReferencesProps) => {
  const renderReferenceWithLinks = (reference: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/g;
    return reference.split(urlRegex).map((part, index) =>
      urlRegex.test(part) ? (
        <a
          key={index}
          href={part.startsWith("www.") ? `https://${part}` : part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline break-all"
        >
          {part}
        </a>
      ) : (
        part
      )
    );
  };

  return (
    <section className="mt-8" aria-label="References">
      <h2 className="text-lg text-blue-800 font-bold">References</h2>
      <ol className="list-decimal pl-5">
        {references.map((reference, index) => (
          <li key={index} className="mb-2">
            {renderReferenceWithLinks(reference)}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default References;
