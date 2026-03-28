"use client";

import React from "react";
import { useRouter } from "next/navigation";

type Action = {
  title: string;
  description: string;
  href: string;
  badge?: string;
};

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

function CardAction({
  action,
  onClick,
}: {
  action: Action;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group w-full text-left",
        "rounded-2xl border border-slate-200 bg-white shadow-sm",
        "p-5 sm:p-6",
        "transition",
        "hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300",
        "focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-slate-900 group-hover:text-slate-950">
              {action.title}
            </h3>
            {action.badge ? (
              <span className="inline-flex items-center rounded-full bg-slate-900 px-2.5 py-1 text-xs font-medium text-white">
                {action.badge}
              </span>
            ) : null}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            {action.description}
          </p>
        </div>

        <div className="shrink-0 text-slate-400 group-hover:text-slate-600 transition">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.94 10 7.21 6.29a.75.75 0 1 1 1.06-1.06l4.24 4.24a.75.75 0 0 1 0 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}

const Control = () => {
  const router = useRouter();

  const publishing: Action[] = [
    {
      title: "Publish an article",
      description:
        "Create a new publication entry with metadata and manuscript file.",
      href: "/publishing",
      badge: "Primary",
    },
    {
      title: "Update published article",
      description:
        "Edit metadata, authors, or files for an already published article.",
      href: "/update",
    },
  ];

  const management: Action[] = [
    {
      title: "Submissions",
      description: "Browse, filter, and review incoming submissions.",
      href: "/submission-list",
    },
    {
      title: "Users",
      description: "Manage users and view registration activity.",
      href: "/users-list",
    },
  ];

  const settings: Action[] = [
    {
      title: "Issue settings",
      description: "Manage volumes/issues and publication cycles.",
      href: "/issue",
    },
    {
      title: "Statistics",
      description: "Update metrics, reports, and public statistics.",
      href: "/statistics",
    },
  ];

  const editorial: Action[] = [
    {
      title: "Add editorial member",
      description:
        "Add editors, reviewers, or board members to the editorial team page.",
      href: "/edit-editorial-team",
    },
    {
      title: "Delete editorial member",
      description: "Remove an editorial member safely and keep the list clean.",
      href: "/delete-editorial-team",
      badge: "Careful",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-white" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Admin control panel
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Quick access to publishing, submissions, settings, and editorial
            tools.
          </p>
        </div>

        {/* Sections */}
        <div className="grid gap-8">
          <Section
            title="Publishing"
            subtitle="Create and manage published content."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {publishing.map((a) => (
                <CardAction
                  key={a.href}
                  action={a}
                  onClick={() => router.push(a.href)}
                />
              ))}
            </div>
          </Section>

          <Section
            title="Management"
            subtitle="Review submissions and manage users."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {management.map((a) => (
                <CardAction
                  key={a.href}
                  action={a}
                  onClick={() => router.push(a.href)}
                />
              ))}
            </div>
          </Section>

          <Section title="Settings" subtitle="Configure issues and statistics.">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {settings.map((a) => (
                <CardAction
                  key={a.href}
                  action={a}
                  onClick={() => router.push(a.href)}
                />
              ))}
            </div>
          </Section>

          <Section
            title="Editorial team"
            subtitle="Maintain the editorial team list."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {editorial.map((a) => (
                <CardAction
                  key={a.href}
                  action={a}
                  onClick={() => router.push(a.href)}
                />
              ))}
            </div>
          </Section>
        </div>

        {/* Footer hint */}
        <div className="text-xs text-slate-500">
          Tip: You can add role-based restrictions later (Editor/Admin) to hide
          actions per user.
        </div>
      </div>
    </div>
  );
};

export default Control;
