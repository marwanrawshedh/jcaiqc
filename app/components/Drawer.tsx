"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../providers/authProvider";
import { useRouter } from "next/navigation";

// ─── Nav Data ───────────────────────────────────────────────────────────────
const NAV_SECTIONS = [
  {
    label: "Navigation",
    items: [
      { title: "Home", href: "/", icon: HomeIcon },
      { title: "Archives", href: "/archives", icon: ArchiveIcon },
      { title: "Current Issues", href: "/current-issues", icon: IssueIcon },
    ],
  },
  {
    label: "Journal Menu",
    items: [
      { title: "Aims and Scope", href: "/aims-scope", icon: AimIcon },
      { title: "Author Guidelines", href: "/author-guidelines", icon: GuideIcon },
      { title: "Editorial Team", href: "/editorial-team", icon: TeamIcon },
      { title: "Journal Partnerships", href: "/journal-partnerships", icon: PartnerIcon },
      { title: "Abstracting & Indexing", href: "/abstracting-indexing", icon: IndexIcon },
      { title: "Article Publishing Charges", href: "/article-charges", icon: ChargesIcon },
    ],
  },
  {
    label: "Policies",
    items: [
      { title: "Publication Ethics", href: "/ethics-policy", icon: EthicsIcon },
      { title: "Open Access Policy", href: "/access-policy", icon: OpenIcon },
      { title: "Peer Review Policy", href: "/peer-review", icon: ReviewIcon },
      { title: "Copyright & Licenses", href: "/copyright-licenses-policy", icon: CopyrightIcon },
    ],
  },
  {
    label: "About",
    items: [
      { title: "About The Journal", href: "/about-journal", icon: AboutIcon },
      { title: "Contact Us", href: "/contact-us", icon: ContactIcon },
    ],
  },
];

// ─── Icon Components ─────────────────────────────────────────────────────────
function HomeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21H15v-6H9v6H3V9.75z" />
    </svg>
  );
}
function ArchiveIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="7" width="18" height="3" rx="1" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10v9a1 1 0 001 1h14a1 1 0 001-1v-9M10 14h4" />
    </svg>
  );
}
function IssueIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}
function AimIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="8" />
      <line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" />
      <line x1="2" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="22" y2="12" />
    </svg>
  );
}
function GuideIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  );
}
function TeamIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
function PartnerIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}
function IndexIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
    </svg>
  );
}
function ChargesIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 14v-2m-6-6h12" />
    </svg>
  );
}
function EthicsIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
function OpenIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
    </svg>
  );
}
function ReviewIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}
function CopyrightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M14.5 9.5a3 3 0 10-3 5 3 3 0 003-5z" />
    </svg>
  );
}
function AboutIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth={2.5} />
      <line x1="12" y1="12" x2="12" y2="16" />
    </svg>
  );
}
function ContactIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

// ─── Hamburger Button ─────────────────────────────────────────────────────────
function HamburgerButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      aria-label={isOpen ? "Close Menu" : "Open Menu"}
      id="toggleDrawer"
      onClick={onClick}
      className="relative flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
    >
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      <div className="flex flex-col items-center justify-center w-5 h-5 gap-1.5">
        <span
          className="block h-0.5 w-5 bg-white rounded-full transition-all duration-300 origin-center"
          style={{ transform: isOpen ? "translateY(8px) rotate(45deg)" : "none" }}
        />
        <span
          className="block h-0.5 w-5 bg-white rounded-full transition-all duration-200"
          style={{ opacity: isOpen ? 0 : 1, transform: isOpen ? "scaleX(0)" : "none" }}
        />
        <span
          className="block h-0.5 w-5 bg-white rounded-full transition-all duration-300 origin-center"
          style={{ transform: isOpen ? "translateY(-8px) rotate(-45deg)" : "none" }}
        />
      </div>
    </button>
  );
}

