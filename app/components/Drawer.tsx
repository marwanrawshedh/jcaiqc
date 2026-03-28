"use client";
import React, { useState } from "react";
import ActiveLink from "./activeLink";
import { CloseIcon } from "../assets/logos/Close";
import { BurgerMenuLogo } from "../assets/logos/BurgerMenu";
import MobileAuthButtons from "./MobileAuthButtons";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sm:hidden z-10">
      {/* Toggle Button */}
      <div className="flex flex-col items-center px-2 gap-5 flex-[0.01] ">
        <button
          aria-label="Toggle Menu"
          id="toggleOpen"
          onClick={() => setIsOpen(true)}
        >
          <BurgerMenuLogo />
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#00234C] shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => {
            setIsOpen(false);
          }}
          className=" absolute top-2 right-2  rounded-full bg-white w-9 h-9 flex items-center justify-center border"
        >
          <CloseIcon />
        </button>
        <ul className=" flex flex-col gap-5 p-4 ">
          <li className="max-md:border-b max-md:py-3 ">
            <ActiveLink className="text-white" href="/">
              Home
            </ActiveLink>
          </li>
          <li className="max-md:border-b max-md:py-3 ">
            <ActiveLink className="text-white" href="/aims-scope">
              Aims and scope
            </ActiveLink>
          </li>

          <li className="max-md:border-b max-md:py-3 ">
            <ActiveLink className="text-white" href="/editorial-team">
              Editorial Team
            </ActiveLink>
          </li>
          <li className="max-md:border-b max-md:py-3 ">
            <ActiveLink className="text-white" href="/author-guidelines">
              Author Guidelines
            </ActiveLink>
          </li>
          <li className="max-md:border-b max-md:py-3 ">
            <ActiveLink className="text-white" href="/ethics-policy">
              Publication Ethics
            </ActiveLink>
          </li>
          <li className="max-md:border-b max-md:py-3 ">
            <ActiveLink className="text-white" href="/archives">
              Archives{" "}
            </ActiveLink>
          </li>
          <li className="max-md:border-b max-md:py-3 ">
            <ActiveLink className="text-white" href="/current-issues">
              Current Issues
            </ActiveLink>
          </li>
          <MobileAuthButtons />
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
