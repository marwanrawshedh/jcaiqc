"use client";
import { Controller, useFormContext } from "react-hook-form";
const parseKeywords = (text: string): string[] => {
  return text
    .split(/[,\n\r]+/) // comma OR newline
    .map((s) => s.trim())
    .filter(Boolean);
};

const Keywords = () => {
  const { control, setValue, watch } = useFormContext();
  const keywords = watch("keywords") as string[] | undefined;
  return (
    <div className="flex flex-col items-center gap-5 py-10 w-full">
      <div className="w-full max-w-5xl">
        <div className="flex items-center justify-between">
          <label className="text-gray-800 text-sm mb-2 block">
            Keywords (separate with commas or new lines)
          </label>
          <span className="text-xs text-gray-500">
            {keywords?.length ?? 0} keywords
          </span>
        </div>

        <Controller
          name="keywords"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <textarea
                className="w-full text-gray-800 text-sm min-h-40 px-4 py-3.5 rounded-md outline-blue-500 transition-all"
                placeholder={`Example:
cybersecurity, risk auditing, machine learning

or
cybersecurity
risk auditing
machine learning`}
                value={(field.value ?? []).join("\n")} // show as lines
                onChange={(e) => {
                  // IMPORTANT: do NOT parse here
                  field.onChange(e.target.value.split("\n"));
                }}
                onBlur={(e) => {
                  const parsed = parseKeywords(e.target.value);

                  setValue("keywords", parsed, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true,
                  });
                }}
              />

              {error && <p className="text-red-500 text-sm">{error.message}</p>}
            </>
          )}
        />
      </div>
    </div>
  );
};
export default Keywords;
