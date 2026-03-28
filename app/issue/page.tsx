"use client";
import { useGetIssues } from "../api/issue";
// import Form from "./components/Form";
import Modal from "./components/Modal";
import AddIssueModal from "./components/AddIssueModal";
import AddVolumeModal from "./components/AddVolumeModal";

const Archives = () => {
  const { data } = useGetIssues();

  return (
    <div className="flex flex-col  gap-2 p-40">
      <AddIssueModal />
      <AddVolumeModal />
      {data?.map(({ value, label, volumeNumber, isCurrentIssue }) => {
        return (
          <div
            key={value}
            className="flex flex-col items-center gap-1 justify-center font-bold"
          >
            <Modal
              id={value}
              issueText={`Volume ${volumeNumber} Issue ${label}`}
            >
              Volume {volumeNumber} Issue {label}{" "}
              {isCurrentIssue && "(Current Issue)"}
            </Modal>
            <div className="bg-black h-1 w-full" />
          </div>
        );
      })}
    </div>
  );
};
export default Archives;
