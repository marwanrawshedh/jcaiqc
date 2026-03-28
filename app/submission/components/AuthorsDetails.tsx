"use client";
import Select from "../../components/Select";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Button, Input } from "@headlessui/react";
import { getAllCountries } from "../../helper/countries/getCountries";
import DeleteButton from "@/app/components/DeleteButton";
const AuthorsDetails = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "authors",
  });
  return (
    <div className="flex flex-col items-center gap-5 p-10">
      <div className="w-full flex  justify-center ">
        <Button
          className="py-3.5 px-7 min-w-36 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          onClick={() =>
            append({
              firstName: "",
              lastName: "",
              email: "",
              orcid: "",
              title: "",
              Country: "",
              affiliation: "",
            })
          }
        >
          Add author
        </Button>
      </div>

      {fields.map((author, index) => (
        <>
          <p className="font-bold text-lg ">Author {index + 1}</p>
          <div className="grid sm:grid-cols-2 gap-8 min-w-96 max-w-4xl mx-auto p-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Title</label>
              <Controller
                name={`authors.${index}.title`}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Select
                      error={!!error}
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
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <Controller
                name={`authors.${index}.email`}
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
                First Name
              </label>
              <Controller
                name={`authors.${index}.firstName`}
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
                name={`authors.${index}.lastName`}
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
              <label className="text-gray-800 text-sm mb-2 block">
                Country
              </label>
              <Controller
                name={`authors.${index}.country`}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Select
                      error={!!error}
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
                Affiliation
              </label>
              <Controller
                name={`authors.${index}.affiliation`}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <textarea
                      className=" w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border border-gray-300"
                      placeholder="Enter Affiliation"
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
                Orcid Link
              </label>
              <Controller
                name={`authors.${index}.orcid`}
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
            {!!index && (
              <div className="flex justify-end flex-col   h-full">
                <DeleteButton
                  onClick={() => remove(index)}
                  text={`Remove author ${index + 1}`}
                />
              </div>
            )}
          </div>
        </>
      ))}
    </div>
  );
};
export default AuthorsDetails;
