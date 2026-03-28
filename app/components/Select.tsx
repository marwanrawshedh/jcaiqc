import { ControllerRenderProps } from "react-hook-form";

type SelectProps = {
  options?: { label: string; value: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any, any>;
  className?: string;
  placeholder?: string;
  loading?: boolean;

  // injected by FieldShell
  error?: boolean;
  describedById?: string;
};

const Select = ({
  options = [],
  field,
  className,
  placeholder,
  loading,
  error,
  describedById,
}: SelectProps) => {
  const isDisabled = Boolean(field.disabled) || loading;

  return (
    <div className={["relative", className].filter(Boolean).join(" ")}>
      <select
        {...field}
        disabled={isDisabled}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedById}
        className={[
          "w-full appearance-none bg-transparent",
          "text-sm text-slate-900",
          "py-1 pl-1 pr-10",
          "outline-none",
          isDisabled ? "text-slate-400 cursor-not-allowed" : "cursor-pointer",
        ].join(" ")}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {loading && <option value="">Loading…</option>}

        {!loading &&
          options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
      </select>

      {/* Chevron */}
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Select;
