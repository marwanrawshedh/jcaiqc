"use client";
import ActiveLink from "./activeLink";
import { useAuth } from "../providers/authProvider";
import { useRouter } from "next/navigation";

const MobileAuthButtons = () => {
  const { logout, isLoggedIn, role } = useAuth();
  const router = useRouter();

  return (
    <>
      {isLoggedIn && role === "admin" && (
        <li className="max-md:border-b max-md:py-3 ">
          <ActiveLink className="text-white" href={"/control"}>
            Control
          </ActiveLink>
        </li>
      )}
      {!isLoggedIn ? (
        <>
          <li className="max-md:border-b max-md:py-3 ">
            <a
              className="text-white"
              href="https://submit.sciencecommunitypublisher.org/index.php/jcaiqc/user/register"
            >
              Register
            </a>
          </li>
          <li className="max-md:border-b max-md:py-3 ">
            <a
              className="text-white"
              href="https://submit.sciencecommunitypublisher.org/index.php/jcaiqc/login"
            >
              Login
            </a>
          </li>
        </>
      ) : (
        <button
          className=" max-md:py-3 text-white "
          onClick={() => logout(() => router.push("/"))}
        >
          Logout
        </button>
      )}
    </>
  );
};
export default MobileAuthButtons;
