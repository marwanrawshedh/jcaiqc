"use client";
import {
  useForm,
  SubmitHandler,
  FormProvider,
  FieldError,
} from "react-hook-form";
import { Button } from "@headlessui/react";
import { array, object, string, mixed } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Stepper from "../components/Stepper";
import { useState } from "react";
import ArticleDetails from "./components/ArticleDetails";
import AuthorsDetails from "./components/AuthorsDetails";
import Review from "./components/Review";
import { useSubmitArticle } from "../api/article/submit";
import Loading from "../components/Loading";
import { RequestStatusToast } from "../components/ToasterStatus";
const SUPPORTED_FORMATS = [
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
];
const items = [
  { title: "Article details" },
  { title: "Authors Details" },
  { title: "Review" },
];
const isFieldValid = (
  field: boolean | undefined,
  fieldError: FieldError | undefined
) => field && !fieldError;
export interface Article {
  type: string;
  abstract: string;
  title: string;
  uploadedFile?: FileList;
  authors?: {
    firstName: string;
    lastName: string;
    title: string;
    country: string;
    affiliation: string;
    email: string;
    orcid: string;
  }[];
}

const authorSchema = object().shape({
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  title: string().required("Personal title is required"),
  affiliation: string().required("Affiliation is required"),
  country: string().required("Country is required"),
  orcid: string().required("Orcid link is required"),
  email: string().email("Provide a valid email").required("Email is required"),
});

const schema = object().shape({
  type: string().required("Article Type is required"),
  abstract: string().required("Abstract is required"),
  title: string().required("Manuscript title is required"),

  uploadedFile: mixed<FileList>()
    .test("fileRequire", "File is required", (value) => !!value?.length)
    .test(
      "fileType",
      "Only Word documents (.doc, .docx) are allowed",
      (value) => value?.[0] && SUPPORTED_FORMATS.includes(value[0].type)
    ),
  authors: array().of(authorSchema).min(1, "At least one author is required"),
});
const Submission = () => {
  const [stepper, setStepper] = useState(1);
  const [show, setShow] = useState(false);
  const { mutate, isPending, isError } = useSubmitArticle();
  const methods = useForm({
    defaultValues: {
      abstract: "",
      type: "",
      title: "",
      uploadedFile: undefined,
      authors: [
        {
          firstName: "",
          lastName: "",
          title: "",
          affiliation: "",
          country: "",
          orcid: "",
          email: "",
        },
      ],
    },
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<Article> = ({
    abstract,
    title,
    type,
    authors,
    uploadedFile,
  }) => {
    const formData = new FormData();

    if (uploadedFile && uploadedFile[0]) {
      formData.append("file", uploadedFile[0]);
      console.log(uploadedFile[0]);
    } else {
      console.error("No file selected");
      return;
    }

    formData.append("title", title);
    formData.append("abstract", abstract);
    formData.append("type", type);
    formData.append("authors", JSON.stringify(authors));
    mutate(formData, {
      onSuccess: () => {
        setShow(true);
      },
      onError: (error) => {
        console.log(error, "error");
        setShow(false);
      },
    });
  };
  const onNext = () => {
    setStepper((prev) => prev + 1);
  };
  const onPrevious = () => {
    setStepper((prev) => prev - 1);
  };
  const {
    handleSubmit,
    formState: { dirtyFields, errors, isValid },
  } = methods;
  const { abstract, type, title, uploadedFile } = dirtyFields;
  const {
    abstract: abstractErrors,
    title: titleErrors,
    type: typeErrors,
    uploadedFile: uploadedFileErrors,
  } = errors;
  const fields = {
    title: isFieldValid(title, titleErrors),
    abstract: isFieldValid(abstract, abstractErrors),
    type: isFieldValid(type, typeErrors),
    uploadedFile: isFieldValid(uploadedFile, uploadedFileErrors),
  };

  const firstForm =
    fields.type && fields.abstract && fields.title && fields.uploadedFile;

  const disabledButtonPossibility = {
    1: firstForm || false,
    2: isValid,
    3: isValid,
  };
  return (
    <div className="flex flex-col flex-1">
      <RequestStatusToast
        message={
          isError
            ? "submitted failed"
            : "Article has been submitted successfully"
        }
        onClose={() => {
          setShow(false);
        }}
        show={show}
        isError={isError}
      />

      <div className="flex flex-col  py-20 justify-center ">
        <Stepper stepper={stepper} items={items} />
        <FormProvider {...methods}>
          {stepper == 1 && <ArticleDetails />}
          {stepper == 2 && <AuthorsDetails />}
          {stepper == 3 && <Review />}

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
                !disabledButtonPossibility[
                  stepper as keyof typeof disabledButtonPossibility
                ] || isPending
              }
              onClick={() => {
                if (stepper !== items.length) {
                  onNext();
                }
                if (stepper === items.length) {
                  handleSubmit(onSubmit)();
                }
              }}
              className={`py-3.5 px-7 min-w-36 text-sm font-semibold tracking-wider rounded-md text-white  focus:outline-none ${
                !disabledButtonPossibility[
                  stepper as keyof typeof disabledButtonPossibility
                ] || isPending
                  ? "bg-gray-300"
                  : "bg-blue-600 hover:bg-blue-700"
              } `}
            >
              {stepper === items.length ? "Submit" : "Next"}
            </Button>
          </div>
        </FormProvider>
      </div>
      <Loading
        isPending={isPending}
        text={"Article is Submitting wait ....."}
      />
    </div>
  );
};

export default Submission;
