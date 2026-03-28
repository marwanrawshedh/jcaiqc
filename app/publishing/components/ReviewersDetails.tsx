"use client";
import Select from "../../components/Select";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Button, Input } from "@headlessui/react";
import DeleteButton from "@/app/components/DeleteButton";
const ReviewersDetails = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "reviewers",
  });
  return (
    <div className="flex flex-col items-center gap-5 p-10">
      {fields.map((reviewer, index) => {
        return (
          <>
            <p className="font-bold text-lg ">Reviewer {index + 1}</p>
            <div className="grid sm:grid-cols-2 gap-8 min-w-96 max-w-4xl mx-auto p-6">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Title
                </label>
                <Controller
                  name={`reviewers.${index}.title`}
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Select
                        error={!!error}
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
                <label className="text-gray-800 text-sm mb-2 block">Name</label>
                <Controller
                  name={`reviewers.${index}.name`}
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <Input
                        type="text"
                        className=" w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                        placeholder="Enter reviewer name"
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
                  Orcid
                </label>
                <Controller
                  name={`reviewers.${index}.orcid`}
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <>
                      <textarea
                        className=" w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                        placeholder="Enter Orcid"
                        {...field}
                      />
                      {error && (
                        <p className="text-red-500 text-sm">{error.message}</p>
                      )}
                    </>
                  )}
                />
              </div>

              {!!index && (
                <div className="flex justify-end flex-col   h-full">
                  <DeleteButton
                    onClick={() => remove(index)}
                    text={`Remove reviewer ${index + 1}`}
                  />
                </div>
              )}
            </div>
          </>
        );
      })}
      <div className="w-full flex  justify-center ">
        <Button
          className="py-3.5 px-7 min-w-36 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          onClick={() =>
            append({
              name: "",
              orcid: "",
            })
          }
        >
          Add reviewer
        </Button>
      </div>
    </div>
  );
};
export default ReviewersDetails;
