export default function VerificationFailed() {
  return (
    <>
      <div className=" flex items-center justify-center flex-1 px-4">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold text-red-700 mb-4">
            Verification Failed
          </h1>
          <p className="text-gray-700">
            We couldn’t verify your email. The link may have expired or is
            invalid.
          </p>
        </div>
      </div>
    </>
  );
}
