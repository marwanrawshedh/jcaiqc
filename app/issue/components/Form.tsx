"use client";
import {
  useForm,
  SubmitHandler,
  FormProvider,
  Controller,
} from "react-hook-form";
import { Button, Input, Textarea } from "@headlessui/react";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Loading from "../../components/Loading";
import { RequestStatusToast } from "../../components/ToasterStatus";
import {
  useAddAuthorCounties,
  useAssignCurrentIssue,
} from "@/app/api/issue/add";
// import Countries from "./Countries";

export interface Issue {
  closeDate: string;
  authorCountries: string;
  description: string;
}

const schema = object().shape({
  closeDate: string().required("Close Date is required"),
  authorCountries: string().required("Author Countries are required"),
  description: string().required("Description is required"),
});
const IssueForm = ({
  id,
  onCloseModal,
}: {
  id: string;
  onOpenModal?: () => void;
  onCloseModal: () => void;
}) => {
  const [show, setShow] = useState(false);
  const { mutate, isPending, isError } = useAddAuthorCounties();
  const {
    mutate: mutateAssignCurrentIssue,
    isPending: isPendingAssignCurrentIssue,
  } = useAssignCurrentIssue();

  const methods = useForm({
    defaultValues: {
      closeDate: "",
      authorCountries: "",
      description: "",
    },

    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<Issue> = ({
    closeDate,
    authorCountries,
    description,
  }) => {
    mutate(
      { data: { closeDate, authorCountries, description }, id },
      {
        onSuccess: () => {
          setShow(true);
          onCloseModal();
        },
        onError: (error) => {
          console.log(error, "error");
          setShow(false);
          onCloseModal();
        },
      }
    );
  };

  const {
    handleSubmit,
    formState: { isValid },
    control,
  } = methods;

  return (
    <>
      <Loading
        isPending={isPending || isPendingAssignCurrentIssue}
        text={"issue is updating wait ....."}
      />
      <RequestStatusToast
        message={
          isError ? "Updating failed" : "Issue has been updated successfully"
        }
        onClose={() => {
          setShow(false);
        }}
        show={show}
        isError={isError}
      />
      <div className="!mt-12 flex gap-4 justify-center ">
        <Button
          disabled={isPending || isPendingAssignCurrentIssue}
          onClick={() => {
            mutateAssignCurrentIssue(
              { id },
              {
                onSuccess: () => {
                  setShow(true);
                  onCloseModal();
                },
                onError: (error) => {
                  console.log(error, "error");
                  setShow(false);
                  onCloseModal();
                },
              }
            );
          }}
          className={`cursor-pointer py-3.5 px-7 min-w-36 text-sm font-semibold tracking-wider rounded-md text-white  focus:outline-none ${
            isPending || isPendingAssignCurrentIssue
              ? "bg-gray-300"
              : "bg-blue-600 hover:bg-blue-700"
          } `}
        >
          Assign as a current issue
        </Button>
      </div>
      <div className="bg-gray-500 w-full h-0.5 mt-4" />
      <div className="flex flex-col  h-full py-10 flex-1 ">
        <FormProvider {...methods}>
          <div className="flex flex-col gap-5">
            {/* <Countries /> */}
            <div className="flex flex-col items-center gap-2 ">
              <label className="text-gray-800  mb-2 block font-bold">
                Countries
              </label>
              <Controller
                name={`authorCountries`}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input
                      type="text"
                      className=" w-96 text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border border-gray-300"
                      placeholder="Enter Countries "
                      {...field}
                    />
                    <p className="text-gray-500 text-sm">
                      Example: United Kingdom, Jordan, Malaysia,
                    </p>
                    {error && (
                      <p className="text-red-500 text-sm">{error.message}</p>
                    )}
                  </>
                )}
              />
            </div>
            <div className="flex flex-col items-center gap-2 ">
              <label className="text-gray-800  mb-2 block font-bold">
                Close Date
              </label>
              <Controller
                name={`closeDate`}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input
                      type="text"
                      className=" w-96 text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border border-gray-300"
                      placeholder="Enter Close Date "
                      {...field}
                    />
                    <p className="text-gray-500 text-sm ">
                      Formate example: February 2025
                    </p>

                    {error && (
                      <p className="text-red-500 text-sm">{error.message}</p>
                    )}
                  </>
                )}
              />
            </div>
            <div className="flex flex-col items-center gap-2 ">
              <label className="text-gray-800  mb-2 block font-bold">
                Description
              </label>
              <Controller
                name={`description`}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Textarea
                      className=" w-96 text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border border-gray-300"
                      placeholder="Enter Issue Description"
                      {...field}
                    />
                    <p className="text-gray-500 text-sm"></p>
                    {error && (
                      <p className="text-red-500 text-sm">{error.message}</p>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          <div className="!mt-12 flex gap-4 justify-center ">
            <Button
              disabled={!isValid || isPending || isPendingAssignCurrentIssue}
              onClick={() => {
                handleSubmit(onSubmit)();
              }}
              className={`py-3.5 px-7 min-w-36 text-sm font-semibold tracking-wider rounded-md text-white  focus:outline-none ${
                !isValid || isPending
                  ? "bg-gray-300"
                  : "bg-blue-600 hover:bg-blue-700"
              } `}
            >
              Update
            </Button>
          </div>
        </FormProvider>
      </div>
    </>
  );
};

export default IssueForm;
