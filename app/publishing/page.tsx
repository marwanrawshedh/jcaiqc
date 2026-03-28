"use client";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Button } from "@headlessui/react";
import { array, object, string, mixed } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Stepper from "../components/Stepper";
import { useState } from "react";
import ArticleDetails from "./components/ArticleDetails";
import AuthorsDetails from "./components/AuthorsDetails";
import References from "./components/References";

import Review from "./components/Review";
import { usePublishArticle } from "../api/submit";
import Loading from "../components/Loading";
import { RequestStatusToast } from "../components/ToasterStatus";
import ReviewersDetails from "./components/ReviewersDetails";
const SUPPORTED_FORMATS = ["application/pdf"];
const items = [
  { title: "Article details" },
  { title: "Authors Details" },
  { title: "reviewers Details" },
  { title: "References " },
  { title: "Review" },
];

export interface Article {
  type: string;
  abstract: string;
  title: string;
  uploadedFile?: FileList;
  keywords: string[];
  authors?: {
    affiliation: string;
    firstName: string;
    lastName: string;
    title: string;
    country: string;
  }[];
  reviewers?: {
    name: string;
    title: string;
    orcid: string;
  }[];
  references: string[];
  volume: string;
  issue: string;
  lastPage: string;
  firstPage: string;
  publicationDate: string;
}

const authorSchema = object().shape({
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),

  affiliation: string().required("affiliation is required"),
  title: string().required("Personal title is required"),
  country: string().required("Country is required"),
  orcid: string().required("orcid link is required"),
});

const reviewerSchema = object().shape({
  name: string().required("Name is required"),
  title: string().required("Personal title is required"),
  orcid: string().required("orcid link is required"),
});

// Schema for the entire form
const schema = object().shape({
  type: string().required("Article Type is required"),
  abstract: string().required("Abstract is required"),
  title: string().required("Manuscript title is required"),
  volume: string().required("Volume is required"),

  issue: string().required("Issue is required"),
  uploadedFile: mixed<FileList>()
    .test("fileRequire", "File is required (.pdf)", (value) => !!value)
    .test("fileType", "Only PDF files (.pdf) are allowed", (value) => {
      return value && value?.[0] && SUPPORTED_FORMATS.includes(value[0].type);
    }),
  authors: array().of(authorSchema).min(1, "At least one author is required"),
  reviewers: array()
    .of(reviewerSchema)
    .min(1, "At least one reviewer is required"),

  keywords: array()
    .transform((val) =>
      Array.isArray(val) ? val.map((v) => (v ?? "").trim()).filter(Boolean) : []
    )
    .of(string().trim().required("keyword text is required"))
    .min(1, "At least one keyword is required")
    .required("keyword text is required"),

  references: array()
    .transform((val) =>
      Array.isArray(val) ? val.map((v) => (v ?? "").trim()).filter(Boolean) : []
    )
    .of(string().trim().required("Reference text is required"))
    .min(1, "At least one reference is required")
    .required("Reference text is required"),

  lastPage: string().required("Last page is required"),
  firstPage: string().required("First page is required"),
  publicationDate: string().required("Publication date is required"),
});
const Publish = () => {
  const { mutate, isPending, isError, isSuccess } = usePublishArticle();
  const [stepper, setStepper] = useState(1);
  const [show, setShow] = useState(false);

  const methods = useForm({
    defaultValues: {
      abstract: "",
      type: "",
      title: "",
      lastPage: "",
      firstPage: "",
      keywords: [""],
      uploadedFile: undefined,
      publicationDate: "",
      authors: [
        {
          firstName: "",
          lastName: "",
          title: "",
          affiliation: "",
          country: "",
        },
      ],
      reviewers: [
        {
          name: "",
          title: "",
          orcid: "",
        },
      ],
      references: [""],
    },
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onNext = () => {
    setStepper((prev) => prev + 1);
  };
  const onPrevious = () => {
    setStepper((prev) => prev - 1);
  };
  const {
    handleSubmit,
    formState: { isValid },
  } = methods;
  const onSubmit: SubmitHandler<Article> = async ({
    abstract,
    issue,
    keywords,
    references,
    title,
    type,
    volume,
    authors,
    reviewers,
    uploadedFile,
    firstPage,
    lastPage,
    publicationDate,
  }) => {
    const formData = new FormData();

    if (uploadedFile && uploadedFile[0]) {
      formData.append("file", uploadedFile[0]);
    } else {
      console.error("No file selected");
      return;
    }

    // Append other form data to the FormData object
    formData.append("title", title);
    formData.append("abstract", abstract);
    formData.append("type", type);
    formData.append("issue", issue);
    formData.append("publicationDate", publicationDate);

    formData.append("lastPage", lastPage);
    formData.append("firstPage", firstPage);
    formData.append("volume", volume);
    formData.append("references", JSON.stringify(references));
    formData.append("authors", JSON.stringify(authors));
    formData.append("reviewers", JSON.stringify(reviewers));
    formData.append("keywords", JSON.stringify(keywords));

    try {
      mutate(formData, {
        onSuccess: () => {
          setShow(true);
        },
        onError: (error) => {
          console.log(error, "error");
          setShow(false);
        },
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col  justify-center items-center flex-1 mt-10 bg-gray-100 p-6 h-min">
      <RequestStatusToast
        message={
          isError
            ? "Published failed"
            : "Article has been published successfully"
        }
        onClose={() => {
          setShow(false);
        }}
        show={show}
        isError={isError}
      />

      <div className="flex flex-col  h-full py-20 ">
        <Stepper stepper={stepper} items={items} />
        <FormProvider {...methods}>
          {stepper == 1 && <ArticleDetails />}
          {stepper == 2 && <AuthorsDetails />}
          {stepper == 3 && <ReviewersDetails />}
          {stepper == 4 && <References />}
          {stepper == 5 && <Review />}

          <div className="!mt-12 flex gap-4 justify-center ">
            {stepper > 1 && (
              <Button
                onClick={onPrevious}
                type="submit"
                className="py-3.5 px-7 min-w-36 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                back
              </Button>
            )}
            <Button
              disabled={
                (stepper === items.length && !isValid) || isPending || isSuccess
              }
              onClick={() => {
                if (stepper !== items.length) {
                  onNext();
                }
                if (stepper === items.length) {
                  handleSubmit(onSubmit)();
                }
              }}
              className={`py-3.5 px-7 ${
                (stepper === items.length && !isValid) || isPending || isSuccess
                  ? "bg-gray-300"
                  : "bg-blue-600 hover:bg-blue-700"
              } min-w-36 text-sm font-semibold tracking-wider rounded-md text-white  focus:outline-none`}
            >
              {stepper === items.length ? "Publish" : "Next"}
            </Button>
          </div>
        </FormProvider>
      </div>
      <Loading
        isPending={isPending}
        text={"Article is publishing wait ....."}
      />
    </div>
  );
};

export default Publish;
