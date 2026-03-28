"use client";

import { Controller, useFormContext } from "react-hook-form";

const parseReferences = (text: string): string[] => {
  return text
    .split(/\[\d+\]/) // split on [1], [22], [42], etc.
    .map((s) => s.trim())
    .filter(Boolean);
};

const References = () => {
  const { control, setValue, watch } = useFormContext();

  // optional: live count
  const refs = watch("references") as string[] | undefined;

  return (
    <div className="flex flex-col items-center gap-5 py-10 w-full">
      <div className="w-full max-w-5xl">
        <div className="flex items-center justify-between">
          <label className="text-gray-800 text-sm mb-2 block">
            References (one per line)
          </label>
          <span className="text-xs text-gray-500">
            {refs?.length ?? 0} references
          </span>
        </div>

        <Controller
          // IMPORTANT: still bind to "references" (array field)
          name="references"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <>
              <textarea
                className="w-full text-gray-800 text-sm min-h-80 min-w-[800px] px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder={`Paste references here, one per [number].\n\nExample:\n[1] Smith, J. (2024)...\n[22] Doe, A. (2023)...`}
                value={(field.value ?? []).join("\n")}
                onChange={(e) => {
                  // Let user type freely (still keep it as text here)
                  // We'll convert to array onBlur
                  const text = e.target.value;
                  setValue("references", text.split(/\r?\n/), {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: false,
                  });
                }}
                onBlur={(e) => {
                  const parsed = parseReferences(e.target.value);

                  setValue("references", parsed, {
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
export default References;
