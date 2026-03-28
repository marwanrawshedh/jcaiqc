"use client";

import React, { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { Article } from "../page";
import { useGetVolumeIssues } from "@/app/api/issue";

const articleTypeLabel: Record<string, string> = {
  review: "Review Article",
  research: "Research Article",
};

function formatEmpty(value: unknown, fallback = "—") {
  if (value === null || value === undefined) return fallback;
  if (typeof value === "string" && value.trim() === "") return fallback;
  return String(value);
}

function renderReferenceWithLinks(reference: string) {
  const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/g;

  // `split` keeps separators if capturing groups exist, but returns `undefined` for non-matches sometimes
  const parts = reference.split(urlRegex).filter(Boolean) as string[];

  return parts.map((part, index) => {
    const isUrl = /^(https?:\/\/[^\s]+|www\.[^\s]+)$/g.test(part);

    if (!isUrl) return <React.Fragment key={index}>{part}</React.Fragment>;

    const href = part.startsWith("www.") ? `https://${part}` : part;
    return (
      <a
        key={index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 underline underline-offset-2 break-all"
      >
        {part}
      </a>
    );
  });
}

function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
        {title}
      </h1>
      {subtitle ? (
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-base sm:text-lg font-semibold text-slate-900">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-sm text-slate-600 leading-relaxed">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  mono,
}: {
  label: string;
  value: React.ReactNode;
  mono?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-6 py-2">
      <div className="text-sm font-medium text-slate-600">{label}</div>
      <div
        className={[
          "text-sm text-slate-900 text-right",
          mono ? "font-mono" : "",
        ].join(" ")}
      >
        {value}
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
      {children}
    </span>
  );
}

const Review = () => {
  const { getValues } = useFormContext<Article>();

  const values = getValues();
  const {
    title,
    type,
    abstract,
    authors = [],
    reviewers = [],
    issue,
    references = [],
    volume,
    keywords = [],
    publicationDate,
    firstPage,
    lastPage,
  } = values;

  const typeLabel = useMemo(
    () => articleTypeLabel[type as string] ?? formatEmpty(type),
    [type]
  );

  const { data: issues } = useGetVolumeIssues(volume);

  const issueAndVolume = useMemo(() => {
    return issues?.find(({ value }) => value === issue);
  }, [issue]);

  return (
    <div className="relative">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-white" />

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 py-8 space-y-8">
        <PageHeader
          title="Review your submission"
          subtitle="Confirm all metadata before you proceed. You can go back and edit anything if needed."
        />

        {/* Article Summary */}
        <Section title="Article summary">
          <Card>
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs text-slate-500">Manuscript title</div>
                  <div className="text-lg sm:text-xl font-semibold text-slate-900">
                    {formatEmpty(title)}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-end">
                  <Pill>{typeLabel}</Pill>
                  <Pill>
                    Vol {formatEmpty(issueAndVolume?.volumeNumber)} • Issue{" "}
                    {formatEmpty(issueAndVolume?.label)}
                  </Pill>
                </div>
              </div>

              <div className="border-t border-slate-200" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                <div className="divide-y divide-slate-100">
                  <InfoRow
                    label="Publication date"
                    value={formatEmpty(publicationDate)}
                    mono
                  />
                  <InfoRow
                    label="Pages"
                    value={`${formatEmpty(firstPage)} – ${formatEmpty(
                      lastPage
                    )}`}
                    mono
                  />
                </div>

                <div className="divide-y divide-slate-100">
                  <InfoRow
                    label="Volume"
                    value={formatEmpty(issueAndVolume?.volumeNumber)}
                  />
                  <InfoRow
                    label="Issue"
                    value={formatEmpty(issueAndVolume?.label)}
                  />
                </div>
              </div>
            </div>
          </Card>
        </Section>

        {/* Abstract */}
        <Section
          title="Abstract"
          subtitle="This is how your abstract will be displayed to editors/reviewers."
        >
          <Card>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed whitespace-pre-wrap">
              {formatEmpty(abstract)}
            </p>
          </Card>
        </Section>

        {/* Authors */}
        <Section
          title={`Authors (${authors.length})`}
          subtitle="Check spelling, affiliation, and country."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {authors.length === 0 ? (
              <Card>
                <p className="text-sm text-slate-600">No authors added.</p>
              </Card>
            ) : (
              authors.map((author, i) => (
                <Card key={i}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm text-slate-500">Author</p>
                      <p className="text-base font-semibold text-slate-900">
                        {formatEmpty(author.title)}{" "}
                        {formatEmpty(author.firstName)}{" "}
                        {formatEmpty(author.lastName)}
                      </p>
                    </div>
                    <Pill>#{i + 1}</Pill>
                  </div>

                  <div className="mt-4 divide-y divide-slate-100">
                    <InfoRow
                      label="Country"
                      value={formatEmpty(author.country)}
                    />
                    <InfoRow
                      label="Affiliation"
                      value={formatEmpty(author.affiliation)}
                    />
                  </div>
                </Card>
              ))
            )}
          </div>
        </Section>

        {/* Reviewers */}
        <Section title={`Reviewers (${reviewers.length})`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reviewers.length === 0 ? (
              <Card>
                <p className="text-sm text-slate-600">No reviewers added.</p>
              </Card>
            ) : (
              reviewers.map((reviewer, i) => (
                <Card key={i}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm text-slate-500">Reviewer</p>
                      <p className="text-base font-semibold text-slate-900">
                        {formatEmpty(reviewer.title)}{" "}
                        {formatEmpty(reviewer.name)}
                      </p>
                    </div>
                    <Pill>#{i + 1}</Pill>
                  </div>

                  <div className="mt-4 divide-y divide-slate-100">
                    <InfoRow
                      label="ORCID"
                      value={formatEmpty(reviewer.orcid)}
                      mono
                    />
                  </div>
                </Card>
              ))
            )}
          </div>
        </Section>

        {/* Keywords */}
        <Section
          title={`Keywords (${keywords.length})`}
          subtitle="These are used for indexing and search."
        >
          <Card>
            {keywords.length === 0 ? (
              <p className="text-sm text-slate-600">No keywords added.</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {keywords.map((k, i) => (
                  <span
                    key={`${k}-${i}`}
                    className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-sm text-white"
                  >
                    {k}
                  </span>
                ))}
              </div>
            )}
          </Card>
        </Section>

        {/* References */}
        <Section
          title={`References (${references.length})`}
          subtitle="URLs are clickable. Verify formatting and completeness."
        >
          <Card>
            {references.length === 0 ? (
              <p className="text-sm text-slate-600">No references added.</p>
            ) : (
              <ol className="space-y-3 list-decimal pl-5">
                {references.map((ref, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-800 leading-relaxed"
                  >
                    {renderReferenceWithLinks(ref)}
                  </li>
                ))}
              </ol>
            )}
          </Card>
        </Section>
      </div>
    </div>
  );
};

export default Review;
