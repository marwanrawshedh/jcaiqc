"use client";
import { useAuth } from "../providers/authProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButtons = () => {
  const { logout, isLoggedIn, role } = useAuth();
  const router = useRouter();

  return (
    <div className="sm:flex gap-5 items-center font-semibold text-[15px] border-none outline-none hidden">
      {isLoggedIn ? (
        <button onClick={() => logout(() => router.push("/"))}>Logout</button>
      ) : (
        <>
          <a
            className="text-black hover:text-blue-600 shadow-lg rounded-full py-2 px-4"
            href="https://submit.sciencecommunitypublisher.org/index.php/jcaiqc/login"
          >
            Login
          </a>

          <a
            className="px-4 py-2 text-sm  font-bold text-white border-2  border-blue-600  bg-blue-600  transition-all ease-in-out duration-300 hover:bg-transparent hover:text-blue-600 shadow-lg rounded-full"
            href="https://submit.sciencecommunitypublisher.org/index.php/jcaiqc/user/register"
          >
            Register
          </a>
        </>
      )}
      {isLoggedIn && role === "admin" ? (
        <Link href={"/control"}>Control</Link>
      ) : (
        <></>
      )}
    </div>
  );
};
export default AuthButtons;
