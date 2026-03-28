"use client";
import Link from "next/link";
import Image from "next/image";
import ActiveLink from "./activeLink";
import AuthButtons from "./AuthButtons";
import DropDownList from "./Menu";
import Drawer from "./Drawer";
import MySubmissionButton from "./MySubmissionButton";
import { common } from "../constants/common";
// import { NewStap } from "../assets/logos/NemStap";

function NavigationLinks() {
  return (
    <>
      <li>
        <ActiveLink className="text-white hover:text-gray-200 transition-colors" href="/">
          Home
        </ActiveLink>
      </li>
      <li>
        <ActiveLink className="text-white hover:text-gray-200 transition-colors" href="/archives">
          Archives
        </ActiveLink>
      </li>
      <li>
        <ActiveLink className="text-white hover:text-gray-200 transition-colors" href="/current-issues">
          Current Issues
        </ActiveLink>
      </li>
      <DropDownList
        buttonText="Journal Menu"
        items={[
          { title: "Aims and scope", href: "/aims-scope" },
          { title: "Author Guidelines", href: "/author-guidelines" },
          { title: "Editorial Team", href: "/editorial-team" },
          { title: "Journal Partnerships", href: "/journal-partnerships" },
          { title: "Abstracting and Indexing", href: "/abstracting-indexing" },
          { title: "Article Publishing Charges", href: "/article-charges" },
        ]}
      />
      <DropDownList
        buttonText="Journal Policies"
        items={[
          { title: "Publication Ethics Policy", href: "/ethics-policy" },
          { title: "Open Access Policy", href: "/access-policy" },
          { title: "Peer Review Policy", href: "/peer-review" },
          { title: "Archiving Policy", href: "/archiving-policy" },
          { title: "Generative AI Policy", href: "/generative-ai-policy" },
          { title: "Copyright and Licenses Policy", href: "/copyright-licenses-policy" },
          { title: "Plagiarism Check Policy", href: "/plagiarism-policy" },
          { title: "Misconduct Policy", href: "/misconduct-policy" },
          { title: "Retractions Policy", href: "/retractions-policy" },
          { title: "Publication Misbehavior Policy", href: "/publication-misbehavior-policy" },
          { title: "Corrections Withdrawals Policy", href: "/corrections-withdrawals-policy" },
        ]}
      />
      <DropDownList
        buttonText="About"
        items={[
          { title: "About The Journal", href: "/about-journal" },
          { title: "Privacy Statement", href: "/privacy-statement" },
          { title: "Contact Us", href: "/contact-us" },
        ]}
      />
    </>
  );
}

export default function Header() {
  return (
    <header className="w-full bg-white flex flex-col font-body border-b border-gray-200 shadow-sm relative z-50">
      {/* Top Utility Bar (Publisher & Auth) */}
      <div className="bg-gray-50 border-b border-gray-200 py-1.5 px-4 sm:px-10 z-20 relative">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center text-xs text-gray-600">
          <div className="flex gap-4 items-center">
            <Link href="https://sciencecommunitypublisher.org/" target="_blank" className="hover:text-primary transition-colors flex items-center gap-1.5">
              <span className="font-semibold tracking-wider text-[10px] uppercase text-gray-400">Publisher</span> 
              <span className="font-medium text-gray-800 flex items-center gap-1">
                 <span className="hidden sm:inline lowercase text-gray-500">— Science Community Publisher</span>
              </span>
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="https://sciencecommunitypublisher.org/journals" target="_blank" className="hover:text-primary transition-colors font-medium">All Journals</Link>
          </div>
          <div className="scale-90 origin-right">
            <AuthButtons />
          </div>
        </div>
      </div>

      {/* Main Branding Area */}
      <div className="py-8 px-4 sm:px-10 w-full relative z-10 bg-white">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8">
          
          {/* Logo and Journal Title */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8 w-full text-center sm:text-left">
            {/* <div className="hidden sm:flex self-start mt-2 border-r border-gray-100 pr-6">
              <NewStap width="140px" height="50px" />
            </div> */}
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl sm:text-[2.25rem] font-bold font-heading text-primary leading-tight tracking-tight">
                {common.JournalTitle}
              </h1>
              
              {/* Core Journal Metadata / Badges */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 mt-2 text-sm font-medium text-gray-600">
                <span className="bg-gray-50 px-2.5 py-1 rounded text-gray-700 border border-gray-200 shadow-sm">
                  ISSN: {common.issn} <span className="text-gray-500 font-normal">(Online)</span>
                </span>
                
                <span className="flex items-center gap-1.5 text-accent bg-accent/5 px-2.5 py-1 rounded border border-accent/20">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Peer Reviewed
                </span>
                
                <span className="flex items-center gap-1.5 text-orange-700 bg-orange-50 px-2.5 py-1 rounded border border-orange-200">
                  <Image src="/logos/openAccess.svg" alt="Open Access" width={12} height={12} className="opacity-80" />
                  Open Access
                </span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 mt-2 lg:mt-0 flex flex-col gap-3">
            <MySubmissionButton />
          </div>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <div className="bg-primary text-white sticky top-0 z-40 border-t border-primary/20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-10 h-14 flex items-center justify-between xl:justify-start gap-8">
          <ul className="hidden xl:flex items-center h-full gap-8 text-sm font-medium tracking-wide">
            <NavigationLinks />
          </ul>
          <div className="xl:hidden flex items-center w-full justify-between">
            <span className="font-semibold text-sm tracking-widest uppercase">Menu</span>
            <Drawer />
          </div>
        </div>
      </div>
    </header>
  );
}
