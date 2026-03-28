import { ControllerRenderProps } from "react-hook-form";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UploadProps = { field: ControllerRenderProps<any, any> };

const Upload = ({ field: { onBlur, onChange } }: UploadProps) => {
  return (
    <div className="font-[sans-serif]  w-full">
      <label className="text-base text-gray-500 font-semibold mb-2 block">
        Upload file
      </label>
      <input
        className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
        type="file"
        onBlur={onBlur}
        onChange={(e) => onChange(e?.target?.files)}
      />
      <p className="text-xs text-gray-400 mt-2">
        Only word documents are Allowed.
      </p>
    </div>
  );
};
export default Upload;