// ─── Nav Item ─────────────────────────────────────────────────────────────────
function NavItem({
  item,
  index,
  isOpen,
  onClose,
}: {
  item: { title: string; href: string; icon: () => React.ReactElement };
  index: number;
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const Icon = item.icon;

  return (
    <li
      style={{
        transitionDelay: isOpen ? `${80 + index * 35}ms` : "0ms",
        transform: isOpen ? "translateX(0)" : "translateX(-20px)",
        opacity: isOpen ? 1 : 0,
        transition: "transform 0.3s ease, opacity 0.3s ease",
      }}
    >
      <Link
        href={item.href}
        onClick={onClose}
        className={`relative group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
          isActive
            ? "bg-white/15 text-white shadow-sm"
            : "text-white/70 hover:text-white hover:bg-white/8"
        }`}
      >
        <span
          className={`absolute left-0 top-1/2 -translate-y-1/2 h-6 w-0.5 rounded-r-full bg-white transition-all duration-200 ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"
          }`}
        />
        <span
          className={`flex-shrink-0 p-1.5 rounded-md transition-colors duration-150 ${
            isActive
              ? "bg-white/20 text-white"
              : "text-white/50 group-hover:text-white group-hover:bg-white/10"
          }`}
        >
          <Icon />
        </span>
        <span className="flex-1 tracking-wide">{item.title}</span>
        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white/80 flex-shrink-0" />}
      </Link>
    </li>
  );
}

// ─── Main Drawer ──────────────────────────────────────────────────────────────
const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, isLoggedIn, role } = useAuth();
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <div className="xl:hidden">
      <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen((o) => !o)} />

      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden="true"
        className="fixed inset-0 z-40 transition-all duration-300"
        style={{
          backdropFilter: isOpen ? "blur(4px)" : "blur(0px)",
          backgroundColor: isOpen ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0)",
          pointerEvents: isOpen ? "auto" : "none",
          opacity: isOpen ? 1 : 0,
        }}
      />

      {/* Drawer Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="fixed top-0 left-0 h-full z-50 flex flex-col w-[300px] max-w-[85vw] bg-primary"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: isOpen ? "8px 0 40px rgba(0,0,0,0.35), 2px 0 8px rgba(0,0,0,0.2)" : "none",
        }}
      >
        {/* Decorative orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-60px] left-[-60px] w-52 h-52 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #4A90E2 0%, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[20%] right-[-40px] w-40 h-40 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)" }}
        />

        {/* Header */}
        <div className="relative flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <div>
              <span className="text-white text-sm font-semibold tracking-wide leading-none block">JCAIQC</span>
              <span className="text-white/40 text-[10px] tracking-wider uppercase leading-none block mt-0.5">Journal Menu</span>
            </div>
          </div>
          <button
            onClick={close}
            aria-label="Close menu"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-150 focus:outline-none"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-5" aria-label="Main navigation">
          {NAV_SECTIONS.map((section) => (
            <div key={section.label}>
              <p className="px-3 mb-1.5 text-[10px] font-semibold text-white/35 uppercase tracking-[0.12em]">
                {section.label}
              </p>
              <ul className="space-y-0.5">
                {section.items.map((item, i) => (
                  <NavItem
                    key={item.href}
                    item={item}
                    index={i}
                    isOpen={isOpen}
                    onClose={close}
                  />
                ))}
              </ul>
            </div>
          ))}

          {isLoggedIn && role === "admin" && (
            <div>
              <p className="px-3 mb-1.5 text-[10px] font-semibold text-amber-400/60 uppercase tracking-[0.12em]">
                Administration
              </p>
              <ul className="space-y-0.5">
                <li>
                  <Link
                    href="/control"
                    onClick={close}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-amber-300/80 hover:text-amber-200 hover:bg-amber-500/10 transition-all duration-150"
                  >
                    <span className="flex-shrink-0 p-1.5 rounded-md bg-amber-500/10 text-amber-300/70">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    Control Panel
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>

        {/* Footer */}
        <div className="flex-shrink-0 px-4 py-4 border-t border-white/10 space-y-2.5">
          <a
            href="https://submit.sciencecommunitypublisher.org/index.php/jcaiqc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold bg-white text-[#00234C] hover:bg-white/90 transition-all duration-200 shadow-lg shadow-black/20 tracking-wide"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Submit Manuscript
          </a>
          <div className="flex gap-2">
            {!isLoggedIn ? (
              <>
                <a
                  href="https://submit.sciencecommunitypublisher.org/index.php/jcaiqc/user/register"
                  className="flex-1 text-center px-3 py-2 rounded-xl text-xs font-semibold border border-white/20 text-white/75 hover:text-white hover:bg-white/10 hover:border-white/35 transition-all duration-150"
                >
                  Register
                </a>
                <a
                  href="https://publish.sciencecommunitypublisher.org/index.php/jcaiqc/login"
                  className="flex-1 text-center px-3 py-2 rounded-xl text-xs font-semibold border border-white/20 text-white/75 hover:text-white hover:bg-white/10 hover:border-white/35 transition-all duration-150"
                >
                  Login
                </a>
              </>
            ) : (
              <button
                onClick={() => { logout(() => router.push("/")); close(); }}
                className="flex-1 text-center px-3 py-2 rounded-xl text-xs font-semibold border border-red-400/30 text-red-300/80 hover:text-red-200 hover:bg-red-500/10 hover:border-red-400/50 transition-all duration-150"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
