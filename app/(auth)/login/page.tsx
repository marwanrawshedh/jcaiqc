"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button, Input } from "@headlessui/react";
import { UserNameLogo } from "../../assets/logos/UserName";
import { useLogin } from "../../api/login";
import { useAuth } from "../../providers/authProvider";
import { useRouter } from "next/navigation";
import { RequestStatusToast } from "@/app/components/ToasterStatus";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
interface IFormInput {
  password: string;
  email: string;
}
const Login = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      password: "",
      email: "",
    },
  });

  const { mutate, isPending, isError } = useLogin();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const recaptchaToken = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    if (!recaptchaToken) {
      alert("reCAPTCHA verification failed");
      return;
    }
    mutate(
      { ...data, recaptchaToken },
      {
        onSuccess: ({ token, role }) => {
          login(token, role);
          router.push("/");
        },
        onError: (error) => {
          setShow(true);
          console.log(error, "error");
        },
      }
    );
  };
  return (
    <div className="h-full w-full font-[sans-serif] flex flex-col items-center justify-center py-6 px-4">
      {!isPending && (
        <RequestStatusToast
          message={
            isError ? "wrong password or username " : "signed in successfully"
          }
          onClose={() => {
            setShow(false);
          }}
          show={show}
          isError={isError}
        />
      )}
      <div className="p-8 mt-12 rounded-2xl bg-white shadow w-full sm:w-96">
        <h2 className="text-gray-800 text-center text-2xl font-bold">
          Sign in
        </h2>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Email</label>
            <div className="relative flex  z-0 items-center">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    required
                    className="w-full z-0 text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter email"
                    {...field}
                  />
                )}
              />
              <UserNameLogo />
            </div>
          </div>

          <div>
            <label className="text-gray-800 text-sm mb-2 block">Password</label>
            <div className=" flex items-center">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    type="password"
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter password"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            size="invisible"
            ref={recaptchaRef}
          />
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      for="remember-me"
                      className="ml-3 block text-sm text-gray-800"
                    >
                      Remember me
                    </label>
                  </div> */}
            {/* <div className="text-sm">
              <Link
                href="forget-password"
                className="text-blue-600 hover:underline font-semibold"
              >
                Forgot your password?
              </Link>
            </div> */}
          </div>

          <div className="!mt-8">
            <Button
              disabled={isPending}
              type="submit"
              className={`w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white focus:outline-none
               ${isPending ? "bg-gray-300" : "bg-blue-600 hover:bg-blue-700"} `}
            >
              Sign in
            </Button>
          </div>
          <p className="text-gray-800 text-sm !mt-8 text-center">
            Don&apos;t have an account?{" "}
            <a
              className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
              href="https://submit.sciencecommunitypublisher.org/index.php/jcaiqc/user/register"
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
