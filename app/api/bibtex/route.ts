// Commit 15: BibTeX / RIS export API route
// POST or GET with article metadata → returns a downloadable .bib file
// This enables proper citation export from article pages.
import { NextRequest, NextResponse } from "next/server";
import { normalizeDoi } from "@/app/helper/doiUtils";
import { common } from "@/app/constants/common";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      authors,
      publicationDate,
      journal,
      volume,
      issue,
      doi,
      firstPage,
      lastPage,
      keywords,
      format = "bibtex",
    } = body;

    const bareDoi = normalizeDoi(doi);
    const year = publicationDate
      ? new Date(publicationDate.split("/").join("-")).getFullYear()
      : "";
    const citeKey = (() => {
      const firstAuthorLast = authors?.[0]?.lastName?.replace(/\s+/g, "") ?? "unknown";
      return `${firstAuthorLast}${year}${bareDoi ? bareDoi.split("/").pop() : ""}`;
    })();

    const authorString = (authors ?? [])
      .map(
        ({ firstName, lastName }: { firstName: string; lastName: string }) =>
          `${lastName.trim()}, ${firstName.trim()}`
      )
      .join(" and ");

    if (format === "ris") {
      const lines = [
        "TY  - JOUR",
        `TI  - ${title}`,
        ...authors.map(
          ({ firstName, lastName }: { firstName: string; lastName: string }) =>
            `AU  - ${lastName.trim()}, ${firstName.trim()}`
        ),
        `JO  - ${journal ?? common.JournalTitle}`,
        `VL  - ${volume}`,
        `IS  - ${issue}`,
        firstPage ? `SP  - ${firstPage}` : "",
        lastPage  ? `EP  - ${lastPage}`  : "",
        year      ? `PY  - ${year}`      : "",
        bareDoi   ? `DO  - ${bareDoi}`   : "",
        `SN  - ${common.issn}`,
        `LA  - English`,
        keywords?.length ? `KW  - ${keywords.join("\nKW  - ")}` : "",
        "ER  - ",
      ]
        .filter(Boolean)
        .join("\n");

      return new NextResponse(lines, {
        headers: {
          "Content-Type": "application/x-research-info-systems",
          "Content-Disposition": `attachment; filename="${citeKey}.ris"`,
        },
      });
    }

    // Default: BibTeX
    const bibtex = [
      `@article{${citeKey},`,
      `  title     = {${title}},`,
      `  author    = {${authorString}},`,
      `  journal   = {${journal ?? common.JournalTitle}},`,
      volume   ? `  volume    = {${volume}},`   : "",
      issue    ? `  number    = {${issue}},`    : "",
      firstPage ? `  pages     = {${firstPage}--${lastPage ?? firstPage}},` : "",
      year     ? `  year      = {${year}},`     : "",
      bareDoi  ? `  doi       = {${bareDoi}},`  : "",
      `  issn      = {${common.issn}},`,
      `  publisher = {Science Community Publisher },`,
      `  url       = {https://doi.org/${bareDoi}},`,
      `}`,
    ]
      .filter(Boolean)
      .join("\n");

    return new NextResponse(bibtex, {
      headers: {
        "Content-Type": "application/x-bibtex",
        "Content-Disposition": `attachment; filename="${citeKey}.bib"`,
      },
    });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
