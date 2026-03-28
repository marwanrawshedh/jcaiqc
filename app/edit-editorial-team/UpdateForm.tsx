"use client";
import {
  useForm,
  SubmitHandler,
  FormProvider,
  Controller,
} from "react-hook-form";
import { Button, Input } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, mixed } from "yup";
import Upload from "@/app/components/Upload";
import { useAddEditorialMember } from "@/app/api/editorial-team/submit";
import Loading from "@/app/components/Loading";
import Select from "../components/Select";
import { RequestStatusToast } from "../components/ToasterStatus";
import { useState } from "react";

export interface AddEditorialMemberForm {
  type: string;
  affiliation: string;
  firstName: string;
  lastName: string;
  title: string;
  orcid: string;
  uploadedFile?: FileList;
  email?: string;
  googleLink?: string;
}
const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/webp"];

const schema = object().shape({
  type: string().required("Type is required"),
  title: string().required("Title is required"),
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  affiliation: string().required("affiliation is required"),
  orcid: string().required("Orcid link is required"),
  uploadedFile: mixed<FileList>()
    .test("fileRequire", "File is required (.jpeg/.png)", (value) => !!value)
    .test(
      "fileType",
      "Only doc documents (.jpeg/.png) are allowed",
      (value) => {
        return value && value?.[0] && SUPPORTED_FORMATS.includes(value[0].type);
      }
    ),
  email: string().email(),
  googleLink: string(),
});

const UpdateForm = () => {
  const { mutate, isPending, isError } = useAddEditorialMember();
  const [show, setShow] = useState(false);

  const methods = useForm({
    defaultValues: { email: undefined },
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const {
    handleSubmit,
    formState: { isValid },
    control,
  } = methods;

  const onSubmit: SubmitHandler<AddEditorialMemberForm> = async ({
    uploadedFile,
    affiliation,
    firstName,
    lastName,
    email,
    orcid,
    title,
    type,
    googleLink,
  }) => {
    const formData = new FormData();

    if (uploadedFile && uploadedFile[0]) {
      console.log(uploadedFile[0]);
      formData.append("file", uploadedFile[0]);
    } else {
      console.error("No file selected");
      return;
    }

    // Append other form data to the FormData object
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("affiliation", affiliation);
    formData.append("orcid", orcid);
    formData.append("title", title);
    formData.append("type", type);
    if (email) formData.append("email", email);
    if (googleLink) formData.append("googleLink", googleLink);

    try {
      await mutate(formData);
      setShow(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="flex-1 py-20  flex flex-col gap-8 sm:px-20 px-10">
      <Loading isPending={isPending} text={"Adding"} />
      <RequestStatusToast
        message={
          isError
            ? "Adding failed"
            : "Editor member has been Added successfully"
        }
        onClose={() => {
          setShow(false);
        }}
        show={show}
        isError={isError}
      />
      <FormProvider {...methods}>
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Title</label>
          <Controller
            name={"title"}
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <Select
                  className="border border-gray-300"
                  field={field}
                  options={[
                    { label: "Select Personal Title", value: "" },
                    { label: "prof", value: "prof" },
                    { label: "Dr", value: "dr" },
                    { label: "Mr", value: "mr" },
                    { label: "Miss", value: "miss" },
                    { label: "Mrs", value: "mrs" },
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
          <label className="text-gray-800 text-sm mb-2 block">type</label>
          <Controller
            name={"type"}
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <Select
                  className="border border-gray-300"
                  field={field}
                  options={[
                    { label: "Select member type", value: "" },
                    { label: "Editor in Chief", value: "editorInChief" },
                    { label: "Associate Editor", value: "associateEditor" },
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
        <div className="flex flex-col gap-5 w-full">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">
              First name
            </label>
            <Controller
              name="firstName"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input
                    type="text"
                    className="flex-1 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border border-gray-300"
                    placeholder="
                    Enter first name"
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
          <div>
            <label className="text-gray-800 text-sm mb-2 block">
              Last name
            </label>
            <Controller
              name="lastName"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input
                    type="text"
                    className="flex-1  w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border border-gray-300"
                    placeholder="
                    Enter last name"
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

        <div>
          <label className="text-gray-800 text-sm mb-2 block">Orcid Link</label>
          <Controller
            name={`orcid`}
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input
                  type="text"
                  className=" w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border border-gray-300"
                  placeholder="Enter orcid link"
                  {...field}
                />
                {error && (
                  <p className="text-red-500 text-sm">{error.message}</p>
                )}
              </>
            )}
          />
        </div>
        <div className="sm:min-w-[600px] min-w-[350px] min-h-80">
          <label className="text-gray-800 text-sm mb-2 block">
            Affiliation
          </label>
          <Controller
            name="affiliation"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <textarea
                  {...field}
                  className="block p-2.5 w-full min-h-80 text-sm h-full text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Write your thoughts here..."
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
            name={`email`}
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
            Google Link
          </label>
          <Controller
            name={`googleLink`}
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input
                  type="text"
                  className=" w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border border-gray-300"
                  placeholder="Enter google link"
                  {...field}
                />
                {error && (
                  <p className="text-red-500 text-sm">{error.message}</p>
                )}
              </>
            )}
          />
        </div>
        <Controller
          name="uploadedFile"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <Upload field={field} />

              {error && <p className="text-red-500 text-sm">{error.message}</p>}
            </>
          )}
        />

        <Button
          disabled={!isValid}
          onClick={() => {
            handleSubmit(onSubmit)();
          }}
          className={`py-3.5 px-7 ${
            // !disabledButtonPossibility[
            //   stepper as keyof typeof disabledButtonPossibility
            // ]
            !isValid ? "bg-gray-300" : "bg-blue-600 hover:bg-blue-700"
          } min-w-36 text-sm font-semibold tracking-wider rounded-md text-white  focus:outline-none `}
        >
          Update
        </Button>
      </FormProvider>
    </div>
  );
};
export default UpdateForm;
