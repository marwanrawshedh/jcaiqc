"use client";
import {
  useForm,
  SubmitHandler,
  FormProvider,
  Controller,
} from "react-hook-form";
import { Button, Input } from "@headlessui/react";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Loading from "../../components/Loading";
import { RequestStatusToast } from "../../components/ToasterStatus";
import { useCreateIssue } from "@/app/api/issue/create";
import { useGetVolumes } from "../../api/volumes";
import Select from "../../components/Select";

export interface Issue {
  volume: string;
  issue: string;
}

const schema = object().shape({
  volume: string().required("Volume is required"),
  issue: string().required("issue is required"),
});
const IssueForm = ({ onCloseModal }: { onCloseModal: () => void }) => {
  const [show, setShow] = useState(false);
  const { data: volumes } = useGetVolumes();

  const { mutate, isPending, isError } = useCreateIssue();

  const methods = useForm({
    defaultValues: {
      volume: "",
      issue: "",
    },

    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<Issue> = ({
    volume: volumeId,
    issue: issueNumber,
  }) => {
    mutate(
      { volumeId, issueNumber },
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
      <Loading isPending={isPending} text={"Creating Volume wait ....."} />
      <RequestStatusToast
        message={
          isError
            ? "Creating Volume failed"
            : "Volume has been Created successfully"
        }
        onClose={() => {
          setShow(false);
        }}
        show={show}
        isError={isError}
      />
      <div className=" flex gap-4 justify-center "></div>
      <div className="flex flex-col  h-full py-10 flex-1 ">
        <FormProvider {...methods}>
          <div className="flex flex-col gap-5">
            {/* <Countries /> */}
            <div>
              <label className="text-gray-800  mb-2 block font-bold">
                {" "}
                volume
              </label>
              <Controller
                name="volume"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Select
                      field={field}
                      className="border-gray-300 border"
                      options={[
                        { label: "Select volume", value: "" },
                        ...(volumes ?? []),
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
            <div className="flex flex-col items-center gap-2 ">
              <label className="text-gray-800  mb-2 block font-bold">
                Issue
              </label>
              <Controller
                name={`issue`}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Input
                      type="text"
                      className=" w-96 text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border border-gray-300"
                      placeholder="Enter issue"
                      {...field}
                    />
                    <p className="text-gray-500 text-sm">Example: 1, 2, 3</p>
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
              disabled={!isValid || isPending}
              onClick={() => {
                handleSubmit(onSubmit)();
              }}
              className={`py-3.5 px-7 min-w-36 text-sm font-semibold tracking-wider rounded-md text-white  focus:outline-none ${
                !isValid || isPending
                  ? "bg-gray-300"
                  : "bg-blue-600 hover:bg-blue-700"
              } `}
            >
              Create
            </Button>
          </div>
        </FormProvider>
      </div>
    </>
  );
};

export default IssueForm;
