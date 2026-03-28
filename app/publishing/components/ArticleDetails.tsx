"use client";

import React, { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@headlessui/react";

import Select from "../../components/Select";
import Upload from "../../components/Upload";
import Keywords from "./Keywords";

import { useGetVolumes } from "../../api/volumes";
import { useGetVolumeIssues } from "../../api/issue";

export const articleTypeOption = [
  { label: "Select article type", value: "" },
  { label: "Review Article", value: "review" },
  { label: "Research Article", value: "research" },
];

type FieldShellProps = {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
};

function FieldShell({
  label,
  required,
  hint,
  error,
  children,
}: FieldShellProps) {
  const hintId = useId();
  const errorId = useId();

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-800">
          {label} {required ? <span className="text-rose-500">*</span> : null}
        </label>
      </div>

      <div
        className={[
          "rounded-xl border bg-white shadow-sm",
          error ? "border-rose-300" : "border-slate-200",
          "transition focus-within:ring-2 focus-within:ring-blue-500/30 focus-within:border-blue-400",
        ].join(" ")}
      >
        <div className="p-3">{children}</div>
      </div>

      {hint ? (
        <p id={hintId} className="text-xs text-slate-500">
          {hint}
        </p>
      ) : null}

      {error ? (
        <p id={errorId} className="text-xs font-medium text-rose-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-1">
      <h2 className="text-base font-semibold text-slate-900">{title}</h2>
      {subtitle ? (
        <p className="text-sm text-slate-600 leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}

const ArticleDetails = () => {
  const { control, watch } = useFormContext();

  const volumeValue = watch("volume");
  const { data: volumes, isLoading: volumesLoading } = useGetVolumes();

  const { data: issues, isLoading: issuesLoading } = useGetVolumeIssues(
    volumeValue,
    { enabled: !!volumeValue }
  );

  const volumeOptions = useMemo(
    () => [{ label: "Select volume", value: "" }, ...(volumes ?? [])],
    [volumes]
  );

  const issueOptions = useMemo(
    () => [{ label: "Select issue", value: "" }, ...(issues ?? [])],
    [issues]
  );

  return (
    <div className="w-full">
      {/* Page background */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-white" />
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 py-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Article details
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed"></p>
          </div>

          {/* Main card */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="p-5 sm:p-8 space-y-8">
              <div className="flex items-start justify-between gap-4">
                <SectionTitle title="Metadata" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Controller
                  name="volume"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <FieldShell
                      label="Article volume"
                      required
                      error={error?.message}
                      hint={volumesLoading ? "Loading volumes…" : undefined}
                    >
                      <Select field={field} options={volumeOptions} />
                    </FieldShell>
                  )}
                />

                <Controller
                  name="issue"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <FieldShell
                      label="Article issue"
                      required
                      error={error?.message}
                      hint={
                        !volumeValue
                          ? "Select a volume first."
                          : issuesLoading
                          ? "Loading issues…"
                          : undefined
                      }
                    >
                      <Select
                        field={{
                          ...field,
                          disabled: !volumeValue,
                        }}
                        options={issueOptions}
                      />
                    </FieldShell>
                  )}
                />

                <Controller
                  name="type"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <FieldShell
                      label="Article type"
                      required
                      error={error?.message}
                    >
                      <Select field={field} options={articleTypeOption} />
                    </FieldShell>
                  )}
                />
              </div>

              {/* Title */}
              <Controller
                name="title"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <FieldShell
                    label="Manuscript title"
                    required
                    error={error?.message}
                  >
                    <Input
                      type="text"
                      placeholder="Enter manuscript title"
                      className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                      {...field}
                      aria-invalid={!!error}
                    />
                  </FieldShell>
                )}
              />

              {/* Upload */}
              <div className="pt-2">
                <SectionTitle
                  title="Manuscript file"
                  subtitle="Upload the main manuscript document (Word/PDF depending on your rules)."
                />
                <div className="mt-4">
                  <Controller
                    name="uploadedFile"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                          <Upload field={field} />
                        </div>
                        {error?.message ? (
                          <p className="mt-2 text-xs font-medium text-rose-600">
                            {error.message}
                          </p>
                        ) : null}
                      </>
                    )}
                  />
                </div>
              </div>

              {/* Pagination + Date */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Controller
                  name="firstPage"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <FieldShell label="First page" error={error?.message}>
                      <Input
                        inputMode="numeric"
                        placeholder="e.g. 1"
                        className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                        {...field}
                        aria-invalid={!!error}
                      />
                    </FieldShell>
                  )}
                />

                <Controller
                  name="lastPage"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <FieldShell
                      label="Last page"
                      error={error?.message}
                      hint="Numeric value."
                    >
                      <Input
                        inputMode="numeric"
                        placeholder="e.g. 12"
                        className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                        {...field}
                        aria-invalid={!!error}
                      />
                    </FieldShell>
                  )}
                />

                <Controller
                  name="publicationDate"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <FieldShell
                      label="Publication date"
                      error={error?.message}
                      hint="Preferred format: YYYY/MM/DD"
                    >
                      {/* If you can: switch this to type="date" and format on submit */}
                      <Input
                        placeholder="YYYY/MM/DD"
                        className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                        {...field}
                        aria-invalid={!!error}
                      />
                    </FieldShell>
                  )}
                />
              </div>

              {/* Abstract */}
              <div className="space-y-4">
                <SectionTitle title="Abstract" />

                <Controller
                  name="abstract"
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <FieldShell
                      label="Abstract text"
                      required
                      error={error?.message}
                    >
                      <textarea
                        {...field}
                        rows={10}
                        className="w-full resize-y bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                        placeholder="Write your abstract here…"
                      />
                    </FieldShell>
                  )}
                />
              </div>

              {/* Keywords */}
              <div className="pt-2">
                <SectionTitle title="Keywords" />
                <div className="mt-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
                    <Keywords />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
          </div>

          {/* Mobile spacer */}
          <div className="h-6" />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
