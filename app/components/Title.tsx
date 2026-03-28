const Title = ({ title }: { title: string }) => {
  return (
    <div className=" items-center flex sm:flex-row flex-col py-10 ">
      <div className="border-[2px] rounded border-[#2C3E50] border-solid h-[1px] flex-1 sm:block hidden " />
      <h1 className="mx-5 text-2xl font-bold text-[#2C3E50]">{title}</h1>
      <div className="border-[2px] rounded border-[#2C3E50] border-solid h-[1px] flex-1 w-full sm:mt-0 mt-2" />
    </div>
  );
};
export default Title;
