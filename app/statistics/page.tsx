"use client";
import {
  useForm,
  SubmitHandler,
  FormProvider,
  Controller,
} from "react-hook-form";
import { Button, Input } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, number } from "yup";
import { useUpdateCitationNumber } from "@/app/api/statistics";
import Loading from "@/app/components/Loading";

const schema = object().shape({
  googleCitationNumber: number()
    .typeError("This Filed Must be Number")
    .required("Citation Number is Required"),
  scopusCitationNumber: number()
    .typeError("This Filed Must be Number")
    .required("Citation Number is Required"),
  authors: number()
    .typeError("This Filed Must be Number")
    .required("Authors Number is Required"),
  authorsDistribution: number()
    .typeError("This Filed Must be Number")
    .required("Authors Distribution Number is Required"),
});

const Statistics = () => {
  const { mutate, isPending } = useUpdateCitationNumber();

  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const {
    handleSubmit,
    formState: { isValid },
    control,
  } = methods;

  const onSubmit: SubmitHandler<{
    googleCitationNumber: number;
    scopusCitationNumber: number;

    authors: number;
    authorsDistribution: number;
  }> = async ({
    googleCitationNumber,
    scopusCitationNumber,
    authorsDistribution,
    authors,
  }) => {
    try {
      mutate({
        googleCitationNumber,
        scopusCitationNumber,
        authorsDistribution,
        authors,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="flex-1 py-20  flex flex-col gap-8 sm:px-20 px-10">
      <Loading isPending={isPending} text={"Updating"} />
      <FormProvider {...methods}>
        <div className="flex flex-col gap-5 w-full">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">
              Scopus Citations Number
            </label>
            <Controller
              name="scopusCitationNumber"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input
                    type="text"
                    className="flex-1 border solid w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="
                    Enter Citation Number"
                    {...field}
                  />
                  {error && (
                    <p className="text-red-500 text-sm ">
                      {" "}
                      {error && error.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className="w-full border mt-5" />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">
              Google scholar Citations Number
            </label>
            <Controller
              name="googleCitationNumber"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input
                    type="text"
                    className="flex-1 border solid w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="
                    Enter Citation Number"
                    {...field}
                  />
                  {error && (
                    <p className="text-red-500 text-sm ">
                      {" "}
                      {error && error.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className="w-full border mt-5" />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">
              Authors Number
            </label>
            <Controller
              name="authors"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input
                    type="text"
                    className="flex-1 border solid w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="
                    Enter Authors Number"
                    {...field}
                  />
                  {error && (
                    <p className="text-red-500 text-sm ">
                      {" "}
                      {error && error.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className="w-full border mt-5" />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">
              Authors Distribution
            </label>
            <Controller
              name="authorsDistribution"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input
                    type="text"
                    className="flex-1 border solid w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="
                    Enter Authors Distribution Number"
                    {...field}
                  />
                  {error && (
                    <p className="text-red-500 text-sm ">
                      {" "}
                      {error && error.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div className="w-full border mt-5" />
        </div>
        <Button
          disabled={!isValid}
          onClick={() => {
            handleSubmit(onSubmit)();
          }}
          className={`py-3.5 px-7 ${
            !isValid ? "bg-gray-300" : "bg-blue-600 hover:bg-blue-700"
          } min-w-36 text-sm font-semibold tracking-wider rounded-md text-white  focus:outline-none`}
        >
          Update
        </Button>
      </FormProvider>
    </div>
  );
};
export default Statistics;
