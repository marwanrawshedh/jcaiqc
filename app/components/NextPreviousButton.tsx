type NextPreviousProps = {
  onNext: () => void;
  onPrev: () => void;
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
};

const NextPreviousButton = ({
  onNext,
  onPrev,
  isNextDisabled,
  isPrevDisabled,
}: NextPreviousProps) => {
  return (
    <div className="font-[sans-serif] flex mx-auto border divide-x-2 border-black rounded w-max overflow-hidden">
      {isPrevDisabled && (
        <button
          onClick={onPrev}
          className="px-4 py-2.5 flex items-center justify-center shrink-0 cursor-pointer text-sm font-semibold text-gray-800 hover:bg-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 fill-current mr-3"
            viewBox="0 0 55.753 55.753"
          >
            <path
              d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
              data-original="#000000"
            />
          </svg>
          Previous
        </button>
      )}
      {isNextDisabled && (
        <button
          onClick={onNext}
          className="px-4 py-2.5 flex items-center justify-center shrink-0 cursor-pointer text-sm font-semibold text-gray-800 hover:bg-gray-50"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 fill-current ml-3 rotate-180"
            viewBox="0 0 55.753 55.753"
          >
            <path
              d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
              data-original="#000000"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
export default NextPreviousButton;
