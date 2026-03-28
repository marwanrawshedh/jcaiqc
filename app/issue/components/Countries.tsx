"use client";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@headlessui/react";
import DeleteButton from "@/app/components/DeleteButton";
const Countries = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "authorCountries",
  });
  return (
    <div className="flex flex-col  items-center   gap-6 ">
      <div className="flex flex-col items-center  flex-wrap gap-8">
        {fields.map((Country, index) => (
          <div className="flex flex-1  flex-col items-center" key={index}>
            <p className="font-bold  ">Country {index + 1}</p>
            <div className="flex    ">
              <Controller
                name={`authorCountries.${index}`}
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <input
                      className="w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all border border-gray-300"
                      placeholder="Enter Country"
                      {...field}
                    />
                    {error && (
                      <p className="text-red-500 text-sm">{error.message}</p>
                    )}
                  </>
                )}
              />

              {!!index && (
                <div className="flex justify-end flex-col h-full">
                  <DeleteButton onClick={() => remove(index)} text={` `} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <Button
        className="py-3.5 px-7 max-w-40 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
        onClick={() => append("")}
      >
        Add Country
      </Button>
    </div>
  );
};
export default Countries;
