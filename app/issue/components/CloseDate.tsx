"use client";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@headlessui/react";
const CloseDate = () => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col items-center gap-5 p-10">
      <label className="text-gray-800 text-sm mb-2 block">Close Date</label>
      <Controller
        name={`closeDate`}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              type="text"
              className=" w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border border-gray-300"
              placeholder="Enter Close Date "
              {...field}
            />
            <p className="text-gray-500 text-sm">
              Formate example: February 2025
            </p>

            {error && <p className="text-red-500 text-sm">{error.message}</p>}
          </>
        )}
      />
    </div>
  );
};
export default CloseDate;
