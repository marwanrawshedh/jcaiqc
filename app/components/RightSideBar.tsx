"use client";
import Link from "next/link";
import Image from "next/image";
// import Indexes from "./Indexes";
// import NewStap from "../assets/logos/NemStap";
import { useEditorialMembers } from "../api/editorial-team/get";

// ----------------------------------------------------------------------
// RightSidebar Component Architecture
// The Sidebar is a universal shell that renders modular content blocks 
// based on the active journal environment variable.
// ----------------------------------------------------------------------

export default function RightSideBar() {
  const isJournalB = process.env.NEXT_PUBLIC_JOURNAL_ID === "journal-b";
  const { data, isPending } = useEditorialMembers();
  const editorInChief = data?.filter(({ type }) => type === "editorInChief");

  return (
    <aside className="flex flex-col gap-6 sm:w-full h-max" aria-label="Journal Sidebar">
      
      {/* 1. Universal Call-to-Action Block */}
      <div className="flex flex-col gap-3 p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
        <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">
          For Authors
        </h3>
        <button
          onClick={() => (window.location.href = isJournalB ? "https://submit.journal-b.com" : "https://submit.sciencecommunitypublisher.org/index.php/jcaiqc/login")}
          className="w-full py-3 px-4 text-sm font-semibold tracking-wide rounded-lg text-white bg-accent hover:bg-accent-hover focus:outline-none shadow-sm transition-colors"
        >
          Submit Manuscript
        </button>
        <Link 
          href="/author-guidelines" 
          className="text-xs font-medium text-center text-gray-500 hover:text-primary transition-colors mt-2"
        >
          View Author Guidelines &rarr;
        </Link>
      </div>

      {/* 2. Journal-Specific Metric / Highlights Block */}
      {isJournalB && (
        <section aria-labelledby="journal-metrics" className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
           <h3 id="journal-metrics" className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">
             Journal Metrics
           </h3>
           <div className="flex flex-col gap-3 text-sm">
             <div className="flex justify-between items-center">
               <span className="text-gray-600 font-medium">Acceptance Rate</span>
               <span className="font-bold text-primary">40%</span>
             </div>
             <div className="flex justify-between items-center">
               <span className="text-gray-600 font-medium">Time to First Decision</span>
               <span className="font-bold text-primary">60 Days</span>
             </div>
           </div>
        </section>
      )}

      {/* 3. Core Editorial Information */}
      <section aria-labelledby="editorial-leadership" className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
          <h3 id="editorial-leadership" className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            Editorial Leadership
          </h3>
          <Link href="/editorial-team" className="text-[10px] font-bold text-accent uppercase hover:underline tracking-wider">
            Full Board
          </Link>
        </div>
        
        {!isPending && editorInChief?.map(({ firstName, lastName, title, fileUrl }) => (
          <div key={firstName} className="flex gap-4 items-center group">
            <Image
              className="rounded-full w-14 h-14 object-cover border-2 border-gray-50 shadow-sm grayscale group-hover:grayscale-0 transition-all"
              width={56}
              height={56}
              src={fileUrl}
              alt={"Editor in Chief image"}
            />
            <div className="flex flex-col">
              <p className="text-sm font-bold font-heading text-primary leading-tight group-hover:text-accent transition-colors">
                {title}. {firstName} {lastName}
              </p>
              <p className="text-[11px] text-gray-500 font-semibold tracking-wider uppercase mt-1">
                Editor in Chief
              </p>
            </div>
          </div>
        ))}

        {isPending && (
          <div className="animate-pulse flex gap-4 items-center">
            <div className="rounded-full bg-gray-200 h-14 w-14"></div>
            <div className="flex flex-col gap-2 flex-1">
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              <div className="h-2 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        )}
      </section>

      {/* 4. Indexing & Abstracting (Universal) */}
      {/* <section aria-labelledby="indexing-section" className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
        <h3 id="indexing-section" className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">
          Indexed In
        </h3>
        <Indexes />
      </section> */}

      {/* 5. Publisher Trust Signal */}
      {/* <div className="mt-4 flex flex-col justify-center items-center opacity-70 hover:opacity-100 transition-opacity">
        <a aria-label="Visit STAP Publisher" href="https://sciencecommunitypublisher.org/" target="_blank" rel="noopener noreferrer">
          <NewStap width="120px" height="45px" />
        </a>
        <p className="text-[9px] text-gray-400 font-bold tracking-widest uppercase mt-2">Published by STAP</p>
      </div> */}
    </aside>
  );
}
