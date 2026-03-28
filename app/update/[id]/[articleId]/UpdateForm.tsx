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
import { useUpdateArticle } from "@/app/api/update";
import Loading from "@/app/components/Loading";
const SUPPORTED_FORMATS = ["application/pdf"];

const schema = object().shape({
  doi: string().required("Manuscript Doi is required"),
  citation: string().required("Citation description is required"),

  uploadedFile: mixed<FileList>()
    .test("fileRequire", "File is required (.pdf)", (value) => !!value)
    .test("fileType", "Only doc documents (.pdf) are allowed", (value) => {
      return value && value?.[0] && SUPPORTED_FORMATS.includes(value[0].type);
    }),
});

const UpdateForm = ({ articleId }: { articleId: string; id: string }) => {
  const { mutate, isPending } = useUpdateArticle();

  const methods = useForm({
    defaultValues: {
      doi: "",
      citation: "",
      uploadedFile: undefined,
    },

    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const {
    handleSubmit,
    formState: { isValid },
    control,
  } = methods;

  const onSubmit: SubmitHandler<{
    doi: string;
    uploadedFile?: FileList;
    citation: string;
  }> = async ({ doi, citation, uploadedFile }) => {
    const formData = new FormData();

    if (uploadedFile && uploadedFile[0]) {
      formData.append("file", uploadedFile[0]);
    } else {
      console.error("No file selected");
      return;
    }

    // Append other form data to the FormData object
    formData.append("doi", doi);
    formData.append("citation", citation);

    try {
      mutate({ data: formData, id: articleId });
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
              Manuscript Doi
            </label>
            <Controller
              name="doi"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input
                    type="text"
                    className="flex-1  w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                    placeholder="
                    Enter doi title"
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
        <div className="sm:min-w-[600px] min-w-[350px] min-h-80">
          <label className="text-gray-800 text-sm mb-2 block">
            How to Cite the Article
          </label>
          <Controller
            name="citation"
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
          } min-w-36 text-sm font-semibold tracking-wider rounded-md text-white  focus:outline-none`}
        >
          Update
        </Button>
      </FormProvider>
    </div>
  );
};
export default UpdateForm;
