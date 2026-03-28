"use client";
import { Fragment, useState } from "react";
import { useEditorialMembers } from "../api/editorial-team/get";
import Modal from ".//Modal";
import { useDeleteEditorialMember } from "../api/editorial-team/delete";
import { RequestStatusToast } from "../components/ToasterStatus";
import Loading from "../components/Loading";

const EditEditorialTeam = ({}) => {
  const { data } = useEditorialMembers();
  const { mutate, isError, isPending } = useDeleteEditorialMember();
  const [show, setShow] = useState(false);

  const onDelete = async ({ id }: { id: string }) => {
    await mutate(id);
    setShow(true);
  };
  return (
    <div className="flex-1 py-20  flex flex-col gap-8 sm:px-20 px-10">
      <Loading isPending={isPending} text={"Deleting"} />

      <RequestStatusToast
        message={
          isError
            ? "Deleting failed"
            : "Editor member has been deleted successfully"
        }
        onClose={() => {
          setShow(false);
        }}
        show={show}
        isError={isError}
      />
      <>
        <p className="text-20 py-5 font-medium text-start">Editor in Chief</p>
        <div className="flex flex-col gap-5">
          {data
            ?.filter(({ type }) => type === "editorInChief")
            ?.map(({ firstName, lastName, title, _id }) => (
              <Fragment key={_id}>
                <div className="flex" key={_id}>
                  <p className="flex-1 text-start">
                    {" "}
                    {title}. {firstName} {lastName}
                  </p>
                  <Modal
                    name={`${title}. ${firstName} ${lastName}`}
                    onClickHandler={() => {
                      onDelete({ id: _id });
                    }}
                  >
                    <p className="text-white bg-red-600 px-5 py-2 rounded-md ml-5 ">
                      Delete
                    </p>
                  </Modal>
                </div>
                <div className="w-full h-[1px] bg-gray-200 " />
              </Fragment>
            ))}
        </div>

        <p className="text-20  py-10 font-medium text-start">
          Associate Editor
        </p>
        <div className="flex flex-col gap-5">
          {data
            ?.filter(({ type }) => type === "associateEditor")
            ?.map(({ _id, firstName, lastName, title }) => (
              <Fragment key={_id}>
                <div className="flex" key={_id}>
                  <p className="flex-1 text-start">
                    {" "}
                    {title}. {firstName} {lastName}
                  </p>
                  <Modal
                    name={`${title}. ${firstName} ${lastName}`}
                    onClickHandler={() => {
                      onDelete({ id: _id });
                    }}
                  >
                    <p className="text-white bg-red-600 px-5 py-2 rounded-md ml-5 ">
                      Delete
                    </p>
                  </Modal>
                </div>
                <div className="w-full h-[1px] bg-gray-200" />
              </Fragment>
            ))}
        </div>
      </>
    </div>
  );
};
export default EditEditorialTeam;
