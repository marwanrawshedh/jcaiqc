"use client";
import { useAuth } from "../providers/authProvider";
import Link from "next/link";

const AuthButtons = () => {
  const { isLoggedIn, role } = useAuth();

  return (
    <>
      {isLoggedIn && role === "user" ? (
        <div className="flex-1 flex justify-end">
          <Link
            className="text-nowrap rounded-md bg-slate-50 text-blue-500 px-4 py-2 font-medium  transition duration-500 ease-in-out  hover:text-blue-400"
            href="my-submissions"
          >
            My Submissions
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default AuthButtons;
