import { useFormContext } from "react-hook-form";
import { Article } from "../page";
const articleTyp = {
  review: "Review Article",
  research: "Research Article",
};

const Review = () => {
  const { getValues } = useFormContext<Article>();
  const { title, type, abstract, authors, uploadedFile } = getValues();

  return (
    <div className="flex flex-col p-24  gap-8 justify-start">
      <div className="flex flex-col gap-2 flex-1">
        <p className="text-lg font-bold text-nowrap">
          Article Title: <span className="text-base font-normal">{title}</span>
        </p>
        <p className="text-lg font-bold text-nowrap">
          Article Type:{" "}
          <span className="text-base font-normal">
            {articleTyp?.[type as unknown as "review"]}
          </span>
        </p>
        <p className="text-lg font-bold ">
          Abstract : <span className="text-base font-normal">{abstract}</span>
        </p>
      </div>
      <div className="flex flex-col  gap-2 flex-1">
        <p className="text-lg font-bold text-nowrap">Authors :</p>
        {authors?.map((author, i) => {
          return (
            <div className=" px-10" key={i}>
              <p className="text-lg font-bold text-nowrap ">
                Personal title:{" "}
                <span className="text-base font-normal">{author.title}</span>
              </p>
              <p className="text-lg font-bold text-nowrap ">
                Email:{" "}
                <span className="text-base font-normal">{author.email}</span>
              </p>
              <p className="text-lg font-bold text-nowrap">
                First name:{" "}
                <span className="font-normal text-base">
                  {author.firstName}
                </span>
              </p>
              <p className="text-lg font-bold text-nowrap">
                Last name:{" "}
                <span className="font-normal text-base">{author.lastName}</span>
              </p>

              <p className="text-lg font-bold text-nowrap">
                Country:{" "}
                <span className="font-normal text-base">{author.country}</span>
              </p>
              <p className="text-lg font-bold text-nowrap">
                Affiliation:{" "}
                <span className="font-normal text-base">
                  {author.affiliation}
                </span>
              </p>
              <p className="text-lg font-bold text-nowrap">
                Orcid link:{" "}
                <span className="font-normal text-base">{author.orcid}</span>
              </p>

              {i + 1 !== authors.length && (
                <div className="w-full border mt-5" />
              )}
            </div>
          );
        })}
      </div>
      {uploadedFile?.length && (
        <p className="text-lg font-bold text-nowrap">
          Uploaded File:{" "}
          <span className="font-normal text-base">
            {uploadedFile?.[0]?.name}
          </span>
        </p>
      )}
    </div>
  );
};
export default Review;
