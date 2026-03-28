"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button } from "@headlessui/react";
import Select from "../../components/Select";
import { Input } from "@headlessui/react";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegister } from "@/app/api/regester";
import { getAllCountries } from "@/app/helper/countries/getCountries";
import Loading from "@/app/components/Loading";
interface IFormInput {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  country: string;
  confirmPassword: string;
}

const Register = () => {
  const { mutate, isSuccess, isPending, isError } = useRegister();
  const schema = object().shape({
    firstName: string().required("First name is required"),
    lastName: string().required("Last name is required"),
    email: string().email("Invalid email").required("Email is required"),
    country: string().required("Country is required"),
    password: string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        "Password must contain at least 8 characters, including upper case, lower case letters and numbers"
      ),
    confirmPassword: string()
      .required("Confirm password is required")
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
  });
  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      email: "",
      country: "",
    },
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    mutate(data, {
      onError: () => {
        reset();
      },
      onSuccess: () => {
        reset();
      },
    });
  };
  return (
    <div className="flex flex-col  h-full ">
      <Loading isPending={isPending} text="Registering in progress ..." />
      <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
        <div className="text-center mb-16">
          <h4 className="text-gray-800 text-base font-semibold mt-6">
            Sign up into your account
          </h4>
        </div>

        <div className="mb-6 text-center">
          {isSuccess && (
            <div className="bg-green-100 text-green-800 p-4 rounded-md">
              ✅ Registration successful. Please check your email to verify your
              account.
            </div>
          )}
          {isError && (
            <div className="bg-red-100 text-red-700 p-4 rounded-md">
              ❌ Registration failed. Please try again later or check your
              input.
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid sm:grid-cols-2 gap-8 min-w-96">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                First Name
              </label>
              <Controller
                name="firstName"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input
                      type="text"
                      className=" w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border border-gray-300"
                      placeholder="Enter first name"
                      {...field}
                    />
                    {error && (
                      <p className="text-red-500 text-sm">{error.message}</p>
                    )}
                  </>
                )}
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Last Name
              </label>
              <Controller
                name="lastName"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input
                      type="text"
                      className=" w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border border-gray-300"
                      placeholder="Enter last name"
                      {...field}
                    />
                    {error && (
                      <p className="text-red-500 text-sm">{error.message}</p>
                    )}
                  </>
                )}
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input
                      type="text"
                      className=" w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border border-gray-300"
                      placeholder="Enter email"
                      {...field}
                    />
                    {error && (
                      <p className="text-red-500 text-sm ">
                        {" "}
                        {error && error.message}
                      </p>
                    )}
                    <p className="text-sm text-gray-400">email@domain.ex</p>
                  </>
                )}
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Country
              </label>
              <Controller
                name={`country`}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Select
                      className="border border-gray-300"
                      field={field}
                      options={[
                        { label: "Select country", value: "" },
                        ...getAllCountries().map(({ name, code }) => ({
                          label: name,
                          value: code,
                        })),
                      ]}
                    />
                    {error && (
                      <p className="text-red-500 text-sm ">
                        {error && error.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <input
                      type="password"
                      className=" w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border border-gray-300"
                      placeholder="Enter password"
                      {...field}
                    />
                    {error && (
                      <p className="text-red-500 text-sm ">
                        {" "}
                        {error && error.message}
                      </p>
                    )}
                    <p className="text-sm text-gray-400">
                      Password must be at least 8 characters long and include
                      uppercase letters, lowercase letters, and numbers.{" "}
                    </p>
                  </>
                )}
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Confirm Password
              </label>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <input
                      type="password"
                      className=" w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border border-gray-300"
                      placeholder="Enter confirm password"
                      {...field}
                    />
                    {error && (
                      <p className="text-red-500 text-sm">{error.message}</p>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          <div className="!mt-12 flex justify-center">
            <Button
              disabled={!isValid || isPending}
              type="submit"
              className={`py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white  focus:outline-none ${
                isValid ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400"
              }`}
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
