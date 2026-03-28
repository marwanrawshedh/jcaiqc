const Loading = ({ isPending, text }: { isPending: boolean; text: string }) => {
  return (
    <>
      {isPending && (
        <div className="flex w-full h-full">
          <div className="w-full h-full absolute bg-slate-600 top-0 left-0 bg-opacity-45  z-10">
            <div className="flex flex-col gap-6 items-center justify-center h-full ">
              <p className="text-white text-xl font-bold">{text}</p>
              <div className="relative">
                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
