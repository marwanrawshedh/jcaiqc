"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button } from "@headlessui/react";
import { Input } from "@headlessui/react";
import { UserNameLogo } from "../../assets/logos/UserName";

interface IFormInput {
  email: string;
}
const ForgetPassword = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <div className="h-full bg-gray-50 font-[sans-serif] flex flex-col items-center justify-center py-6 px-4">
      <div className="max-w-md w-full">
        {/* <img
          src="https://readymadeui.com/readymadeui.svg"
          alt="logo"
          className="w-40 mb-8 mx-auto block"
        /> */}

        <div className="p-8 rounded-2xl bg-white shadow">
          <h2 className="text-gray-800 text-center text-2xl font-bold">
            Sign in
          </h2>
          <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <div className="relative flex items-center">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="text"
                      required
                      className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                      placeholder="Enter email"
                      {...field}
                    />
                  )}
                />
                <UserNameLogo />
              </div>
            </div>

            <div className="!mt-8">
              <Button
                type="submit"
                className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
