"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  const pathname = usePathname();

  const isCurrentPath = pathname === href;

  return (
    <Link
      href={href}
      className={` transition duration-500 ease-in-out text-[15px] block ${
        className ?? ""
      } ext-[15px] ${
        isCurrentPath ? "text-blue-400 " : "hover:text-blue-400 text-black   "
      } `}
    >
      {children}
    </Link>
  );
};
export default ActiveLink;
