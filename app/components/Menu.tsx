"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ActiveLink from "./activeLink";

type DropDownListProps = {
  buttonText: React.ReactNode;
  items: { href: string; title: React.ReactNode }[];
};

const DropDownList = ({ items, buttonText }: DropDownListProps) => {
  return (
    <Menu>
      <li className="relative">
        <MenuButton className="group text-white flex items-center gap-1.5 transition duration-200 ease-in-out hover:text-gray-200 focus:outline-none py-2">
          {buttonText} 
          <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </MenuButton>
        <MenuItems
          anchor="bottom start"
          transition
          className="absolute left-0 mt-3 w-64 bg-white z-50 flex flex-col rounded shadow-xl border border-gray-100 origin-top-left transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 focus:outline-none py-2"
        >
          {items.map(({ title, href }) => {
            return (
              <MenuItem key={href}>
                {({ focus }) => (
                  <div className={`transition-all duration-150 ${focus ? "bg-gray-50 border-l-2 border-accent" : "border-l-2 border-transparent"}`}>
                    <ActiveLink 
                      className={`block px-5 py-2.5 text-sm tracking-wide ${focus ? "text-primary font-semibold" : "text-gray-600 font-medium"}`} 
                      href={href}
                    >
                      {title}
                    </ActiveLink>
                  </div>
                )}
              </MenuItem>
            );
          })}
        </MenuItems>
      </li>
    </Menu>
  );
};

export default DropDownList;
