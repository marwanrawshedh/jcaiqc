"use client";
// Commit 15: Updated CitationBox — adds BibTeX and RIS export buttons
// Kept as a client component for clipboard / download interaction.
import { useState } from "react";

type Author = {
  firstName: string;
  lastName: string;
};

type ExportProps = {
  title?: string;
  authors?: Author[];
  doi?: string;
  volume?: string;
  issue?: string;
  firstPage?: string;
  lastPage?: string;
  publicationDate?: string;
  keywords?: string[];
};

type CitationBoxProps = {
  description: string;
  link: string;
  exportData?: ExportProps;
};

async function downloadCitation(
  format: "bibtex" | "ris",
  exportData: ExportProps
) {
  const res = await fetch("/api/bibtex", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...exportData, format }),
  });
  if (!res.ok) return;

  const blob = await res.blob();
  const ext = format === "ris" ? "ris" : "bib";
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `citation.${ext}`;
  a.click();
  URL.revokeObjectURL(url);
}

const CitationBox = ({ description, link, exportData }: CitationBoxProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = description ? `${description} ${link}` : link;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      aria-label="Citation Information"
      className="how-to-cite mt-6 p-4 border-l-4 border-blue-500 bg-gray-100 rounded-lg shadow-md"
    >
      <h3 className="text-lg font-semibold text-blue-700 mb-2">
        How to Cite the Article
      </h3>
      <p className="citationOutput text-gray-800 text-sm leading-relaxed mb-3">
        {description}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline break-all"
        >
          {link}
        </a>
      </p>

      <div className="flex flex-wrap gap-2 mt-2">
        {/* Copy plain text */}
        <button
          onClick={handleCopy}
          className="text-xs px-3 py-1 rounded bg-blue-700 text-white hover:bg-blue-800 transition"
          aria-label="Copy citation to clipboard"
        >
          {copied ? "Copied!" : "Copy Citation"}
        </button>

        {/* Export BibTeX */}
        {/* {exportData && (
          <button
            onClick={() => downloadCitation("bibtex", exportData)}
            className="text-xs px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-900 transition"
            aria-label="Download BibTeX citation"
          >
            Export BibTeX
          </button>
        )} */}

        {/* Export RIS (EndNote / Zotero) */}
        {/* {exportData && (
          <button
            onClick={() => downloadCitation("ris", exportData)}
            className="text-xs px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-900 transition"
            aria-label="Download RIS citation"
          >
            Export RIS
          </button>
        )} */}
      </div>
    </section>
  );
};

export default CitationBox;
