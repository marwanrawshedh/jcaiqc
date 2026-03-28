"use client";
import { useFormContext, Controller } from "react-hook-form";
import Select from "../../components/Select";
import Upload from "../../components/Upload";

import { Input } from "@headlessui/react";
export const articleTypeOption = [
  { label: "Select article type", value: "" },
  { label: "Review Article", value: "review" },
  { label: "Research Article", value: "research" },
];
const ArticleDetails = () => {
  const { control } = useFormContext();
  return (
    <div className="flex flex-col max-w-96 m-auto items-center gap-5 py-5">
      <div className="flex flex-col  gap-5 w-full">
        <div>
          <label className="text-gray-800 text-sm mb-2 block">
            Manuscript title
          </label>
          <Controller
            name="title"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <Input
                  type="text"
                  className="flex-1  w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all  border border-gray-300"
                  placeholder="
                  Enter manuscript title"
                  {...field}
                  onChange={(e) => field.onChange(e?.target?.value)}
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
            {" "}
            Article Type
          </label>
          <Controller
            name="type"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <>
                <Select
                  error={!!error}
                  className="border border-gray-300"
                  field={field}
                  options={articleTypeOption}
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
      <div className="sm:min-w-[600px] min-w-[350px] min-h-80">
        <label className="text-gray-800 text-sm mb-2 block">Abstract</label>
        <Controller
          name="abstract"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <textarea
                {...field}
                className="block p-2.5 w-full min-h-80 text-sm h-full text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Write your thoughts here..."
              />

              {error && <p className="text-red-500 text-sm">{error.message}</p>}
            </>
          )}
        />
      </div>
    </div>
  );
};
export default ArticleDetails;
