const statusBgColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-blue-600";
    case "Pending":
      return "bg-gray-300";
    default:
      return "bg-slate-500";
  }
};

const statusTextColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "text-blue-600";
    case "Pending":
      return "text-gray-300";
    default:
      return "text-slate-500";
  }
};
const Stepper = ({
  stepper,
  items,
}: {
  stepper: number;
  items: { title: string }[];
}) => {
  return (
    <div className="flex items-start max-w-screen-lg mx-auto min-w-96">
      {items.map((item, index) => {
        const status =
          index === stepper - 1
            ? "In progress"
            : index > stepper - 1
            ? "Pending"
            : "Completed";
        return (
          <div key={index} className="w-full">
            <div className="flex items-center w-full ">
              <div
                className={`w-7 h-7 shrink-0 mx-[-1px] ${statusBgColor(status)}
                  flex items-center justify-center rounded-full`}
              >
                <span className="text-sm text-white font-bold">
                  {index + 1}
                </span>
              </div>
              {items.length - 1 !== index && (
                <div
                  className={`w-full h-[3px] mx-4 rounded-lg ${statusBgColor(
                    status
                  )}`}
                ></div>
              )}
            </div>
            <div className={`mt-2 mr-4 ${statusTextColor(status)} `}>
              <h6 className={`text-sm font-bold text-nowrap`}>{item.title}</h6>
              <p className="text-xs text-nowrap">{status}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Stepper;
