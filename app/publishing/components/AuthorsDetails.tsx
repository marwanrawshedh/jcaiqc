"use client";

import React, { useId, useMemo } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Button, Input } from "@headlessui/react";

import Select from "../../components/Select";
import DeleteButton from "@/app/components/DeleteButton";
import { getAllCountries } from "../../helper/countries/getCountries";

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
      <label className="text-sm font-medium text-slate-800">
        {label} {required ? <span className="text-rose-500">*</span> : null}
      </label>

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

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      {children}
    </div>
  );
}

const titleOptions = [
  { label: "Select personal title", value: "" },
  { label: "Prof.", value: "prof" },
  { label: "Dr.", value: "dr" },
  { label: "Mr.", value: "mr" },
  { label: "Miss", value: "miss" },
  { label: "Mrs.", value: "mrs" },
];

const AuthorsDetails = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "authors",
  });

  const countryOptions = useMemo(
    () => [
      { label: "Select country", value: "" },
      ...getAllCountries().map(({ name, code }) => ({
        label: name,
        value: code,
      })),
    ],
    []
  );

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-white" />

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 py-8 space-y-6">
        <PageHeader
          title="Authors"
          subtitle="Add all contributing authors. Make sure names and affiliations match the manuscript exactly."
        />

        <div className="space-y-4">
          {fields.length === 0 ? (
            <Card>
              <div className="p-6">
                <p className="text-sm text-slate-600">
                  No authors added yet. Click{" "}
                  <span className="font-medium">Add author</span> to begin.
                </p>
              </div>
            </Card>
          ) : null}

          {fields.map((author, index) => {
            const isFirst = index === 0;

            return (
              <Card key={author.id}>
                {/* Card header */}
                <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 sm:px-6 py-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h2 className="text-base sm:text-lg font-semibold text-slate-900">
                        Author {index + 1}
                      </h2>
                      {isFirst ? (
                        <span className="inline-flex items-center rounded-full bg-slate-900 px-2.5 py-1 text-xs font-medium text-white">
                          Primary
                        </span>
                      ) : null}
                    </div>
                    <p className="text-sm text-slate-600">
                      Personal info, country, ORCID, and affiliation.
                    </p>
                  </div>

                  {!isFirst ? (
                    <div className="shrink-0">
                      <DeleteButton
                        onClick={() => remove(index)}
                        text={`Remove author ${index + 1}`}
                      />
                    </div>
                  ) : (
                    <div className="text-xs text-slate-500 pt-1">Required</div>
                  )}
                </div>

                {/* Card body */}
                <div className="px-5 sm:px-6 py-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Title */}
                    <Controller
                      name={`authors.${index}.title`}
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <FieldShell
                          label="Title"
                          required
                          error={error?.message}
                        >
                          <Select field={field} options={titleOptions} />
                        </FieldShell>
                      )}
                    />

                    {/* Country */}
                    <Controller
                      name={`authors.${index}.country`}
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <FieldShell
                          label="Country"
                          required
                          error={error?.message}
                        >
                          <Select
                            error={!!error}
                            field={field}
                            options={countryOptions}
                          />
                        </FieldShell>
                      )}
                    />

                    {/* First name */}
                    <Controller
                      name={`authors.${index}.firstName`}
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <FieldShell
                          label="First name"
                          required
                          error={error?.message}
                        >
                          <Input
                            type="text"
                            placeholder="Enter first name"
                            className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                            {...field}
                            aria-invalid={!!error}
                          />
                        </FieldShell>
                      )}
                    />

                    {/* Last name */}
                    <Controller
                      name={`authors.${index}.lastName`}
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <FieldShell
                          label="Last name"
                          required
                          error={error?.message}
                        >
                          <Input
                            type="text"
                            placeholder="Enter last name"
                            className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                            {...field}
                            aria-invalid={!!error}
                          />
                        </FieldShell>
                      )}
                    />

                    {/* ORCID */}
                    <Controller
                      name={`authors.${index}.orcid`}
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <FieldShell label="ORCID" error={error?.message}>
                          <Input
                            type="text"
                            inputMode="text"
                            placeholder="Enter ORCID link"
                            className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none font-mono"
                            {...field}
                            aria-invalid={!!error}
                          />
                        </FieldShell>
                      )}
                    />

                    {/* Affiliation */}
                    <Controller
                      name={`authors.${index}.affiliation`}
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <FieldShell
                          label="Affiliation"
                          required
                          error={error?.message}
                        >
                          <textarea
                            {...field}
                            rows={3}
                            placeholder="Enter affiliation"
                            className="w-full resize-y bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                          />
                        </FieldShell>
                      )}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Add author */}
        <div className="flex justify-center pt-2">
          <Button
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            onClick={() =>
              append({
                firstName: "",
                lastName: "",
                title: "",
                country: "", // ✅ fix: was `Country`
                affiliation: "",
                orcid: "",
              })
            }
          >
            Add author
          </Button>
        </div>

        <p className="text-center text-xs text-slate-500">
          Tip: Keep author order the same as the manuscript.
        </p>
      </div>
    </div>
  );
};

export default AuthorsDetails;
