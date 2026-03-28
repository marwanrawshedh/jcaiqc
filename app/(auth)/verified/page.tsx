// import Link from "next/link";

export default function Verified() {
  return (
    <div className="flex items-center justify-center flex-1  px-4">
      <div className="max-w-md flex flex-col w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Email Verified!
        </h1>
        <p className="text-gray-700 ">
          Your email has been successfully verified. You can now log in
        </p>
        <a href="https://submit.sciencecommunitypublisher.org/index.php/jcaiqc/login">
          Go to Login
        </a>
      </div>
    </div>
  );
}
