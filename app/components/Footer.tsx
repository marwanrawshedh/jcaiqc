"use client";
import Link from "next/link";
import Image from "next/image";
import NewStap from "../assets/logos/NemStap";

function JcsraFooter() {
  return (
    <footer aria-label="Site Footer" className="bg-[#00234C] pt-12 pb-6 sm:px-10 px-0 font-[sans-serif] tracking-wide">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
        <div className="max-w-screen-xl mx-auto flex sm:flex-nowrap flex-wrap justify-center gap-10">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
            <div className="">
              <h4 className="text-16 mb-6 text-white font-bold">Guidelines</h4>
              <ul className="space-y-4">
                <li><Link href="/author-guidelines" className="text-gray-300 hover:text-white text-sm">Author Guidelines</Link></li>
                <li><Link href="/ethics-policy" className="text-gray-300 hover:text-white text-sm">Publication Ethics</Link></li>
              </ul>
            </div>
            <div className="flex-col flex gap-5 flex-1 text-16 text-white font-bold">
              <h4 className="text-lg">Contact Us</h4>
              <div className="text-sm"><strong className="text-gray-300 font-regular">Amman-Jordan</strong></div>
              <address><a className="flex gap-2 text-gray-300 font-regular text-sm" href="mailto:contact@sciencecommunitypublisher.org">contact@sciencecommunitypublisher.org</a></address>
              <address><a className="flex gap-2 text-gray-300 font-regular text-sm" href="mailto:editor.jcaiqc@sciencecommunitypublisher.org">editor.jcaiqc@sciencecommunitypublisher.org</a></address>
            </div>
            <p className="text-lg text-white text-center sm:text-nowrap w-min">
              <strong className="text-lg text-white w-48 text-center">Publisher -</strong> Science Community Publisher 
            </p>
          </div>
          <div className="flex flex-col bg-[rgba(186,215,250,0.2)] px-11 py-8 gap-4 flex-[0.7] w-96">
            <p className="text-16 font-bold text-white">Have an article?</p>
            <button onClick={() => window.location.href = "https://submit.sciencecommunitypublisher.org/index.php/jcaiqc/login"} className="py-3 px-8 bg-white text-black text-16 font-medium rounded-lg text-nowrap w-fit">
              Make a Submission
            </button>
            <p className="text-13 text-white opacity-60 text-wrap">Hello, we are STAP. Our goal is to to empower authors and spread there knowledge throw our platform</p>
          </div>
        </div>
        <div className="w-full h-0.5 bg-white opacity-50" />
        <div className="flex sm:justify-between justify-center items-center flex-wrap gap-4">
          <div className="flex flex-col bg-[rgba(186,215,250,0.2)] w-min p-2 sm:pr-40">
            <a href="https://sciencecommunitypublisher.org/">
              <NewStap width="150px" height="50px" />
              <p className="text-white text-sm text-center text-nowrap">2025© STAP. All rights reserved.</p>
            </a>
          </div>
          <div className="flex gap-8">
            <Link href={"/privacy-statement"} className="text-white font-medium text-13">Privacy</Link>
          </div>
          <a aria-label="Visit the Journal of Cybersecurity in AI and Quantum Computing LinkedIn page" href="https://www.linkedin.com/in/journal-of-cyber-security-and-risk-auditing-jcaiqc-b902b5349/">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer">
          <p className="text-white flex items-center text-sm">
            All site content, except where otherwise noted, is licensed under the Creative Commons Attribution (CC BY) license.
            <Image width={20} height={20} className="inline-block h-5 ml-2 align-text-bottom" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="CC" />
          </p>
        </a>
      </div>
    </footer>
  );
}

function MinimalFooter() {
  return (
    <footer aria-label="Site Footer" className="bg-white border-t border-gray-200 pt-16 pb-8 sm:px-10 px-6 font-body">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-12">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand/Publisher Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-heading text-primary font-bold">Science Community Publisher</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              Publishing rigorous, peer-reviewed academic research to empower authors and spread knowledge globally.
            </p>
            <div className="mt-2">
              <a href="https://sciencecommunitypublisher.org/" target="_blank" rel="noopener noreferrer">
                <NewStap width="120px" height="40px" className="opacity-80 grayscale hover:grayscale-0 transition duration-300" />
              </a>
            </div>
          </div>

          {/* Guidelines Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-gray-900 tracking-wider uppercase">Resources & Guidelines</h4>
            <ul className="space-y-3">
              <li><Link href="/author-guidelines" className="text-gray-500 hover:text-primary transition duration-200 text-sm">For Authors</Link></li>
              <li><Link href="/ethics-policy" className="text-gray-500 hover:text-primary transition duration-200 text-sm">Publication Ethics</Link></li>
              <li><Link href="/aims-scope" className="text-gray-500 hover:text-primary transition duration-200 text-sm">Aims & Scope</Link></li>
            </ul>
          </div>

          {/* Contact Info & CTA */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-gray-900 tracking-wider uppercase">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <p>Amman, Jordan</p>
              <a className="hover:text-primary transition duration-200" href="mailto:contact@sciencecommunitypublisher.org">contact@sciencecommunitypublisher.org</a>
              <a className="hover:text-primary transition duration-200" href="mailto:editor.jcaiqc@sciencecommunitypublisher.org">editor.jcaiqc@sciencecommunitypublisher.org</a>
            </div>
            
            <button onClick={() => window.location.href = "https://submit.sciencecommunitypublisher.org/index.php/jcaiqc/login"} className="mt-4 py-2.5 px-6 border border-primary text-primary hover:bg-primary hover:text-white transition duration-300 text-sm font-medium w-fit">
              Make a Submission
            </button>
          </div>
        </div>

        {/* Bottom Bar Segment */}
        <div className="border-t border-gray-100 flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} STAP. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href={"/privacy-statement"} className="text-xs text-gray-400 hover:text-primary transition">Privacy Policy</Link>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/journal-of-cyber-security-and-risk-auditing-jcaiqc-b902b5349/" className="text-gray-400 hover:text-primary transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Creative Commons */}
        <div className="w-full flex justify-center text-center">
          <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" className="flex items-center gap-2 group text-xs text-gray-400 hover:text-gray-600 transition">
            <span>All site content, except where otherwise noted, is licensed under Creative Commons Attribution (CC BY).</span>
            <Image width={16} height={16} className="opacity-70 group-hover:opacity-100 transition" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="CC" />
          </a>
        </div>
      </div>
    </footer>
  );
}

const Footer = () => {
  const isJournalB = process.env.NEXT_PUBLIC_JOURNAL_ID === "journal-b";
  
  if (isJournalB) {
    return <MinimalFooter />;
  }
  
  return <JcsraFooter />;
};

export default Footer;
